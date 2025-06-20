import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "http://github.com/snyper9955" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/abhishek-kumar-86a157287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FaTwitter />, url: "https://twitter.com/creativeabhishek" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/creative_abhishek__?igsh=MWpvbzdib3dvYng2YQ==" },
    { icon: <FaEnvelope />, url: "mailto:abhishek@example.com" },
    {icon: <FaYoutube />, url: "https://youtube.com/@creativeabhishekoffical?si=B77M9PyTOXwXsQeS" },
  ];

  const footerLinks = [
    { title: "Home", url: "#" },
    { title: "About", url: "#about" },
    { title: "Services", url: "#services" },
    { title: "Portfolio", url: "#portfolio" },
    { title: "Contact", url: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black text-white pt-16   sm:px-6 ">
      <hr className="border-t border-gray-700 relative bottom-2"/>
      <div className=" mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 mb-12"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text 
            text-transparent">
              Creative Abhishek
            </h3>
            <p className="text-gray-400">
              Creating digital experiences that inspire and engage. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-xl text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-400">
              Subscribe to my newsletter for the latest projects and updates.
            </p>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none 
                focus:ring-2 focus:ring-yellow-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-500 text-black
                 font-semibold rounded-md"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-800  text-center text-gray-500"
        >
          <p>
            &copy; {new Date().getFullYear()} Creative Abhishek. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Made with ❤️ using React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;