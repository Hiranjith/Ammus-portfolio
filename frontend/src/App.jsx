import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import BeyondBooks from './components/BeyondBooks';
import Travel from './components/Travel';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import SplashScreen from './components/SplashScreen';
import About from './components/About';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

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

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
    <>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onFinish={() => setShowSplash(false)} />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="font-sans min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300 pb-20 lg:pb-0 relative"
          >
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentHash={currentHash} />
            
            {currentHash === '#about' ? (
              <main className="w-full">
                <About darkMode={darkMode} />
              </main>
            ) : (
              <main className="w-full">
                <Hero darkMode={darkMode} />
                
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
            )}

            <Footer />
            <MobileNav currentHash={currentHash} />
      
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
