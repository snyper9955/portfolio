import React from 'react';
import { motion } from 'framer-motion';

const WebProj = () => {
  const text = 'Video Project';

  return (
    <div className="bg-black text-white flex justify-center   px-4">
      <div className="flex flex-wrap justify-center gap-x-1 gap-y-3 text-center">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              color: '#facc15', // yellow-400
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
 <video
  className="w-full h-auto rounded-xl shadow-lg scale-50"
  autoPlay
  muted
  loop
  playsInline
  controls
>
  <source src="/V1.mp4" type="video/mp4" />
  Your browser does not support the video tag.hh
</video>


    </div>
  );
};

export default WebProj;
