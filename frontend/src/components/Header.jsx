import React from 'react';

const Header = ({ darkMode, toggleDarkMode, currentHash }) => {
  // Default to #home if hash is empty
  const activeHash = currentHash || '#home';
  
  const getLinkClass = (hash) => {
    const isActive = activeHash === hash;
    return `hover:text-primary transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1' : ''}`;
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 border-b border-gray-200 dark:border-gray-800 bg-lightBg dark:bg-darkBg sticky top-0 z-50">
      <div className="flex flex-col">
        <h1 className="font-cursive text-4xl leading-none">Ammu Krishnan</h1>
        <p className="text-[0.65rem] uppercase tracking-widest text-grayText mt-1">Educate • Inspire • Explore</p>
      </div>

      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#home" className={getLinkClass('#home')}>Home</a>
        <a href="#about" className={getLinkClass('#about')}>About</a>
        <a href="#journey" className={getLinkClass('#journey')}>Journey</a>
        <a href="#creative" className={getLinkClass('#creative')}>Creative</a>
        <a href="#travel" className={getLinkClass('#travel')}>Travel</a>
        <a href="#contact" className={getLinkClass('#contact')}>Contact</a>
      </nav>

      <div className="flex items-center space-x-4">

        <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1 cursor-pointer" onClick={toggleDarkMode}>
          <div className={`p-1 rounded-full transition-colors ${!darkMode ? 'bg-white shadow-sm' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          </div>
          <div className={`p-1 rounded-full transition-colors ${darkMode ? 'bg-gray-700 shadow-sm text-white' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </div>
        </div>


      </div>
    </header>
  );
};

export default Header;
