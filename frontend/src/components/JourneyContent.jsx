import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, GraduationCap, Target, Users, TrendingUp, 
  Quote, Trophy, Plane, Home, Heart, Trees, Building, Sprout 
} from 'lucide-react';

const timelineData = [
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    cardIcon: <Sprout className="w-6 h-6 text-primary" />,
    period: "School Years",
    years: "2014 - 2016",
    title: "Dreams Take Root",
    description: "Developed a deep interest in current affairs, society and public service.\nThe idea of becoming a civil servant started taking shape during my school days."
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    cardIcon: <TrendingUp className="w-6 h-6 text-primary" />, // Using TrendingUp as a placeholder for the compass/clock
    period: "After +2",
    years: "2016",
    title: "A Clearer Direction",
    description: "Chose to pursue undergraduate studies with the dream of preparing for civil services.\nStarted exploring the exam, its pattern and the vast world of knowledge it demands."
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    cardIcon: <Users className="w-6 h-6 text-primary" />,
    period: "B.Sc. Mathematics",
    years: "2016 - 2019",
    title: "Building a Strong Foundation",
    description: "Completed B.Sc. Mathematics, a journey that strengthened my logical thinking,\nproblem-solving skills and discipline — all of which continue to help in my preparation."
  },
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    cardIcon: <TrendingUp className="w-6 h-6 text-primary" />, // Bar chart
    period: "Full-time Preparation",
    years: "2019 - 2021",
    title: "Dedicating Myself to the Dream",
    description: "After graduation, I devoted my time fully to civil services preparation. These years were\nabout understanding the exam deeply, building a strong foundation, and developing a\nconsistent study routine."
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    cardIcon: <Trophy className="w-6 h-6 text-primary" />, // Using Trophy for the teaching board with star
    period: "Teaching Began",
    years: "2021 - Present",
    title: "Turning Learning into Teaching",
    description: "Along my preparation journey, I got the opportunity to teach and be a part of reputed\ninstitutions like PKS Academy, LAM Institute for PSC and Careers Institute (Palakkad)\nas a part-time faculty. Teaching has deepened my understanding, improved my communication\nskills and keeps me connected with like-minded aspirants."
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    cardIcon: <BookOpen className="w-6 h-6 text-primary" />, // Using BookOpen for the teaching board with person
    period: "Today",
    years: "2021 - 2026",
    title: "Balancing Roles, Moving Forward",
    description: "Continuing my UPSC preparation with stronger focus and experience, while balancing\nteaching responsibilities. In parallel, I am also preparing for Kerala PSC (University Assistant)\nand SSC (Income Tax Officer) to explore opportunities and gain diverse experience."
  }
];

const whereIAmNowData = [
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    text: "Focused on cracking UPSC Civil Services\nin the next 3 years."
  },
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    text: "Continuing part-time teaching at institutions like\nPKS Academy, LAM Institute for PSC and Careers Institute\n(Palakkad)."
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    text: "Parallel preparation for Kerala PSC (University Assistant)\nand SSC (Income Tax Officer) to explore opportunities\nand gain diverse experience."
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    text: "Constantly learning, improving and staying consistent\nwith a disciplined routine."
  }
];

const theRoadAheadData = [
  { icon: <Trophy className="w-4 h-4 text-primary" />, text: "Clear and dedicated focus on cracking UPSC in the next 3 years." },
  { icon: <Plane className="w-4 h-4 text-primary" />, text: "Travel the entire world and experience diverse cultures." },
  { icon: <Users className="w-4 h-4 text-primary" />, text: "Help children from economically poor backgrounds to learn and\nachieve their highest potential, especially those who are passionate\nabout studies but cannot afford it." },
  { icon: <Home className="w-4 h-4 text-primary" />, text: "Support my family and parents, and build a new home for them." },
  { icon: <Heart className="w-4 h-4 text-primary" />, text: "Love and care for my sisters' children and be a part of their journey." },
  { icon: <Trees className="w-4 h-4 text-primary" />, text: "Own some land and a home in a peaceful, remote village like in Palakkad." },
  { icon: <Building className="w-4 h-4 text-primary" />, text: "Have a flat in a city like Kochi, balancing a peaceful home and a city life." },
  { icon: <Sprout className="w-4 h-4 text-primary" />, text: "Continue to learn, contribute to society and live a meaningful life." },
];

