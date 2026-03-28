const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.jsx')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Faster durations
  content = content.replace(/duration:\s*([0-9.]+)/g, (match, p1) => {
    let dur = parseFloat(p1);
    if (dur >= 0.8) return 'duration: 0.5';
    if (dur > 0.5 && dur < 0.8) return 'duration: 0.4';
    return match;
  });

  // Reduce vertical travel (y: 30 -> y: 15, y: 40 -> y: 15, y: 20 -> y: 10)
  content = content.replace(/y:\s*([0-9]+)/g, (match, p1) => {
    let y = parseInt(p1);
    if (y > 20) return `y: 15`;
    if (y > 10 && y <= 20) return `y: 10`;
    return match;
  });

  // Reduce delay
  content = content.replace(/delay:\s*([0-9.]+)/g, (match, p1) => {
    let d = parseFloat(p1);
    // Don't mess with small delays, just halve big ones
    if (d > 0.3) return `delay: ${(d/2).toFixed(1)}`;
    return match;
  });

  // Use aggressive negative margin for viewport so it triggers sooner
  content = content.replace(/viewport=\{\{[^}]*amount:\s*[0-9.]+\s*\}\}/g, 'viewport={{ once: true, margin: "-50px" }}');
  
  // Make sure ease doesn't look too slow
  // The user actually loves smooth, but wants fast. The ease array [0.16, 1, 0.3, 1] is fine for 0.5s duration.

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

walkDir('src/components', processFile);
walkDir('src/Pages', processFile);
console.log("Optimization Complete.");
