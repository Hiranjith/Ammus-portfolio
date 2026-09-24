import React from 'react';

const WhatIDo = ({ desktopMode = false }) => {
  const desktopCards = [
    {
      title: "UPSC Teaching",
      desc: "Concept clarity. Current awareness. Answer writing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#d97757]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      bgClass: "bg-[#fff5f2] dark:bg-[#2a1a15]",
    },
    {
      title: "SSC Teaching",
      desc: "Strategy, practice and progress.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#c0734a]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
      bgClass: "bg-[#fdf6f2] dark:bg-[#2a2215]",
    },
    {
      title: "PSC Teaching",
      desc: "For a stronger and progressive society.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#5c5c99]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
      bgClass: "bg-[#f5f5fa] dark:bg-[#1a1a2a]",
    }
  ];

  const mobileCards = [
    {
      title: "UPSC",
      subtitle: "Teaching",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#e69b3e]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      bgClass: "bg-[#fdf4e8] dark:bg-[#2a2015]",
    },

    {
      title: "SSC",
      subtitle: "Teaching",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#c26543]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
      bgClass: "bg-[#fcf1ef] dark:bg-[#2a1a15]",
    },
    {
      title: "PSC",
      subtitle: "Teaching",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#2c6565]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
      bgClass: "bg-[#f2f4f4] dark:bg-[#1a2525]",
    }
  ];

  if (desktopMode) {
    return (
      <section id="teaching" className="flex flex-row items-center py-6">
        <div className="w-[200px] pr-4 flex-shrink-0">
          <h2 className="font-serif font-medium mb-1 text-2xl">What I Do</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#d97757] to-transparent rounded-full mb-4 opacity-90"></div>
          <p className="text-grayText leading-relaxed text-[13px] mb-4">
            Teaching, learning, creating and exploring - different ways of knowing the world.
          </p>
          <a href="#" className="inline-flex items-center space-x-1 text-[#d97757] font-medium hover:underline text-[12px]">
            <span>Explore More</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        
        <div className="flex flex-row gap-4">
          {desktopCards.map((card, idx) => (
            <div key={idx} className={`w-[150px] aspect-square p-4 justify-center flex-shrink-0 rounded-2xl flex flex-col items-center text-center ${card.bgClass} shadow-sm border border-transparent dark:border-gray-800 transition-transform hover:-translate-y-1`}>
              <div className="mb-3">
                {card.icon}
              </div>
              <h3 className="font-serif font-medium mb-1.5 text-[14px]">{card.title}</h3>
              <p className="text-grayText text-[10px] leading-tight">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Mobile Render
  return (
    <section id="teaching" className="py-6 px-4 flex flex-col border-b border-gray-200 dark:border-gray-800">
      <div className="w-full mb-5 text-left">
        <h2 className="font-serif font-medium mb-1 text-2xl">What I Do</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#d97757] to-transparent rounded-full opacity-90 rotate-[-1deg] origin-left"></div>
      </div>
      
      <div className="flex flex-row justify-between gap-2 pb-2">
        {mobileCards.map((card, idx) => (
          <div key={idx} className={`flex-1 py-4 px-2 rounded-xl flex flex-col items-center text-center ${card.bgClass} shadow-sm border border-transparent dark:border-gray-800`}>
            <div className="mb-2">
              {card.icon}
            </div>
            <h3 className="font-sans font-bold text-[15px] text-gray-900 dark:text-gray-100 leading-tight tracking-wide">{card.title}</h3>
            <span className="text-gray-600 dark:text-gray-400 text-[11px] font-medium">{card.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
