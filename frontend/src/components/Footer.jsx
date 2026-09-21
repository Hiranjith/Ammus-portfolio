import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto w-full relative">
        
        <div className="flex flex-col z-10 w-2/3 md:w-auto">
          <span className="text-[13px] font-medium mb-3">Find me on</span>
          <div className="flex items-center space-x-3 mb-6">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white hover:opacity-90 transition-opacity shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#cc0000] text-white hover:opacity-90 transition-opacity shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0077b5] text-white hover:opacity-90 transition-opacity shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-black hover:opacity-90 transition-opacity shadow-sm border border-gray-200 dark:border-transparent">
              <span className="font-serif font-bold text-lg">M</span>
            </a>
          </div>
          <p className="text-[11px] md:text-[13px] text-gray-500 dark:text-gray-400 w-full pr-2">© 2026 Ammu Krishnan. All rights reserved.</p>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-end z-0">
          <div className="flex flex-col items-end transform -rotate-[6deg] text-gray-400 dark:text-gray-400/80">
            <span className="font-cursive text-[28px] md:text-4xl leading-tight pr-5 opacity-80">Keep</span>
            <div className="flex items-center opacity-80">
              <span className="font-cursive text-[28px] md:text-4xl leading-tight">Exploring</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 ml-1 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
