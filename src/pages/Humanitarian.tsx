import { motion } from 'motion/react';
import { Heart, Users, Globe, HandHeart, Shield, Award } from 'lucide-react';

export function Humanitarian() {
  const humanitarianValues = [
    { 
      icon: Heart, 
      title: "Compassion", 
      description: "Empathy-driven design that addresses real human needs and challenges" 
    },
    { 
      icon: Users, 
      title: "Community Impact", 
      description: "Creating solutions that benefit communities and make a positive difference" 
    },
    { 
      icon: Globe, 
      title: "Global Perspective", 
      description: "Understanding diverse cultures and designing for inclusivity worldwide" 
    },
    { 
      icon: HandHeart, 
      title: "Accessibility", 
      description: "Ensuring designs are accessible to all, regardless of abilities or circumstances" 
    },
    { 
      icon: Shield, 
      title: "Ethical Design", 
      description: "Prioritizing user privacy, safety, and well-being in all design decisions" 
    },
    { 
      icon: Award, 
      title: "Social Responsibility", 
      description: "Using design skills to contribute to social causes and humanitarian efforts" 
    }
  ];

  const humanitarianProjects = [
    {
      title: "Ration+ - Digital Ration App",
      description: "Created a Tamil-English app for digitizing ration services with special focus on accessibility. The app includes delivery options for pregnant women, elderly, and disabled users, ensuring no one is left behind in accessing essential services.",
      impact: "Improving access to essential services for vulnerable populations"
    },
    {
      title: "Accessibility-First Design",
      description: "All my projects prioritize accessibility, ensuring that digital experiences are inclusive and usable by people with diverse abilities and needs.",
      impact: "Making technology accessible to everyone"
    }
  ];

  return (
    <section className="min-h-screen w-full bg-black text-white py-24 px-8 relative overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(30)].map((_, i) => (
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-league font-bold mb-8 leading-none text-white">
            HUMANITARIAN
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
          <p className="text-xl text-[#FFD700] max-w-3xl mx-auto font-mono">
            "Design with purpose, create with compassion, impact with intention."
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            I believe that design has the power to create positive change in the world. Through my work, 
            I strive to address real human needs, create inclusive solutions, and contribute to causes 
            that matter. Every design decision I make considers its impact on individuals, communities, 
            and society as a whole.
          </p>
        </motion.div>

        {/* Humanitarian Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-league font-bold mb-12 text-center text-white">
            HUMANITARIAN VALUES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {humanitarianValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 border-2 border-[#FFD700] hover:border-white hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#FFD700] group-hover:bg-white text-black flex items-center justify-center mb-4 transition-all duration-300">
                  <value.icon size={24} />
                </div>
                <h4 className="text-lg font-league font-bold mb-3 text-white">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Humanitarian Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-league font-bold mb-12 text-center text-white">
            HUMANITARIAN PROJECTS
          </h3>
          <div className="space-y-8">
            {humanitarianProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 border-4 border-[#FFD700] shadow-[8px_8px_0px_0px_white]"
              >
                <h4 className="text-2xl font-league font-bold mb-4 text-white">
                  {project.title}
                </h4>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-[#FFD700] font-mono">
                  <Heart size={20} />
                  <span>{project.impact}</span>
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
              "The best designs are those that not only solve problems but also make the world a better place for everyone."
            </blockquote>
            <cite className="text-[#FFD700] font-mono">- Srivatsan P</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

