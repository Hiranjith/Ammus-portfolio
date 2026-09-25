import React from 'react';
import StorySection from './StorySection';
import SkillsAndLanguages from './SkillsAndLanguages';

const About = ({ darkMode }) => {
  return (
    <div className="w-full flex flex-col">
      <section className="relative w-full h-[350px] md:h-[450px] bg-[#fdfbf7] dark:bg-[#111111] overflow-hidden">
      {/* Mobile Background Image */}
      <img 
        src={`/banner/${darkMode ? 'md' : 'ml'}-about-banner.png`} 
        alt="About Banner Mobile" 
        className="absolute inset-0 w-full h-full object-cover object-center md:hidden" 
      />
      {/* Desktop Background Image */}
      <img 
        src={`/banner/${darkMode ? 'ld' : 'll'}-about-banner.png`} 
        alt="About Banner Desktop" 
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block" 
      />
      
      {/* Gradient Overlay for smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#fdfbf7] to-transparent dark:from-[#111111] pointer-events-none z-0"></div>
      
      {/* Container for content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-center relative z-10">
        
        {/* Left Text Content */}
        <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col items-start -mt-16 md:-mt-28">
          
          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] text-lightText dark:text-white mb-4 md:mb-5">
            More than <br /> a <span className="text-primary font-serif">Title</span>
          </h1>
          
          {/* Paragraph */}
          <p className="text-lightText dark:text-gray-300 font-medium text-xs md:text-sm mb-6 md:mb-8 leading-relaxed max-w-[140px] md:max-w-[340px]">
            A teacher, an aspirant, a dreamer and a million little things in between — here's a glimpse into my world.
          </p>
        </div>

      </div>
    </section>
    <StorySection />
    <SkillsAndLanguages />
    
    {/* Footer Banner */}
    <div className="w-full mt-10 md:mt-16">
      {/* Mobile Footer Banner */}
      <img 
        src={`/banner/${darkMode ? 'md' : 'ml'}-about-footer.png`} 
        alt="About Footer Banner Mobile" 
        className="w-full h-[150px] sm:h-[200px] object-cover object-center md:hidden"
      />
      {/* Desktop Footer Banner */}
      <img 
        src={`/banner/${darkMode ? 'ld' : 'll'}-about-footer.png`} 
        alt="About Footer Banner Desktop" 
        className="w-full h-[250px] lg:h-[300px] object-cover object-center hidden md:block"
      />
    </div>
  </div>
  );
};

export default About;
