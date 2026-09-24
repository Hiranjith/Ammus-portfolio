import React from 'react';

const BeyondBooks = ({ desktopMode = false }) => {
  const hobbies = [
    { name: "Sketching", image: "/hobbies/sketching.png" },
    { name: "Reading", image: "/hobbies/reading.png" },
    { name: "Workout", image: "/hobbies/workout.png" },
    { name: "Anchoring", image: "/hobbies/anchoring.png" }
  ];

  return (
    <section id="creative" className={`${desktopMode ? 'flex flex-col items-start py-6' : 'py-8 px-6 flex flex-col border-b border-gray-200 dark:border-gray-800'}`}>
      <div className={`${desktopMode ? 'mb-4' : 'w-full mb-8 text-left'}`}>
        <h2 className={`font-serif font-medium mb-1 ${desktopMode ? 'text-2xl' : 'text-3xl'}`}>Beyond Books</h2>
        <div className={`${desktopMode ? 'w-32 h-1 bg-gradient-to-r from-[#d97757] to-transparent rounded-full mb-2 opacity-90' : 'w-48 h-1 bg-gradient-to-r from-[#d97757] to-transparent rounded-full opacity-90 rotate-[-1deg] origin-left'}`}></div>
        <p className={`text-grayText ${desktopMode ? 'text-xs flex items-center justify-start' : 'text-sm mt-4'}`}>
          Things that make me, me.
        </p>
      </div>
      
      <div className={`flex items-center relative ${desktopMode ? '' : 'w-full'}`}>
        <div className={`${desktopMode ? 'flex flex-row gap-4' : 'w-full grid grid-cols-4 gap-2.5 pb-2'}`}>
          {hobbies.map((hobby, idx) => (
            <div key={idx} className={`${desktopMode ? 'w-[110px] flex-shrink-0' : 'w-full'} flex flex-col items-center group`}>
              <div className={`w-full ${desktopMode ? 'aspect-[4/3]' : 'aspect-[4/5]'} rounded-xl overflow-hidden mb-2 border border-gray-200 dark:border-gray-800 shadow-sm relative`}>
                <img src={hobby.image} alt={hobby.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <span className={`${desktopMode ? 'text-[11px]' : 'text-[13px]'} font-medium text-gray-700 dark:text-gray-300`}>{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondBooks;
