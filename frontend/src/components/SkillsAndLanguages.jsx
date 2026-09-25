import React from 'react';

const skills = [
  { 
    name: 'Teaching & Mentoring', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>, 
    colorClass: 'text-red-500 bg-red-100 dark:bg-red-900/30' 
  },
  { 
    name: 'Public Speaking', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>, 
    colorClass: 'text-orange-500 bg-orange-100 dark:bg-orange-900/30' 
  },
  { 
    name: 'Content Creation', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>, 
    colorClass: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30' 
  },
  { 
    name: 'Communication', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.333A4.14 4.14 0 0 0 5 21.75a4.14 4.14 0 0 0 2.11-1.39A8.995 8.995 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>, 
    colorClass: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30' 
  },
  { 
    name: 'Time Management', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>, 
    colorClass: 'text-teal-600 bg-teal-100 dark:bg-teal-900/30' 
  },
  { 
    name: 'Planning & Organisation', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>, 
    colorClass: 'text-rose-500 bg-rose-100 dark:bg-rose-900/30' 
  },
  { 
    name: 'Creative Expression', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.879-6.84a1.5 1.5 0 0 0-1.4-2.136h-4.624c-.2 0-.4.043-.585.125m-9.673 1.956c.46-.226.96-.39 1.485-.483M9.53 16.122l-1.077 1.077a1.5 1.5 0 0 1-2.122 0l-1.077-1.077a1.5 1.5 0 0 1 0-2.122l1.077-1.077a1.5 1.5 0 0 1 2.122 0l1.077 1.077a1.5 1.5 0 0 1 0 2.122Z" /></svg>, 
    colorClass: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30' 
  },
  { 
    name: 'Adaptability', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" /></svg>, 
    colorClass: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-500' 
  },
  { 
    name: 'Continuous Learning', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>, 
    colorClass: 'text-cyan-600 bg-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-400' 
  },
  { 
    name: 'Leadership', 
    icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>, 
    colorClass: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30' 
  },
];

const languages = [
  {
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    proficiency: 'Native',
    icon: <span className="text-lg">മ</span>, 
    iconBg: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
  },
  {
    name: 'English',
    nativeName: 'English',
    proficiency: 'Fluent',
    icon: <span className="text-lg text-blue-700 dark:text-blue-400">A</span>,
    iconBg: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    name: 'Hindi',
    nativeName: 'हिंदी',
    proficiency: 'Conversational',
    icon: <span className="text-lg text-orange-700 dark:text-orange-400">अ</span>,
    iconBg: 'bg-orange-100 dark:bg-orange-900/30'
  },
  {
    name: 'Tamil',
    nativeName: 'தமிழ்',
    proficiency: 'Conversational',
    icon: <span className="text-lg">த</span>,
    iconBg: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
  }
];

const SkillsAndLanguages = () => {
  return (
    <section className="w-full bg-[#fdfbf7] dark:bg-darkBg py-4 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Skills (Takes 3 columns on large screens) */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-lightText dark:text-white font-medium mb-1">Skills</h2>
            <p className="text-[13px] text-grayText dark:text-gray-400 mb-5">
              <span className="text-primary font-medium">Tools</span> I use to create impact
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center p-2.5 rounded-2xl bg-white dark:bg-[#181818] shadow-sm transition-transform hover:scale-[1.02] border border-gray-100 dark:border-[#2a2a2a]">
                  <div className={`w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center mr-3 ${skill.colorClass}`}>
                    {skill.icon}
                  </div>
                  <span className="text-[12px] font-medium text-lightText dark:text-gray-200 leading-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-lightText dark:text-white font-medium mb-4 md:mb-1">Languages Known</h2>
            <svg className="hidden md:block w-40 h-2 text-primary opacity-80 mb-5" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>

            {/* Mobile Layout (2x2 Grid) */}
            <div className="grid md:hidden grid-cols-2 gap-y-6 w-full">
              {languages.map((lang, index) => (
                <div key={`mobile-lang-${index}`} className={`flex items-center space-x-2 sm:space-x-3 ${index % 2 === 0 ? 'border-r border-gray-300 dark:border-gray-800 pr-2' : 'pl-2 sm:pl-4'}`}>
                  <div className={`w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center ${lang.iconBg}`}>
                    {lang.icon}
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[13px] sm:text-[14px] font-semibold text-lightText dark:text-white leading-tight truncate">{lang.name}</span>
                    <span className="text-[11px] sm:text-[12px] text-grayText dark:text-gray-400 leading-tight mt-0.5 truncate">{lang.proficiency}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Layout (Vertical list) */}
            <div className="hidden md:flex flex-col space-y-3">
              {languages.map((lang, index) => (
                <div key={`desktop-lang-${index}`} className="flex items-center justify-between p-3 rounded-2xl bg-[#f8f3eb] dark:bg-[#1a1a1a] shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center mr-3 ${lang.iconBg}`}>
                      {lang.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold text-lightText dark:text-white">{lang.name}</span>
                      <span className="text-[11px] text-grayText dark:text-gray-400 mt-0">{lang.nativeName}</span>
                    </div>
                  </div>
                  <div className="text-[12px] text-grayText dark:text-gray-400 font-medium">
                    {lang.proficiency}
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

export default SkillsAndLanguages;
