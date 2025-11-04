import React from 'react';
import { Link } from 'react-router-dom';

const Aboutsection = () => {
  return (
    // Main container for the About Us section
    // py-20 for vertical padding, px-4 for horizontal on mobile, sm:px-6 for tablet, lg:px-8 for desktop
    // bg-white ensures a clean white background as in your image
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Inner container to control max width and center the content */}
      <div className="max-w-7xl mx-auto">
        {/*
          Grid layout for desktop/tablet: 2 columns
          Flex layout for mobile: stacks items vertically (default flex behavior)
          items-center to vertically align content in the middle
          gap-8 for spacing between columns on larger screens, gap-12 for more vertical space on mobile
        */}
        <div className="md:grid md:grid-cols-2 md:items-center gap-8 md:gap-12 lg:gap-16">
          {/*
            Left Column: Image Placeholder
            Hidden on very small screens if you want, but generally good to show it.
            h-64 for fixed height on mobile, md:h-96 for larger height on desktop
            bg-gray-200 to mimic the light gray placeholder in your image
            flex items-center justify-center to center the icon
          */}
          <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-8 md:mb-0">
            {/* Placeholder icon, replace with your actual image tag */}
            <svg
              className="h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {/* If you have an actual image:
            <img src="/path/to/your/image.jpg" alt="About Us" className="w-full h-full object-cover rounded-lg" />
            */}
          </div>

          {/* Right Column: Text Content */}
          <div>
            {/* Sub-heading "ABOUT US" */}
            <p className="text-sm font-semibold text-[var(-txt)] uppercase tracking-wider mb-2">
              ABOUT US
            </p>
            {/* Decorative underline, adjust width and color as needed */}
            <div className="h-0.5 w-[40%] bg-zinc-600 mb-6"></div> {/* Added margin-bottom for spacing */}

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              The Best Holidays Start Here!
            </h2>

            {/* Paragraph Text */}
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima at
              quisquam eligendi placeat facere similique deserunt delectus nam
              consectetur unde.
            </p>

            {/* CTA Button */}
           
            <Link to="/about" > <div
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--grn)] hover:bg-black md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Read More 
            </div></Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;