const JourneyContent = ({ darkMode }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 bg-lightBg dark:bg-darkBg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* LEFT COLUMN: Timeline */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0d1b2a] dark:text-white mb-2 relative inline-block">
              My Journey So Far
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -bottom-2 left-0 h-[2px] bg-primary rounded-full origin-left"
                style={{ clipPath: 'ellipse(100% 100% at 0% 50%)' }} // To give it a slight swoosh feel if needed
              />
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm font-medium">
              A timeline of the last 10 years — shaped by learning, choices, opportunities and a dream to serve.
            </p>
          </div>

          <div className="relative space-y-8 md:space-y-4 lg:space-y-6 mt-8">
            {/* Mobile Continuous Vertical Line */}
            <div className="absolute left-[39px] md:hidden top-0 bottom-4 w-[2px] bg-primary dark:bg-[#f48c42]"></div>

            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-row w-full group relative"
              >
                {/* ================= DESKTOP LAYOUT ================= */}
                {/* Desktop Left Side (Icon + Text) */}
                <div className="hidden md:flex w-[160px] lg:w-[190px] flex-shrink-0 items-start pr-4 lg:pr-6">
                  <div className="w-12 h-12 rounded-full bg-[#fceee6] dark:bg-[#2c1d15] flex items-center justify-center shadow-sm flex-shrink-0 mr-4">
                    {item.icon}
                  </div>
                  <div className="mt-1">
                    <h3 className="text-sm font-bold text-[#0d1b2a] dark:text-white leading-tight mb-1">{item.period}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{item.years}</p>
                  </div>
                </div>

                {/* Desktop Vertical Line & Dot */}
                <div className="hidden md:flex flex-col items-center mr-6 lg:mr-8 relative">
                  {/* Continuous Line */}
                  <div className="absolute top-6 bottom-[-24px] lg:bottom-[-32px] w-[1px] bg-[#f5eae3] dark:bg-gray-800" style={{ display: index === timelineData.length - 1 ? 'none' : 'block' }}></div>
                  {/* Dot */}
                  <div className="w-2.5 h-2.5 bg-primary rounded-full mt-[22px] relative z-10"></div>
                </div>

                {/* Desktop Content Card */}
                <div className="hidden md:flex flex-1 bg-[#fef8f4] dark:bg-[#1a1c20] p-5 md:p-6 rounded-xl shadow-sm border border-[#f5eae3] dark:border-gray-800 items-start">
                  <div className="mr-4 mt-1 flex-shrink-0">
                     {item.cardIcon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0d1b2a] dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>


                {/* ================= MOBILE LAYOUT ================= */}
                {/* Mobile Icon Circle on Timeline */}
                <div className="flex md:hidden w-[80px] flex-shrink-0 justify-center relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#fef8f4] dark:bg-[#1a1c20] flex items-center justify-center shadow-sm border-2 border-primary/20">
                     {item.icon}
                  </div>
                  {/* Small Dot in between (Mobile) */}
                  {index < timelineData.length - 1 && (
                     <div className="absolute left-[36px] -bottom-[20px] w-2 h-2 rounded-full bg-primary dark:bg-[#f48c42]"></div>
                  )}
                </div>

                {/* Mobile Content Card */}
                <div className="flex md:hidden flex-1 bg-[#fef8f4] dark:bg-[#1a1c20] p-4 rounded-xl shadow-sm border border-[#f5eae3] dark:border-gray-800 flex-col mb-2 relative">
                  <h3 className="text-[15px] font-bold text-[#0d1b2a] dark:text-white leading-tight mb-1">{item.period}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">{item.years}</p>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5 flex flex-col space-y-10 mt-10 lg:mt-0">
          
          {/* Quote Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full relative overflow-hidden shadow-sm"
          >
            <img 
              src={`/quotes/${darkMode ? 'dark' : 'light'}-journey.png`}
              alt="Journey Quote"
              className="w-full h-auto object-contain rounded-xl"
            />
          </motion.div>

          {/* Where I Am Now */}
          <div className="bg-[#fef8f4] dark:bg-[#1a1c20] p-6 rounded-xl border border-[#f5eae3] dark:border-gray-800">
            <h2 className="text-2xl font-serif text-[#0d1b2a] dark:text-white mb-2 relative inline-block">
              Where I Am Now
              <div className="absolute -bottom-2 left-0 w-[60%] h-[2px] bg-primary rounded-full"></div>
            </h2>
            
            <div className="mt-8 space-y-6">
              {whereIAmNowData.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#fceee6] dark:bg-[#2c1d15] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Road Ahead */}
          <div className="bg-[#fef8f4] dark:bg-[#1a1c20] p-6 rounded-xl border border-[#f5eae3] dark:border-gray-800">
            <h2 className="text-2xl font-serif text-[#0d1b2a] dark:text-white mb-2 relative inline-block">
              The Road Ahead
              <div className="absolute -bottom-2 left-0 w-[40%] h-[2px] bg-primary rounded-full"></div>
            </h2>
            
            <div className="mt-8 space-y-4">
              {theRoadAheadData.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JourneyContent;
