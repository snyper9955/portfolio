import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import sv from '../assets/sv.mp4';
import t1 from '../assets/t1.png';

const Project = () => {
  const videoRefs = useRef([]);

  const handleVideoHover = (index, isHovering) => {
    if (videoRefs.current[index]) {
      isHovering ? videoRefs.current[index].play() : videoRefs.current[index].pause();
    }
  };

  const projects = [
    {
      title: "Frontend Development",
      mediaType: "video",
      mediaSrc: sv,
      description: "Build interactive websites using React, TailwindCSS, and API integration."
    },
    {
      title: "Video Production",
      mediaType: "video",
      mediaSrc: sv,
      description: "Cinematic video edits using Adobe Premiere Pro & After Effects."
    },
    {
      title: "Graphic Design",
      mediaType: "image",
      mediaSrc: t1,
      description: "Design logos, posters, thumbnails with Adobe Photoshop."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-900 to-black text-white py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
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
              className="relative rounded-3xl bg-white/5 backdrop-blur-md shadow-xl border border-white/10 transition duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                borderColor: "rgba(234, 179, 8, 0.4)",
                boxShadow: "0 0 30px rgba(234, 179, 8, 0.3)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  boxShadow: "0 0 60px 20px rgba(234, 179, 8, 0.2)"
                }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Media */}
              <div
                className="aspect-video overflow-hidden relative"
                onMouseEnter={() => project.mediaType === 'video' && handleVideoHover(index, true)}
                onMouseLeave={() => project.mediaType === 'video' && handleVideoHover(index, false)}
              >
                {project.mediaType === 'video' ? (
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={project.mediaSrc}
                    muted
                    loop
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={project.mediaSrc}
                    alt="Project preview"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-3">
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-300 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {project.description}
                </motion.p>

                <motion.button
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black
                   bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg hover:brightness-110 hover:scale-95 
                   transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;