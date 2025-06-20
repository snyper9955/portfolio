import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 to- text-white py-16 px-4 md:px-8 relative top-16 ">
      <section id="about" className=" mx-auto">
        {/* Hero Section */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight relative bottom-12"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting <span className="text-yellow-400">Digital</span> Experiences
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300  mx-auto relative bottom-8"
            initial={{ opacity: 1 ,X: -400 }}
            animate={{ opacity: 1, X: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            I'm <span className="text-white font-bold ">Abhishek Kumar</span>, a Computer Science student at DCE Darbhanga, passionate about building beautiful digital experiences.
          </motion.p>
        </motion.section>

        {/* About Cards */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center relative bottom-6">
            My <span className="text-yellow-400">Journey</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 px-2 sm:px-8">
            {/* Education Box */}
            <motion.div
              className="bg-gradient-to-tr from-blue-700 to-indigo-500 p-6 sm:p-8 rounded-2xl border border-gray-800"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 20px rgba(99, 179, 237, 0.4)',
                borderColor: 'rgba(99, 179, 237, 0.4)',
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Education</h3>
              <p className="text-gray-300 leading-relaxed font-medium text-sm sm:text-base">
                Currently pursuing my B.Tech in Computer Science at DCE, Darbhanga.
                Passionate about learning new technologies and applying them to solve real-world problems.
              </p>
            </motion.div>

            {/* Creative Side Box */}
            <motion.div
              className="bg-gradient-to-tr from-rose-600 to-pink-500 p-6 sm:p-8 rounded-2xl border border-gray-800"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)',
                borderColor: 'rgba(255, 105, 180, 0.4)',
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Creative Side</h3>
              <p className="text-gray-300 leading-relaxed font-medium text-sm sm:text-base">
                When I'm not coding, I'm creating visual content. Skilled in video editing (Premiere Pro, After Effects)
                and graphic design (Photoshop, Illustrator). I believe creativity enhances technical skills.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center relative top-6">
            Tech <span className="text-yellow-400">Stack</span>
          </h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4 px-2 sm:px-8 relative top-12"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
              'Tailwind CSS', 'Framer Motion', 'Git',
              'Adobe Premiere', 'After Effects', 'Photoshop', 'Illustrator',
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-gray-900 rounded-full border border-gray-800 text-sm sm:text-base font-medium"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 12px rgba(255, 215, 0, 0.4)',
                  borderColor: 'rgba(255, 215, 0, 0.4)',
                }}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </section>
    </div>
  );
};

export default About;
