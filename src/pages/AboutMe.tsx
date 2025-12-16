import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function AboutMe() {

  return (
    <>
      {/* Hero Section */}
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
                  Dr.<span className="text-[#FFD700]">Sukumar</span> Balakrishnan
                </h1>
                <div className="w-32 h-1 bg-[#FFD700] mb-6"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-[#FFD700] text-black px-6 py-3 text-base sm:text-lg font-bold border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_#FFD700] cursor-default text-center"
                >
                  BELIEVER
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white text-black px-6 py-3 text-base sm:text-lg font-bold border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_#FFD700] hover:shadow-[4px_4px_0px_0px_white] cursor-default text-center"
                >
                  HUMANITARIAN
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-gray-900 text-[#FFD700] px-6 py-3 text-base sm:text-lg font-bold border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_#FFD700] hover:shadow-[4px_4px_0px_0px_white] cursor-default text-center"
                >
                  HABIT OF SUCCESS
                </motion.div>
              </motion.div>

              {/* Get In Touch Button - Desktop Only (Next to text) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden lg:flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FFD700] text-black px-8 py-4 text-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_#FFD700] flex items-center gap-3"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center lg:justify-end"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="w-full max-w-md aspect-square bg-gray-900 border-4 border-[#FFD700] shadow-[12px_12px_0px_0px_white] p-4">
                  <img
                    src="/images/Sukumar Balakrishnan.png"
                    alt="Dr. Sukumar Balakrishnan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Get In Touch Button - Mobile Only (Below Image) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center w-full mt-12 sm:mt-16 lg:hidden"
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-[#FFD700] text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_#FFD700] flex items-center justify-center gap-3"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Strip Section */}
      <section className="w-full bg-black py-8 sm:py-10 border-y-2 border-[#FFD700] relative overflow-hidden">
        <div className="relative w-full overflow-hidden">
          {/* Animated Logo Strip */}
          <div className="animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-8 flex-shrink-0">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                <div
                  key={`logo-${index}`}
                  className="h-12 sm:h-16 md:h-20 w-auto px-3 sm:px-4 flex items-center justify-center flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  {/* Logo container - replace this div with <img> tags when you have actual logos */}
                  <div className="h-full w-auto bg-white/10 border border-[#FFD700]/20 hover:border-[#FFD700]/50 p-2 sm:p-3 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                    <span className="text-[#FFD700]/70 hover:text-[#FFD700] text-[10px] sm:text-xs font-jakarta font-medium whitespace-nowrap">Logo {index}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-8 flex-shrink-0">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                <div
                  key={`logo-dup-${index}`}
                  className="h-12 sm:h-16 md:h-20 w-auto px-3 sm:px-4 flex items-center justify-center flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  {/* Logo container - replace this div with <img> tags when you have actual logos */}
                  <div className="h-full w-auto bg-white/10 border border-[#FFD700]/20 hover:border-[#FFD700]/50 p-2 sm:p-3 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                    <span className="text-[#FFD700]/70 hover:text-[#FFD700] text-[10px] sm:text-xs font-jakarta font-medium whitespace-nowrap">Logo {index}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me Content Section */}
      <section className="min-h-screen w-full bg-black text-white py-24 px-8 relative overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FFD700] text-5xl font-league"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.3, 0.8],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ★
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-6xl lg:text-7xl font-league font-bold mb-8 leading-none text-white">
                WHERE HE BEGAN
              </h2>
              <div className="w-24 h-1 bg-[#FFD700] mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-gray-300">
                Dr. Sukumar Balakrishnan's journey began in the simplest of circumstances. From a modest home, he has risen to become a visionary entrepreneur, a committed philanthropist, and a true humanitarian. His story is one of resilience, sacrifice, and unwavering determination.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                At the heart of his journey stands his mother, Mrs. Jayalakshmi Balakrishnan. To support the family, she ran a small roadside idly shop, working tirelessly day after day. Despite financial struggles, she never allowed circumstances to stand in the way of her son's education. Her strength, discipline, and selfless sacrifices laid the foundation for Sukumar's dreams.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                His father, Mr. Balakrishnan, was a painter by profession. The family's life took a tragic turn when he passed away suddenly. With no money even for the final rites, a young Sukumar had to borrow ₹10,000 at interest to perform his father's funeral. This painful experience became one of the earliest challenges that shaped his character and resolve.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Life was never easy, but Sukumar never gave up. He often ate breakfast at his mother's idly shop and depended on mid-day meals at school to get through the day. With no electricity at home, he studied under streetlights and kerosene lamps, pushing forward against every limitation. Through sheer perseverance and belief, he went on to complete his degree in Mechanical Engineering—marking the beginning of a remarkable journey built from struggle, grit, and hope.
              </p>
            </motion.div>

          </div>

          {/* Right Content - Image Placeholders */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 aspect-square border-4 border-[#FFD700] hover:border-white transition-all duration-300 group overflow-hidden"
              >
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-mono">Image {index}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-league font-bold mb-12 text-center text-white">
            TOOLS & TECHNOLOGIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Sketch', 'Framer',
              'React', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Node.js', 'Express.js'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center p-4 bg-gray-900 border-2 border-[#FFD700] hover:border-white hover:bg-[#FFD700] hover:text-black transition-all duration-300 group"
              >
                <div className="font-fira text-sm font-medium text-white group-hover:text-black">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gray-900 p-12 border-4 border-[#FFD700] shadow-[12px_12px_0px_0px_white] relative">
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-white"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#FFD700]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <blockquote className="text-2xl md:text-3xl font-league text-white mb-6">
              "I don't just design interfaces... I design EXPERIENCES that make people smile."
            </blockquote>
            <cite className="text-[#FFD700] font-mono">- Srivatsan P</cite>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}

