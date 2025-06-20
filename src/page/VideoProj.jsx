import React from 'react';
import { motion } from 'framer-motion';
import video from '../assets/v1.mp4';

const VideoProj = () => {
  return (
   <div>
     <div className="min-h-screen flex justify-center bg-black px-4 relative bottom-8 overflow-hidden ">
      {/* Background grid for depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-800" />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-sky-500"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            transition: {
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: -100, rotateX: 45 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        whileHover="hovered"
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold
         text-center text-white perspective-1000"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.span
          variants={{
            hovered: {
              scale: 1.1,
              filter: 'drop-shadow(0 0 12px rgba(145, 172, 185, 0.5)) drop-shadow(0 0 24px rgba(174, 179, 179, 0.8))',
              transition: { duration: 0.4 },
            },
          }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-sky-500 block
          relative top-15"
          style={{ transformStyle: 'preserve-3d' }}
        >
          VIDEO PROJECT
          {/* 3D depth effect */}
          <motion.span 
            className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-700 to-sky-700 pointer-events-none"
            style={{
              transform: 'translateZ(-20px)',
              filter: 'blur(2px)',
            }}
            variants={{
              hovered: {
                opacity: 0.8,
                transition: { duration: 0.3 },
              },
            }}
          >
            VIDEO PROJECT
          </motion.span>
        </motion.span>

        {/* Reflection effect */}
        <motion.div
          className="absolute left-0 top-full mt-4 w-full h-20 bg-gradient-to-t from-black to-transparent opacity-30 pointer-events-none"
          style={{
            transform: 'rotateX(80deg) scaleY(0.5)',
            transformOrigin: 'top center',
            filter: 'blur(4px)',
          }}
          variants={{
            hovered: {
              opacity: 0.5,
              transition: { duration: 0.3 },
            },
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-sky-400 to-transparent opacity-30" />
        </motion.div>
      </motion.div>

      {/* Ambient light circles */}
      <motion.div 
        className="absolute rounded-full bg-sky-500/20 blur-3xl pointer-events-none"
        initial={{ width: 300, height: 300, x: '-30%', y: '-20%' }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute rounded-full bg-sky-500/20 blur-3xl pointer-events-none"
        initial={{ width: 400, height: 400, x: '60%', y: '50%' }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
     
    </div>
     <video className='scale-40 relative bottom-70 border-2 border-sky-400' src={video} autoPlay loop muted></video>
   </div>
  );
};

export default VideoProj;