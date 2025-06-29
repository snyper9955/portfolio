import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "http://github.com/snyper9955",
      hover: "hover:text-white",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/abhishek-kumar-86a157287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      hover: "hover:text-blue-500",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/creative_abhishek__?igsh=MWpvbzdib3dvYng2YQ==",
      hover: "hover:text-pink-500",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:chemistryhero1@gmail.com",
      hover: "hover:text-yellow-400",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/@creativeabhishekoffical?si=B77M9PyTOXwXsQeS",
      hover: "hover:text-red-500",
    },
  ];

  const footerLinks = [
    { title: "Home", target: "home" },
    { title: "About", target: "about" },
    { title: "Services", target: "services" },
    { title: "Portfolio", target: "portfolio" },
    { title: "Contact", target: "connect" },
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
    <footer className="bg-gradient-to-t from-gray-900 to-black text-white pt-16 sm:px-6 relative ">
      <hr className="border-t border-gray-700 relative bottom-5"  />
      <div className="mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 mb-12"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Creative Abhishek
            </h3>
            <p className="text-gray-400">
              Creating digital experiences that inspire and engage. Let's build
              something amazing together.
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
                  className={`text-xl text-gray-400 transition-colors ${link.hover}`}
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
                  <Link
                    to={link.target}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
        
        </motion.div>

        {/* Copyright */}
        
      </div>
    </footer>
  );
};

export default Footer;
