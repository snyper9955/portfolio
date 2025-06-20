import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  {
    name: 'Frontend Developer',
    percentage: 95,
    color: '#00FF00',
  },
  {
    name: 'Graphic Designer',
    percentage: 75,
    color: '#FF69B4',
  },
  {
    name: 'Video Editor',
    percentage: 90,
    color: '#00FF7F',
  },
  {
    name: 'Content Creator',
    percentage: 80,
    color: '#FF4500',
  },
];

const Skill = () => {
  return (
    <div className="min-h-[10vh] bg-black text-white flex flex-col px-4 py-10 w-full relative top-20">
      <section id="services">
        {/* Main Title - Responsive */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl lg:text-8xl font-extrabold text-white text-center 
                     drop-shadow-[0_0_20px_rgba(255,69,0,0.8)]"
        >
          <span className="text-yellow-400
                font-extrabold lg:font-extrabold  interactive-text">
            FRONTEND DEVELOPER
          </span>
        </motion.h1>
        
        {/* Graphic Lines - Desktop Only */}
        <div className="hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            className="w-32 h-1 bg-red-500 rotate-90 origin-left relative bottom-16 left-195"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            className="w-32 h-1 bg-red-500 rotate-270 origin-left relative bottom-7 left-170"
          ></motion.div>
        </div>

        {/* Technology Titles - Responsive Layout */}
        <div className="flex flex-col lg:block mt-4 lg:mt-0">
          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col items-center space-y-4 mt-6">
            <motion.h1
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
              className="text-3xl  text-center 
                         drop-shadow-[0_0_15px_rgba(186,85,211,0.8)]"
            >
              <span id='react' className="text-sky-400   font-extrabold">
                REACT JS
              </span>
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
              className="text-3xl md:text-4xl text-center text-white
                         drop-shadow-[0_0_15px_rgba(186,85,211,0.8)]"
            >
              <span className="text-pink-400 font-extrabold ">
                TAILWIND
              </span>
            </motion.h1>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <motion.h1
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center text-white
                         relative bottom-57 scale-50
                         drop-shadow-[0_0_20px_rgba(0,200,250,1)]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-teal-400">
                REACT JS
              </span>
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center text-white
                         relative bottom-[76px] left-[124px] scale-50
                         drop-shadow-[0_0_15px_rgba(186,85,211,0.8)]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400
               via-pink-500 to-purple-500 ">
                Tailwind
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Skills Overview Title */}
        <motion.h1 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          id="skills" 
          className="text-3xl md:text-5xl mb-6 text-center
          text-yellow-400 mt-8 lg:mt-0 relative top-2 font-extrabold
          drop-shadow-[0_0_20px_rgba(255,69,0,0.8)]"
        >
          MY SKILLS OVERVIEW
        </motion.h1>
        
        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full mx-auto lg:relative lg:top-10 relative top-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="flex flex-col items-center w-full lg:relative lg:top-10"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
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
              <p className="mt-2 text-sm sm:text-base md:text-lg font-extrabold text-center font-mobile-skills interactive-text" 
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