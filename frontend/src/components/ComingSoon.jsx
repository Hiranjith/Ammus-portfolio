import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h2 className="font-cursive text-5xl md:text-7xl mb-4 text-primary">Coming Soon</h2>
      <p className="text-grayText text-lg max-w-md mx-auto">
        I am currently working on this section. Please check back later!
      </p>
      <a 
        href="#home" 
        className="mt-8 inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm text-sm"
      >
        <span>Back to Home</span>
      </a>
    </div>
  );
};

export default ComingSoon;
