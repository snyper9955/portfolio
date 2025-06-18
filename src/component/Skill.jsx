import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  {
    name: 'Frontend Developer',
    percentage: 90,
    color: '#00FFFF', // Cyan
  },
  {
    name: 'Graphic Designer',
    percentage: 75,
    color: '#FF69B4', // Pink
  },
  {
    name: 'Video Editor',
    percentage: 95,
    color: '#00FF00', // bright green
  },
  {
    name: 'Content Creator',
    percentage: 80,
    color: '#FF4500', // OrangeRed
  },
];

const Skill = () => {
  return (
    <div className="min-h-[10vh] bg-black text-white flex flex-col  px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-400">
        My Skills Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative top-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28">
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: 'white',
                  pathColor: skill.color,
                  trailColor: '#333',
                })}
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-center" style={{ color: skill.color }}>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
