import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Youtube, Linkedin, Github, MessageSquare } from 'lucide-react';

const contactLinks = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/919835958271',
    icon: <MessageSquare size={25} />,
    color: 'bg-gradient-to-br from-green-900 via-green-600 to-green-900',
    hoverGlow: 'hover:shadow-[0_0_15px_rgba(74,222,128,0.8)]'
  },
  {
    name: 'Gmail',
    url: 'mailto:chemistryhero1@gmail.com',
    icon: <Mail size={25} />,
    color: 'bg-gradient-to-br from-red-900 via-red-600 to-red-900',
    hoverGlow: 'hover:shadow-[0_0_15px_rgba(239,68,68,0.8)]'
  },
  {
    name: 'Instagram',
    url: "https://www.instagram.com/creative_abhishek__?igsh=MWpvbzdib3dvYng2YQ==",
    icon: <Instagram size={25} />,
    color: 'bg-gradient-to-br from-pink-900 via-pink-600 to-pink-900',
    hoverGlow: 'hover:shadow-[0_0_15px_rgba(236,72,153,0.8)]'
  },
  {
    name: 'YouTube',
    url: "https://youtube.com/@creativeabhishekoffical?si=B77M9PyTOXwXsQeS",
    icon: <Youtube size={25} />,
    color: 'bg-gradient-to-br from-red-900 via-red-600 to-red-900',
    hoverGlow: 'hover:shadow-[0_0_15px_rgba(239,68,68,0.8)]'
  },
  {
    name: 'LinkedIn',
    url: "https://www.linkedin.com/in/abhishek-kumar-86a157287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <Linkedin size={25} />,
    color: 'bg-gradient-to-br from-blue-900 via-blue-600 to-blue-900',
    hoverGlow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]'
  },
  {
    name: 'GitHub',
    url: "http://github.com/snyper9955",
    icon: <Github size={25} />,
    color: 'bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900',
    hoverGlow: 'hover:shadow-[0_0_15px_rgba(75,85,99,0.8)]'
  },
];

const Contact = () => {
  return (
    <div className="bg-gradient-to-t from-gray-950 to-gray-950 text-white
     flex flex-col items-center justify-center py-12 px-4 sm:px-8   overflow-hidden">
      {/* Background elements */}
      <section id='connect'>
        <div className="absolute inset-0 
      bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:20px_20px] 
      opacity-20"></div>
      
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() * 100) - 50],
              x: [0, (Math.random() * 60) - 30],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center  z-10"
      >
        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 animate-text-shine">Connect</span>
      </motion.h1>

      {/* Mobile - Horizontal Scroll */}
      <div className="w-full md:hidden overflow-x-auto py-4 px-2 ">
        <motion.div 
          className="flex gap-3 w-max mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {contactLinks.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center p-3 rounded-lg min-w-[90px] ${contact.color} ${contact.hoverGlow} transition-all duration-200 shadow-lg backdrop-blur-sm bg-opacity-50 border border-gray-800`}
            >
              <div className="text-white mb-1">
                {contact.icon}
              </div>
              <span className="text-xs font-medium text-white whitespace-nowrap">{contact.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Desktop - Grid Layout */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-6xl relative top-8 z-10">
        {contactLinks.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(255,255,255,0.2)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl ${contact.color} ${contact.hoverGlow} transition-all duration-300 shadow-lg backdrop-blur-sm bg-opacity-50 border border-gray-800`}
          >
            <div className="text-white">
              {contact.icon}
            </div>
            <span className="text-sm font-medium text-white text-center">{contact.name}</span>
          </motion.a>
        ))}
      </div>
      </section>
    </div>
  );
};

export default Contact;