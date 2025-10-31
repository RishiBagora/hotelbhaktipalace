// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='w-full bg-white h-[7vh] flex justify-between items-center px-[3vw]'>
//         <div className="menu-icon">
//             <img className='w-[10vw]' src="./public/menu.svg" alt="" />
//         </div>
//         <div className="buttns flex gap-2">
//             <div className="contact border rounded-4xl px-3 py-1 flex justify-center items-center text-[70%] md:text-[100%]">Contact us</div>
//             <div className="booknow border rounded-4xl px-3 py-1 flex justify-center items-center text-[70%] font-bold text-white bg-black  md:text-[100%]">Book now</div>
//         </div>
//     </div>
//   )
// }

// export default Navbar







import React from 'react';

const Navbar = () => {
  return (
    // 1. USE a fixed height (h-16) instead of vh for consistency.
    // 2. USE responsive padding: px-4 for mobile, sm:px-6 for larger screens.
    <nav className='w-full bg-white h-16 shadow-md flex justify-between items-center px-4 sm:px-6'>
      
      {/* --- Menu Icon (Left Side) --- */}
      {/* This will now be visible on all screen sizes */}
      <div className="menu-icon">
        {/* 3. USE a fixed size (h-6 w-6) for the icon to prevent it from getting huge on desktops. */}
        {/* Added cursor-pointer for better UX */}
        <img className='h-6 w-6 cursor-pointer' src="/menu.svg" alt="Menu Icon" />
      </div>

      {/* --- Buttons (Right Side) --- */}
      {/* This container will also be visible on all screen sizes */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* 4. USE <button> tags for accessibility and semantics. */}
        {/* 5. USE standard text sizes (text-xs, sm:text-sm) for predictable scaling. */}
        {/* 6. USE standard rounded-full for the pill shape. */}
        {/* 7. Added transition-colors for a smooth hover effect. */}
        <button className="border border-gray-300 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm hover:bg-gray-100 transition-colors">
          Contact us
        </button>
        <button className="border border-black bg-black text-white rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold hover:bg-gray-800 transition-colors">
          Book now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;