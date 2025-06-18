import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gradient-to-t from-black to-gray-900 text-white">
      <section id="about">
        <div className="mx-auto px-9">
        {/* Hero Section */}
        <motion.section
          className="mb-24 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative bottom-10"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting <span className="text-yellow-400">Digital</span> Experiences
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mx-auto relative bottom-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I'm <span className="text-white font-semibold">Abhishek Kumar</span>, a Computer Science student at DCE Darbhanga, passionate about building beautiful digital experiences.
          </motion.p>
        </motion.section>

        {/* About Cards */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center relative bottom-8">
            My <span className="text-yellow-400">Journey</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 px-12 mx-auto">
            {/* Education Box */}
            <motion.div
              className="education-box bg-gradient-to-tr from-blue-700 to-indigo-500 p-8 rounded-2xl border border-gray-800 transition relative group"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 20px rgba(99, 179, 237, 0.4)',
                borderColor: 'rgba(99, 179, 237, 0.4)',
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-gray-300 leading-relaxed font-semibold">
                Currently pursuing my B.Tech in Computer Science at DCE, Darbhanga.
                Passionate about learning new technologies and applying them to solve real-world problems.
              </p>
            </motion.div>

            {/* Creative Side Box */}
            <motion.div
              className="creative-box bg-gradient-to-tr from-rose-600 to-pink-500 p-8 rounded-2xl border border-gray-800 transition relative group"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)',
                borderColor: 'rgba(255, 105, 180, 0.4)',
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Creative Side</h3>
              <p className="text-gray-300 leading-relaxed font-semibold">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative top-5">
            Tech <span className="text-yellow-400">Stack</span>
          </h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
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
                className="relative top-8 px-4 py-2 bg-gray-900 rounded-full border border-gray-800 transition text-sm md:text-base font-medium"
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
      </div>
      </section>
    </div>
  );
};

export default About;
