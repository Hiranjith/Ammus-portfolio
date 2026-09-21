import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import BeyondBooks from './components/BeyondBooks';
import Travel from './components/Travel';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference in localStorage or prefers dark mode via OS
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="font-sans min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300 pb-20 lg:pb-0 relative">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="w-full">
        <Hero darkMode={darkMode} />
        
        {/* 'A Little About Me' Section for Mobile (as seen in Mobile Mocks) */}
        <section className="md:hidden py-10 px-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="font-serif text-2xl font-medium mb-3 flex items-center justify-between">
            A Little About Me
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary opacity-80">
              <path d="M30 10C25 15 20 25 10 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M25 10C22 13 18 18 15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M30 15C27 18 22 22 20 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </h2>
          <p className="text-sm text-grayText mb-4 leading-relaxed">
            A teacher by passion, an aspirant by ambition, an artist by heart and an explorer by nature. I believe in learning, unlearning and creating a life that feels meaningful.
          </p>
          <a href="#about" className="inline-flex items-center space-x-1 text-primary font-medium hover:underline text-sm">
            <span>Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </section>

        {/* Desktop Condensed Layout (Horizontal Rows) */}
        <div className="hidden lg:flex w-full justify-center px-8 bg-lightBg dark:bg-darkBg">
          <div className="flex flex-col w-max">
            {/* Top Row: What I Do + Beyond Books */}
            <div className="flex flex-row items-center border-b border-gray-200 dark:border-gray-800">
              <WhatIDo desktopMode={true} />
              <div className="w-[1px] h-24 bg-gray-200 dark:bg-gray-800 flex-shrink-0 mx-8"></div>
              <BeyondBooks desktopMode={true} />
            </div>

            {/* Bottom Row: Travel */}
            <div className="flex flex-row items-center border-b border-gray-200 dark:border-gray-800">
              <Travel desktopMode={true} />
            </div>
          </div>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="block lg:hidden">
          <WhatIDo />
          <BeyondBooks />
          <Travel />
        </div>
        
        <LetsConnect darkMode={darkMode} />
      </main>

      <Footer />
      <MobileNav />
      
    </div>
  );
}

export default App;
