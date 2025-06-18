import React from 'react';
import video from '../assets/video.webm';
import { motion } from 'framer-motion';

const Brand = () => {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="text-white relative top-20 text-6xl font-bold text-center">
        
        {/* Title */}
        <div className="flex flex-col items-center">
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>Creative Abhishek</motion.div>

          {/* Animated HR directly under title */}
          <motion.hr
            initial={{ x: -200 }}
            animate={{ x: 0  }}
            transition={{ duration: 1 }}
            className="border-2 border-blue-400 mt-2 w-1/2"
          />
        </div>

        {/* Subheading */}
        <div className="relative top-2 flex justify-center">
          <h1 className="text-[20px] text-yellow-400 ">
            Frontend Developer | Graphic Designer | Video Editor | Content Creator
          </h1>
        </div>

        {/* Tagline */}
        <div>
          <h1 className="relative top-2 flex justify-center">
            Keep Learning, Keep Growing
          </h1>
        </div>

        {/* Video Section with Original Size */}
        <div className="relative top-2 flex justify-center ">
          <video
            className="scale-60 transition-transform duration-300 hover:scale-75 rounded-lg"
            src={video}
            muted
            loop
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
