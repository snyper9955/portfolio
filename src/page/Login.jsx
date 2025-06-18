import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const navItems = ['Home', 'About', 'Services', 'Contact'];

const Header = () => {
  return (
    <div className="bg-black text-white">
      
      {/* === Header Bar === */}
      <div className="flex justify-between items-center flex-wrap gap-4 px-6 py-4 w-full">
        {/* Brand */}
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold"
        >
          Creative Abhishek
        </motion.h1>

        {/* Nav Items */}
        <ul className="flex gap-4 md:gap-6 font-semibold text-lg">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="cursor-pointer hover:text-yellow-400"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Login Button */}
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: navItems.length * 0.2 }}
          className="bg-blue-400 hover:bg-blue-500 transition-colors px-4 py-2 rounded-md font-semibold"
        >
          Login
        </motion.button>
      </div>

      {/* === Hero Section === */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10 gap-10">
        
        {/* Glowing Logo Image */}
        <motion.img
          src={logo}
          alt="logo"
          className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 20px #ff6a00',
              '0 0 35px #ff4500',
              '0 0 25px #ff0000',
              '0 0 20px #ff6a00'
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />

        {/* Description */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Passionate About Creating Beautiful Experiences
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            I'm a Frontend Developer, Graphic Designer, Video Editor, and Content Creator
            dedicated to blending creativity with functionality. Every pixel and every second matters.
            Let's build something extraordinary together.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
