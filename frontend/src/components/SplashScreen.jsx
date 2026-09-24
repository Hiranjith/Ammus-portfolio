import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lottie } from 'lottie-react';

const fullText1 = "Welcome to the world of ";
const fullText2 = "Ammus..!";
const totalLength = fullText1.length + fullText2.length;

const SplashScreen = ({ onFinish }) => {
  const [stage, setStage] = useState(1);
  const [lottieData, setLottieData] = useState(null);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Fetch a beautiful, subtle sparkling Lottie animation for the background
    fetch('https://assets9.lottiefiles.com/packages/lf20_a2chheio.json')
      .then(res => res.json())
      .then(data => setLottieData(data))
      .catch(() => console.log('Failed to load Lottie background'));

    // Sequence timings
    const timer1 = setTimeout(() => {
      setStage(2);
    }, 6500); // 6.5 seconds for slower writing text + drawing heart

    const timer2 = setTimeout(() => {
      setStage(3);
    }, 10000); // Show Guruvayurappan for 3.5 seconds

    const timer3 = setTimeout(() => {
      onFinish(); // Tell App.jsx to render the main app
    }, 11500); // Extra time for the final fade out

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  // Typewriter effect for stage 1
  useEffect(() => {
    if (stage === 1) {
      setTextIndex(0);
      let current = 0;
      const interval = setInterval(() => {
        if (current < totalLength) {
          current++;
          setTextIndex(current);
        } else {
          clearInterval(interval);
        }
      }, 130); // 130ms per character (slower writing)

      return () => clearInterval(interval);
    }
  }, [stage]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      {/* Background Lottie Animation */}
      {lottieData && stage < 3 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <Lottie 
            animationData={lottieData} 
            loop={true} 
            style={{ width: '150%', height: '150%', opacity: 0.6 }} 
          />
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {stage === 1 && (
          <motion.div
            key="stage1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center text-center px-4 relative z-10"
          >
            <motion.div 
              initial={{ filter: 'blur(10px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={{ duration: 1.5 }}
              className="relative w-56 h-56 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.15)] border-[1px] border-white/20"
            >
              <img 
                src="/assets/ammus.png" 
                alt="Welcome to the world of ammus" 
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
            
            <div className="text-4xl md:text-5xl lg:text-6xl font-cursive text-white/95 tracking-wide drop-shadow-md text-center max-w-[90vw]">
              <div className="inline-block leading-tight md:leading-normal">
                {/* Line 1 */}
                <span className="inline-block">
                  {fullText1.substring(0, textIndex)}
                </span>
                
                {/* Line 2 */}
                <span className="inline-block whitespace-nowrap">
                  {textIndex >= fullText1.length ? fullText2.substring(0, textIndex - fullText1.length) : ""}
                  
                  {/* Heart drawing with Pen when text finishes */}
                  {textIndex >= totalLength && (
                    <motion.span 
                      className="relative inline-flex items-center justify-center translate-y-1 ml-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg viewBox="0 0 32 32" className="w-8 h-8 md:w-10 md:h-10 text-pink-500 fill-transparent stroke-current drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" style={{ strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                        <motion.path
                          d="M16 28 C 16 28, 4 18, 4 10 C 4 5, 10 3, 16 10 C 22 3, 28 5, 28 10 C 28 18, 16 28, 16 28 Z"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, ease: "easeInOut" }} 
                        />
                      </svg>
                      {/* The Pen writing the heart */}
                      <motion.span
                        className="absolute -right-3 -bottom-3 text-2xl md:text-3xl origin-bottom-left"
                        initial={{ opacity: 1, x: -20, y: -20 }}
                        animate={{ 
                          opacity: [1, 1, 1, 0], 
                          x: [-20, 15, -10, 20, 0],
                          y: [-20, -15, 10, -5, 20],
                          rotate: [-20, 10, -10, 20, 0]
                        }}
                        transition={{ duration: 1.4, times: [0, 0.2, 0.5, 0.9, 1] }}
                      >
                        🖋️
                      </motion.span>
                    </motion.span>
                  )}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            key="stage2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center text-center px-4 relative z-10"
          >
            <motion.div 
              initial={{ filter: 'blur(10px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={{ duration: 1.5 }}
              className="relative w-56 h-56 md:w-80 md:h-80 mb-10 rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.25)] border-[1px] border-yellow-600/20"
            >
              <img 
                src="/assets/guruvayur.png" 
                alt="Guruvayurappan" 
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="text-3xl md:text-5xl font-serif text-[#FFD700] tracking-wider drop-shadow-lg"
            >
              ഹന്ത! ഭാഗ്യം ജനാനാം.
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
