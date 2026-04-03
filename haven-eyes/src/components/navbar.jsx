import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      {/* Top row: Find a store on the left, logo centered, actions on the right */}
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* Left: Find a store */}
        <a
          href="#find-store"
          className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black"
          aria-label="Find a store"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
          <span>Find a store</span>
        </a>

        {/* Center: logo */}
        <div className="font-bold text-lg">logo</div>

        {/* Right: actions */}
        <div className="flex items-center gap-4">
          <button
            className="px-10 py-2 rounded-full bg-white text-sm border border-[#016C42] text-[#016C42]"
            aria-label="Re-order contact lenses"
          >
            Re-order contact lenses
          </button>
          <button className="px-2 py-1">Log in</button>

          {/* Heart (favorites) */}
          <button
            aria-label="Favorites"
            className="p-2 rounded hover:bg-gray-100 text-gray-700"
            title="Favorites"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <path d="M12.1 21.35l-1.1-1.01C5.14 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.14 6.86-8.99 11.84l-1.9 1.01z"/>
            </svg>
          </button>

          {/* Shopping bag (cart) */}
          <button
            aria-label="Cart"
            className="p-2 rounded hover:bg-gray-100 text-gray-700"
            title="Cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <path d="M6 2h12l-1.2 6H7.2L6 2z" fill="currentColor"/>
              <path d="M6 8h12v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M9 11a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom navigation row (centered) */}
      <div className="mt-4">
        <ul className="flex gap-12 flex-wrap items-center justify-end list-none m-0 p-0">
          <li>Glasses</li>
          <li>Contact Lenses</li>
          <li>Eye Tests</li>
          <li>Hearing</li>
          <li>Home visits</li>
          <li>Offers</li>
          <li>search icon</li>
          <li>
            <button className="bg-green-600 text-white px-10 py-2 rounded-full">Book Appointment</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

