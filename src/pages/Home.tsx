import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import profileImage from 'figma:asset/d6c1e07a04bef4396bd8b586add46123114b3446.png';

export function Home() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-8xl font-league font-bold mb-6 leading-none text-white">
                SRIVATSAN<span className="text-[#FFD700]"> P</span>
              </h1>
              <div className="w-32 h-1 bg-[#FFD700] mb-6"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl lg:text-3xl text-[#FFD700] font-mono mb-8"
            >
              "Design is not just what it looks like. Design is how it works."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed mb-12"
            >
              UI/UX Designer & Front End Developer passionate about creating intuitive, 
              accessible, and engaging digital experiences that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/about-me">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FFD700] text-black px-8 py-4 text-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_#FFD700] flex items-center gap-3"
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white px-8 py-4 text-lg font-medium border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-full max-w-md aspect-square bg-gray-900 border-4 border-[#FFD700] shadow-[12px_12px_0px_0px_white] p-4">
                <img
                  src={profileImage}
                  alt="Srivatsan P"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

