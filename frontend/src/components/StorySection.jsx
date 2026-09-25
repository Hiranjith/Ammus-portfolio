import React from 'react';

const qualifications = [
  {
    title: 'UPSC Civil Service Coaching',
    desc1: 'Govt. Civil Service Academy, Palakkad',
    desc2: '',
    desc3: '2023-2024',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    title: 'Graduation',
    desc1: 'BSc Mathematics',
    desc2: 'Calicut university',
    desc3: '2016-2019',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    title: 'Higher Secondary Education',
    desc1: 'Board of Higher Secondary Examination',
    desc2: 'Year of Passing',
    desc3: '',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    )
  },
  {
    title: 'Secondary Education',
    desc1: 'Board of Public Examination',
    desc2: 'Year of Passing',
    desc3: '',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    )
  }
];

const StorySection = () => {
  return (
    <section className="w-full bg-[#fdfbf7] dark:bg-darkBg pt-6 pb-16 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Column 1: My Story */}
          <div className="flex flex-col">
            <h2 className="font-serif text-3xl text-lightText dark:text-white font-medium mb-1">My Story</h2>
            {/* The swoosh underline from image */}
            <svg className="w-32 h-2 text-primary opacity-80 mb-6" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>

            <div className="space-y-5 text-sm text-grayText dark:text-gray-400 leading-relaxed pr-0 md:pr-4">
              <p className="font-medium text-lightText dark:text-gray-200">Hi, I'm Ammu Krishnan.</p>
              <p>
                I am a UPSC, SSC and PSC teacher, a civil services aspirant, and a lifelong learner. My journey has always been driven by a deep curiosity about people, places and possibilities.
              </p>
              <p>
                Teaching gives me purpose, preparation keeps me grounded, and creativity keeps me alive. I believe in the power of learning, the beauty of small moments, and the courage to chase big dreams.
              </p>
              <p>
                Through this platform, I hope to inspire, share and grow — with all of you who believe in a better tomorrow.
              </p>
            </div>

            {/* Handwritten Signature/Quote */}
            <div className="mt-10 mb-4 hidden md:flex flex-col items-center self-center md:self-end md:mr-10 transform -rotate-12">
              <p className="font-cursive text-2xl md:text-3xl text-primary opacity-90">
                Grateful
              </p>
              <p className="font-cursive text-2xl md:text-3xl text-primary opacity-90 -mt-2">
                Always Learning
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary opacity-90 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="hidden md:flex justify-center items-center h-[500px] lg:h-auto rounded-xl bg-gray-200 dark:bg-[#1a1a1a] overflow-hidden relative border border-gray-300 dark:border-gray-800">
            <img src="/assets/about-main-image.png" alt="Ammu Krishnan" className="w-full h-full object-cover" />
          </div>

          {/* Column 3: Educational Qualification */}
          <div className="flex flex-col">
            <h2 className="font-serif text-3xl text-lightText dark:text-white font-medium mb-1">Educational Qualification</h2>
            {/* The swoosh underline */}
            <svg className="w-48 h-2 text-primary opacity-80 mb-8" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>

            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[3.35rem] top-4 bottom-8 w-[1px] bg-primary/30 z-0"></div>

              {/* Qualifications List */}
              {qualifications.map((item, index) => (
                <div key={index} className="flex items-start mb-8 relative z-10">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-primary bg-[#fdfbf7] dark:bg-[#1a1a1a] border border-primary/20 rounded-full mr-5 z-10">
                    {item.icon}
                  </div>
                  
                  {/* Dot on line */}
                  <div className="relative flex flex-col items-center mr-5 pt-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary z-10"></div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 pt-1.5">
                    <h3 className="font-semibold text-[15px] text-lightText dark:text-white">{item.title}</h3>
                    <p className="text-[13px] text-grayText dark:text-gray-400 mt-1 leading-[1.6]">
                      {item.desc1}
                      {item.desc2 && <><br/>{item.desc2}</>}
                      {item.desc3 && <><br/>{item.desc3}</>}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StorySection;
