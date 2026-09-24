import React from 'react';

const Travel = ({ desktopMode = false }) => {
  const places = [
    { name: "Ammus", image: "/travel/ammus.png" },
    { name: "Beach", image: "/travel/beach.png" },
    { name: "Kolukkumala", image: "/travel/kolukkumala.png" },
    { name: "Kollangode", image: "/travel/kollangode.png" },
    { name: "Munnar", image: "/travel/munnar.png" },
    { name: "Palakkad", image: "/travel/palakkad.png" }
  ];

  if (desktopMode) {
    return (
      <section id="travel" className="flex flex-row items-center py-6 w-full">
        <div className="flex flex-row items-center w-full">
          
          <div className="w-[200px] pr-4 flex-shrink-0">
            <h2 className="font-serif font-medium mb-3 flex items-center text-2xl justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-[#d97757]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
              Travel
            </h2>
            <p className="text-grayText leading-relaxed text-[11px] mb-3">
              New places.<br/>
              New perspectives.<br/>
              A fuller me.
            </p>
            <a href="#" className="inline-flex items-center space-x-1 text-[#d97757] font-medium hover:underline text-[11px]">
              <span>View Travel Gallery</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          
          <div className="flex flex-row gap-3">
            {places.map((place, idx) => (
              <div key={idx} className="flex flex-col items-center group w-[105px] flex-shrink-0">
                <div className="w-full h-[90px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm relative bg-gray-100 dark:bg-gray-800">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col w-[321px] ml-6 flex-shrink-0">
            <div className="w-full h-[90px] mb-1.5 rounded-xl overflow-hidden shadow-sm border border-transparent bg-transparent flex items-center justify-center relative">
              <img src="/quotes/mq-l.png" alt="Collect moments, not things" className="w-full h-full object-cover dark:hidden" />
              <img src="/quotes/mq-d.png" alt="Collect moments, not things" className="w-full h-full object-cover hidden dark:block" />
              <span className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 font-medium -z-10">Quote Placeholder</span>
            </div>
            <span className="text-[10px] opacity-0 select-none">Alignment Spacer</span>
          </div>
          
        </div>
      </section>
    );
  }

  // Mobile Render
  const mobilePlaces = places.slice(0, 4);

  return (
    <section id="travel" className="py-8 px-6 flex flex-col border-b border-gray-200 dark:border-gray-800">
      <div className="w-full mb-8 text-left">
        <h2 className="font-serif font-medium mb-1 text-3xl flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-3 text-[#d97757]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
          Travel
        </h2>
        <div className="w-48 h-1 bg-gradient-to-r from-[#d97757] to-transparent rounded-full opacity-90 rotate-[-1deg] origin-left"></div>
        <p className="text-grayText text-sm mt-4">
          New places. New perspectives. A fuller me.
        </p>
      </div>
      
      <div className="flex flex-col relative w-full">
        <div className="w-full grid grid-cols-4 gap-2.5 pb-2">
          {mobilePlaces.map((place, idx) => (
            <div key={idx} className="w-full flex flex-col items-center group">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm relative bg-gray-100 dark:bg-gray-800">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-5 w-full flex justify-start">
          <a href="#" className="inline-flex items-center text-[#a85032] font-semibold text-[14px] group">
            <span className="border-b-[1.5px] border-[#ecc8b9] pb-[1px] group-hover:border-[#a85032] transition-colors">View Travel Gallery</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        
        <div className="mt-10 w-full rounded-2xl overflow-hidden relative">
          <img src="/quotes/mq-l.png" alt="Travel quote" className="w-full h-auto object-cover dark:hidden" />
          <img src="/quotes/mq-d.png" alt="Travel quote" className="w-full h-auto object-cover hidden dark:block" />
        </div>
      </div>
    </section>
  );
};

export default Travel;
