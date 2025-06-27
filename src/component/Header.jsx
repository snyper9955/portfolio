import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'Home', target: 'home' },
  { name: 'About', target: 'about' },
  { name: 'Services', target: 'services' },
  { name: 'Connect', target: 'connect' }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavClick = (target) => {
    setMobileMenuOpen(false);
    // This ensures the menu closes before scrolling happens
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-gradient-to-t from-gray-950 via-black to-gray-900 text-white w-full overflow-hidden relative bottom-0
   ">
      {/* === Header Bar === */}
      <div className="flex justify-between items-center flex-wrap gap-4 px-4 sm:px-8 py-4 mx-auto">
        {/* Brand */}
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-bold whitespace-nowrap md:text-3xl relative left-8 text-gray-200"
        >
          Creative Abhishek
        </motion.h1>

        {/* Desktop Nav Items - Hidden on small screens */}
        <ul className="hidden md:flex gap-6 font-semibold text-lg">
          {navItems.map((item, index) => (
            <motion.li
              key={item.target}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="cursor-pointer hover:text-yellow-400 transition-colors text-gray-300"
            >
              <Link
                to={item.target}
                smooth={true}
                duration={500}
                offset={-100}
                className="block py-2"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Login Button */}
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: navItems.length * 0.2 }}
          className="hidden md:block bg-blue-400 hover:bg-blue-500 transition-colors px-4 py-2 rounded-md
           font-bold whitespace-nowrap text-sm sm:text-base text-gray-300"
        >
          More
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden bg-gray-800 p-2 rounded-md"
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900 overflow-hidden"
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.target}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-full text-center"
              >
                <button
                  onClick={() => handleMobileNavClick(item.target)}
                  className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-colors w-full"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              className="bg-blue-400 hover:bg-blue-500 transition-colors px-2 py-2 rounded-md font-semibold whitespace-nowrap text-sm relative"
            >
              more
            </motion.button>
          </ul>
        </motion.div>
      )}

      {/* === Hero Section === */}
      <div 
        id="home"
        className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 gap-8 mx-auto"
      >
        {/* Glowing Logo Image - Centered on mobile */}
        <motion.div 
          className="flex-shrink-0 mx-auto md:mx-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={logo}
            alt="logo"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover md:left-0 mx-auto"
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 10px rgba(255, 106, 0, 0.5)',
                '0 0 25px rgba(255, 69, 0, 0.7)',
                '0 0 15px rgba(255, 0, 0, 0.6)',
                '0 0 10px rgba(255, 106, 0, 0.5)'
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Description - Properly aligned for all screens */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-auto flex-1 text-center md:text-left px-0"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent block md:inline">
              Creative Abhishek
            </span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent block md:inline">
              Passionate About Creating Beautiful Experiences
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 font-semibold leading-relaxed md:leading-normal mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
           <div className='font-semibold text-sm sm:text-base md:text-lg ' ><span className='text-green-500' >Frontend Developer </span>| 
           <span className='text-yellow-500'> Graphics Designer </span>| 
           <span className='text-blue-400'>Video Editor </span>| <span className='text-cyan-500' >Content Creator</span><br /></div > dedicated 
            to blending creativity with functionality. Every pixel and every second matters. Let's build something extraordinary together. 
          </motion.p>
        </motion.div>
        <motion.a 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 , delay: 1}}
          href="https://wa.me/919835958271"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 relative top-6 font-bold"
        >
          connect me
        </motion.a>
      </div>
    </div>
  );
};

export default Header;