import React from 'react';

const LetsConnect = ({ darkMode = false }) => {
  return (
    <section id="contact" className="relative w-full">
      <div 
        className="w-full min-h-[200px] md:min-h-[140px] relative bg-cover bg-center overflow-hidden flex items-center justify-center py-8 px-6"
        style={{ backgroundImage: `url('/banner/${darkMode ? 'ld' : 'll'}-connect-banner.png')` }}
      >
        {/* Optional fallback overlay in case image takes time to load or text needs contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-5xl">
          
          <div className="text-center text-white">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-1 md:mb-2">Let's Connect</h2>
            <p className="text-xs md:text-sm text-gray-200 max-w-sm mx-auto">
              Have a question, collaboration idea or just want to say hello? I'd love to hear from you.
            </p>
          </div>
          
          <button className="flex items-center justify-center space-x-2 bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors border-2 border-transparent hover:border-white/20 shadow-lg flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            <span>Send a Message</span>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
