import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Frontend Development",
    description: "Build interactive websites using React, TailwindCSS, and API integration.",
   bgColor: "from-yellow-400 to-red-500",
    glowColor: "rgba(211, 218, 27, 0.4)",
    path: "/web-projects"
  },
  {
    title: "Video Production",
    description: "Cinematic video edits using Adobe Premiere Pro & After Effects.",
    bgColor: "from-pink-400 to-red-500",
     glowColor: "rgba(189, 43, 43, 0.4)",
    path: "/video-projects"
  },
  {
    title: "Graphic Design",
    description: "Design logos, posters, thumbnails with Adobe Photoshop & Illustrator.",
   bgColor: "from-blue-400 to-green-500",
   glowColor: "rgba(83, 255, 117, 0.4)",
    path: "/design-projects"
  },
];

const Project = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-950 v0 via gray-900 to-gray-950 text-white   
   overflow-hidden justify-center p-12">
      <div className="  relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 text-center leading-tight relative bottom-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore My <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Projects</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative top-5 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`border-1 border-gray-700 relative rounded-3xl font-semibold shadow-xl p-6 text-white bg-gradient-to-br ${project.bgColor} transition duration-300 overflow-hidden group`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 25px -5px ${project.glowColor}, 0 10px 10px -5px ${project.glowColor}`
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-drop-shadow-[0_0_20px_rgba(255,69,0,0.8)] text-2xl font-extrabold mb-3 relative z-10 drop">{project.title}</h3>
              <p className="text-gray-200 text-sm mb-6 relative z-10">{project.description}</p>

              <motion.div
              
              >
                <Link
                  to={project.path}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black
                    bg-white rounded-lg  relative z-10 overflow-hidden hover:bg-yellow-300"
                >
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 "
                    initial={{ x: -100 }}
                    whileHover={{ x: 100 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 ">View More</span>
                  <motion.span 
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
