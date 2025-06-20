import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate hook
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Frontend Development",
    description: "Build interactive websites using React, TailwindCSS, and API integration.",
    bgColor: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
    path: "/portfolio/web-projects" // or "#" if no page yet
  },
  {
    title: "Video Production",
    description: "Cinematic video edits using Adobe Premiere Pro & After Effects.",
    bgColor: "from-yellow-500 to-orange-500",
    glowColor: "rgba(234, 179, 8, 0.4)",
    path: "/portfolio/video-projects"
  },
  {
    title: "Graphic Design",
    description: "Design logos, posters, thumbnails with Adobe Photoshop.",
    bgColor: "from-green-400 to-blue-500",
    glowColor: "rgba(74, 222, 128, 0.4)",
    path: "/portfolio/design-projects"
  },
];

const Project = () => {
  const navigate = useNavigate(); // ✅ React Router hook

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-950 to-black text-white py-10 px-6 sm:px-12 lg:px-24 relative top-20 overflow-hidden">
      {/* ...animated background (unchanged)... */}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 text-center leading-tight relative bottom-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore My <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Projects</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl shadow-xl p-6 text-white bg-gradient-to-br ${project.bgColor} transition duration-300 overflow-hidden group`}
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
              {/* Floating and glow effects stay the same */}

              <h3 className="text-2xl font-semibold mb-3 relative z-10">{project.title}</h3>
              <p className="text-white/90 text-sm mb-6 relative z-10">{project.description}</p>

              <motion.button 
                onClick={() => navigate(project.path)} // ✅ navigate on click
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black
                 bg-white rounded-lg hover:brightness-110 relative z-10 overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255,255,255,0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100"
                  initial={{ x: -100 }}
                  whileHover={{ x: 100 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">View More</span>
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
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
