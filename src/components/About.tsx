import { motion } from 'motion/react';
import { Palette, Code, Brain, Users, Target, Award } from 'lucide-react';

export function About() {
  const skills = [
    { icon: Palette, title: "Visual Design", description: "Creating engaging interfaces with tools like Figma, Adobe XD, and Photoshop" },
    { icon: Users, title: "User Research", description: "Understanding user needs through research and interaction design" },
    { icon: Code, title: "Front-End Development", description: "Building responsive interfaces with HTML, CSS, JavaScript, and React" },
    { icon: Brain, title: "Accessibility", description: "Ensuring inclusive design for all users and devices" },
    { icon: Target, title: "Information Architecture", description: "Structuring content and navigation for optimal user experience" },
    { icon: Award, title: "Responsive Design", description: "Creating seamless experiences across all devices and platforms" }
  ];

  return (
    <section id="about" className="min-h-screen w-full bg-black text-white py-24 px-8 relative overflow-hidden">
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
                ABOUT ME
              </h2>
              <div className="w-24 h-1 bg-[#FFD700] mb-8"></div>
              <p className="text-xl text-[#FFD700] font-mono mb-8">
                "Design is not just what it looks like. Design is how it works."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-gray-300">
                Hi, I'm Srivatsan P, a passionate UI/UX Designer currently pursuing Computer Science 
                and Engineering at Meenakshi College of Engineering, Chennai. I specialize in creating 
                intuitive, accessible, and engaging digital experiences that solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Currently working as a UX Designer and Front End Developer at Ciel Infitech, where I 
                design modern UI/UX flows and lead front-end development of global-scale React Native 
                mobile applications, ensuring responsive, scalable, and high-performance interfaces.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                My expertise spans from user research and interaction design to implementing designs 
                through front-end development, ensuring seamless execution and functionality. I believe 
                in thoughtful, hands-on design and collaboration to create meaningful digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-2 gap-8"
            >
              <div className="text-center p-6 bg-gray-900 border-4 border-[#FFD700] shadow-[4px_4px_0px_0px_white]">
                <div className="text-4xl font-bold font-league mb-2 text-white">4+</div>
                <div className="text-[#FFD700] font-mono">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-900 border-4 border-white shadow-[4px_4px_0px_0px_#FFD700]">
                <div className="text-3xl font-bold font-league mb-2 text-white">Aug 2025</div>
                <div className="text-[#FFD700] font-mono">Started at Ciel</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 border-2 border-[#FFD700] hover:border-white hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#FFD700] group-hover:bg-white text-black flex items-center justify-center mb-4 transition-all duration-300">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-lg font-league font-bold mb-3 text-white group-hover:text-white">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {skill.description}
                </p>
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
  );
}
