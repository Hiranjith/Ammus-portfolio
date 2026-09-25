import React from 'react';
import { motion } from 'framer-motion';
import JourneyContent from './JourneyContent';

const Journey = ({ darkMode }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Banner Section */}
      <section className="relative w-full h-[450px] md:h-[450px] lg:h-[500px] bg-lightBg dark:bg-darkBg overflow-hidden">
        <img 
          src={`/banner/${darkMode ? 'ld' : 'll'}-journey-header.png`} 
          alt="Journey Banner Desktop" 
          className="absolute inset-0 w-full h-full object-cover object-center hidden md:block" 
        />
        {/* Mobile Banner */}
        <img 
          src={darkMode ? '/banner/ml-journey-banner.png' : '/banner/md-journey-header.png'} 
          alt="Journey Banner Mobile" 
          className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:hidden" 
        />
        
        {/* Gradient Overlay at top for smooth transition from navbar (Mobile Only) */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-lightBg via-lightBg/60 to-transparent dark:from-darkBg dark:via-darkBg/60 pointer-events-none z-0 md:hidden"></div>
        
        {/* Gradient Overlay from left for text readability */}
        <div className="absolute inset-y-0 left-0 w-[60%] md:w-[70%] lg:w-[60%] bg-gradient-to-r from-lightBg/90 via-lightBg/50 to-transparent dark:from-darkBg/90 dark:via-darkBg/50 pointer-events-none z-0"></div>
        
        {/* Gradient Overlay for smooth transition to the next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-32 bg-gradient-to-t from-lightBg to-transparent dark:from-darkBg pointer-events-none z-0"></div>

        {/* Text Content overlaying the banner */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-start relative z-10 pt-10 md:pt-28 lg:pt-36">
          <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-start">
            
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300">
                My Journey
              </span>
              <div className="w-12 h-[1px] bg-primary dark:bg-[#f48c42]"></div>
            </div>
            
            {/* Main Heading */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] md:leading-[1.25] text-[#0d1b2a] dark:text-white mb-4 md:mb-6 dark:[text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">
              A journey shaped by <br className="hidden sm:block" />
              <span className="text-primary dark:text-[#f48c42] font-serif">curiosity, purpose</span> <br className="hidden sm:block" />
              and a <span className="text-primary dark:text-[#f48c42] font-serif">bigger dream.</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-gray-800 dark:text-gray-200 font-semibold text-sm md:text-base leading-relaxed md:max-w-lg lg:max-w-xl">
              {/* Mobile: 7 lines forced */}
              <span className="md:hidden block">
                From a curious student to <br />
                a civil services aspirant, <br />
                a part-time teacher and <br />
                a lifelong learner — <br />
                every step has brought <br />
                me closer to the life <br />
                I aspire to build.
              </span>
              
              {/* Desktop: Original natural wrapping */}
              <span className="hidden md:inline">
                From a curious student to a civil services aspirant, a part-time teacher
                and a lifelong learner — every step has brought me closer to the life I aspire to build.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Journey Main Content */}
      <JourneyContent darkMode={darkMode} />

      {/* Footer Banner */}
      <div className="w-full relative">
        <img 
          src={`/banner/${darkMode ? 'ld' : 'll'}-journey-footer.png`} 
          alt="Journey Footer Banner" 
          className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover object-center"
        />
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-16 md:h-32 bg-gradient-to-b from-lightBg to-transparent dark:from-darkBg pointer-events-none"></div>
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-lightBg to-transparent dark:from-darkBg pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Journey;
