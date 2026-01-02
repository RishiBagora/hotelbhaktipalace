// src/data/attractionsData.js

const attractionsData = [
  {
    slug: "shree-nathji-temple",
    name: "Shree Nath Ji Temple",
    shortDescription: "The spiritual heart of Nathdwara, revered for centuries.",
    distance: "300 meters from Hotel Bhakti Palace",
    category: "Temple",
    image: "https://img.artpal.com/971381/131-23-1-4-1-41-51m.jpg",
    travelTime: "2-3 minutes(walking)",
  locationHint:
    "The surrounding lanes are pedestrian-friendly and filled with local shops and devotional spaces.",

    // ye niche wali cheeze detail page ke kaam aayengi
    details: {
      description:
        "Shree Nath Ji Temple is one of the most important pilgrimage sites in India...",
      bestTime: "Morning Mangla Aarti",
      tips: "Wear modest clothing, arrive early"
    }
  },

  {
    slug: "haldighati",
    name: "Haldighati",
    shortDescription: "Historic battlefield known for Maharana Pratap.",
    distance: "14 km from Hotel Bhakti Palace",
    category: "Heritage",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/68/71/bb/haldighati-battle-field.jpg?w=900&h=500&s=1",

    details: {
      description: "Haldighati is a historic mountain pass...",
      bestTime: "October to March",
      tips: "Visit the museum for better context"
    }
  }
];

export default attractionsData;