import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  {
    name: 'Frontend Developer',
    percentage: 95,
    color: '#00FF00', //  greem
  },
  {
    name: 'Graphics Designer',
    percentage: 90,
     color: '#f0f804', // dark pink
  },
  {
    name: 'Video Editor',
    percentage: 95,
    color: '#87CEEB', //  bright sky
  },
  {
    name: 'Content Creator',
    percentage: 75,
    color: '#91aacb', //
  },
  
];

const Skill = () => {
   const text = 'FRONTEND DEVELOPER';
  return (
    <div className=" bg-gradient-to-b from-gray-950 via-gray-950 to-gray-950 text-white flex flex-col px-4 
    py-10 w-full">
      <section id="services">
        {/* Mobile-only Title */}
        <div className="lg:hidden relative top-20">
          <motion.h1 id='f'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-extrabold text-center mb-6 relative bottom-15 sha"
          >
            <span className="text-6xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 
            text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500
            text-center relative bottom-8 z-10 drop-shadow-[0_0_20px_rgba(255,69,0,0.8)]">
              Frontend
            </span> <br />
            <span  className="text-5xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 
            text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-center relative bottom-8 z-10
            drop-shadow-[0_0_20px_rgba(255,69,0,0.8)]">
              Developer
            </span>
          </motion.h1>
        </div>

        {/* Desktop-only Title */}
        <div className="hidden lg:block">
      <motion.h1
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="text-8xl font-extrabold text-white text-center 
                 drop-shadow-[0_0_20px_rgba(255,69,0,0.8)]"
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600
       font-extrabold">
        {text}
      </span>
    </motion.h1>
        </div>
        
        {/* Rest of your component remains the same */}
      
        {/* Technology Titles - Responsive Layout */}
        <div className="flex flex-col lg:block mt-4 lg:mt-0">
          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col items-center space-y-4 mt-6">
       
            
         
          </div>

          {/* Desktop Layout */}
         
        </div>

        {/* Skills Overview Title */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.1  }}
          id="skills" 
          className="text-3xl md:text-5xl mb-6 text-center
          text-gray-200 mt-8 lg:mt-0 relative top-8 font-extrabold
         drop-shadow-[0_0_20px_rgba(125, 125, 125, 0.4)"
        >
          My Skills Overview
        </motion.div>
        
        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full mx-auto 
        lg:relative lg:top-10 relative top-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="flex flex-col items-center w-full "
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative  ">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    textColor: 'white',
                    pathColor: skill.color,
                    trailColor: '#333',
                    textSize: '16px',
                  })}
                />
              </div>
              <p className="mt-2  sm:text-base md:text-lg font-semibold text-center relative " 
                 style={{ color: skill.color }}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skill;