import React from 'react';
import { motion } from 'framer-motion';

const WebProj = () => {
  const text = 'Video Project';

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center px-4 py-10 gap-10">
      
      {/* Animated Text */}
      <div className="flex flex-wrap justify-center gap-x-1 gap-y-3 text-center">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              color: '#facc15', // Tailwind yellow-400
              scale: 1.2,
              textShadow: '0px 0px 10px rgba(90, 90, 90, 0.8)',
            }}
            transition={{
              duration: 1.2,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-400 cursor-pointer"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>

      {/* YouTube Shorts Embed */}
      <div className="w-full max-w-md aspect-[9/16]">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/iZzk_lEZ-7k"
          title="YouTube Shorts Embed"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WebProj;
