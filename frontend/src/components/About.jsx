import React from 'react';
import StorySection from './StorySection';
import SkillsAndLanguages from './SkillsAndLanguages';

const About = ({ darkMode }) => {
  return (
    <div className="w-full flex flex-col">
      <section 
      className="relative w-full h-[350px] md:h-[450px] bg-[#fdfbf7] dark:bg-[#111111] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('/banner/${darkMode ? 'ld' : 'll'}-about-banner.png')` }}
    >
      {/* Container for content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-center relative z-10">
        
        {/* Left Text Content */}
        <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col items-start -mt-16 md:-mt-28">
          
          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] text-lightText dark:text-white mb-4 md:mb-5">
            More than <br /> a <span className="text-primary font-serif">Title</span>
          </h1>
          
          {/* Paragraph */}
          <p className="text-lightText dark:text-gray-300 font-medium text-xs md:text-sm mb-6 md:mb-8 leading-relaxed max-w-[260px] md:max-w-[340px]">
            A teacher, an aspirant, a dreamer and a million little things in between — here's a glimpse into my world.
          </p>
        </div>

      </div>
    </section>
    <StorySection />
    <SkillsAndLanguages />
  </div>
  );
};

export default About;
