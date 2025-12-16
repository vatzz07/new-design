import { motion } from 'motion/react';
import { Palette, Code, Smartphone, Globe, Database, Zap, Users } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Illustrator", level: 85 },
        { name: "Photoshop", level: 80 },
        { name: "Sketch", level: 80 },
        { name: "Framer", level: 75 }
      ]
    },
    {
      icon: Users,
      title: "Design Skills",
      skills: [
        { name: "User Research", level: 90 },
        { name: "Interaction Design", level: 90 },
        { name: "Visual Design", level: 95 },
        { name: "Accessibility", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Information Architecture", level: 85 }
      ]
    },
    {
      icon: Code,
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Node.js", level: 70 }
      ]
    },
    {
      icon: Globe,
      title: "Additional Tools",
      skills: [
        { name: "Miro", level: 85 },
        { name: "Notion", level: 80 },
        { name: "Express.js", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Accessibility", level: 85 }
      ]
    },
    {
      icon: Zap,
      title: "Languages & Soft Skills",
      skills: [
        { name: "English", level: 90 },
        { name: "Tamil", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Project Management", level: 80 },
        { name: "Communication", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen w-full bg-black text-white py-24 px-8 relative overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FFD700] text-4xl font-league"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            ★
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-league font-bold mb-8 leading-none text-white">
            SKILLS & EXPERTISE
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
          <p className="text-xl text-[#FFD700] max-w-3xl mx-auto font-mono">
            "Excellence through dedication and continuous learning."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center border-2 border-[#FFD700]">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-league font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-[#FFD700] font-mono text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-800 h-2 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[#FFD700] to-white relative"
                      >
                        {/* Animated glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-white opacity-30"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-league font-bold mb-8 text-white">
              WORK EXPERIENCE
            </h3>
            <div className="bg-gray-900 p-8 text-left border-4 border-[#FFD700] shadow-[8px_8px_0px_0px_white]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">Ciel Infitech</h4>
                  <p className="text-lg text-[#FFD700] font-mono">UX Designer | Front End Developer</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 font-mono">
                  Aug 2025 - Present
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li>• Designing modern UI/UX flows and prototypes for seamless user experience</li>
                <li>• Leading front-end development of a global-scale React Native mobile app</li>
                <li>• Ensuring responsive, scalable, and high-performance mobile interfaces</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-league font-bold mb-12 text-center text-white">
            EDUCATION & CERTIFICATIONS
          </h3>
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 border-4 border-[#FFD700] shadow-[4px_4px_0px_0px_white]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-white">B.E. - Computer Science and Engineering</h4>
                  <p className="text-gray-300">Meenakshi College of Engineering, Chennai</p>
                </div>
                <div className="text-[#FFD700] mt-2 md:mt-0 font-mono">
                  Nov 2022 - July 2026
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 border-4 border-white shadow-[4px_4px_0px_0px_#FFD700]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-white">Higher Secondary - Bio-Maths</h4>
                  <p className="text-gray-300">Karnataka Sangha Higher Secondary School, Chennai</p>
                </div>
                <div className="text-[#FFD700] mt-2 md:mt-0 font-mono">
                  May 2020 - May 2022
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              "Google UX Design",
              "Digital Skills User Experience - Accenture"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border-4 border-[#FFD700] hover:border-white bg-gray-900 hover:bg-[#FFD700] hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_#FFD700]"
              >
                <div className="font-fira text-sm font-medium text-white hover:text-black">{cert}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
