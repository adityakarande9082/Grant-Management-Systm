import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [userdata, setUserData] = useState({});
  const location = useLocation();

  return (
    <header className="sticky inset-0 z-50 border-b border-slate-100 bg-blue-default backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl gap-11 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="relative flex items-center">
          <Link to="/">
            <img src="/src/assets/CSD_Logo.png" loading="lazy" alt="Logo" className="w-8 h-8" />
          </Link>
        </div>
        <ul className="hidden items-center justify-center gap-6 md:flex">
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-white">
            <Link to="/fundingOppo">Funding Opportunities</Link>
          </li>
          {Object.keys(userdata).length > 0 && (
            <>
              <li className="pt-1.5 font-dm text-sm font-medium text-white">
                <Link to="/application">Application</Link>
              </li>
              <li className="pt-1.5 font-dm text-sm font-medium text-white">
                <a href="#">Closeout</a>
              </li>
            </>
          )}
        </ul>
        <div className="flex-grow"></div>
        <div className="hidden items-center justify-center gap-6 md:flex">
          <input
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="search"
            placeholder="Search Here"
          />
          {location.pathname !== '/login' && (
            <Link
              to="/login"
              className="bg-gradient-to-br from-blue-dark to-blue-light hover:bg-blue-dark px-10 py-2 font-dm text-sm font-medium text-white shadow-md transition-transform hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button" aria-label="Open Menu">
            <FiMenu className="h-6 w-auto text-blue-light"/>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
