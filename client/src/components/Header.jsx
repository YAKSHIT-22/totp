import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full p-4 py-5">
      <div className='flex items-center justify-center w-full p-4'>
        <div className="flex items-center justify-center w-full">
          <ul className="flex gap-4 justify-center items-center">
            <li className="text-gray-800 text-xl hover:font-semibold font-bold text-center transition-all duration-100 cursor-pointer">
              <Link to="/docs">Docs</Link>
            </li>
          </ul>
          <div className="flex items-center justify-center w-[45%]">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                viewBox="0 0 55.4 48"
                className="w-14 h-14"
              >
                <g fill="rgba(0, 0, 0, 1)">
                  <path d="M0 24c0 1.1.3 2.1.8 3l9.7 16.8c1 1.7 2.5 3.1 4.4 3.7 3.6 1.2 7.5-.3 9.4-3.5l2.3-4.1-9.2-16L27.2 7l2.3-4c.7-1.2 1.6-2.2 2.7-3h-15c-2.6 0-5.1 1.4-6.4 3.7L.8 21c-.5.9-.8 1.9-.8 3z"></path>
                  <path d="M55.4 24c0-1.1-.3-2.1-.8-3L44.8 4C42.9.7 39-.7 35.4.5c-1.9.6-3.4 2-4.4 3.7L28.7 8 38 24l-9.8 16.9-2.3 4.1c-.7 1.2-1.6 2.2-2.7 3h15.1c2.6 0 5.1-1.4 6.4-3.7l10-17.3c.4-.9.7-1.9.7-3z"></path>
                </g>
              </svg>
            </Link>
          </div>
          <ul className="flex gap-4 justify-center items-center">
            <li className="text-gray-800 text-xl hover:font-semibold font-bold text-center transition-all duration-100 cursor-pointer">
              <Link to="/flow">Flow</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
