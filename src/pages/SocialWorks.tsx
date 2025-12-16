import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Handshake, Lightbulb, Target, Award, Globe } from 'lucide-react';

export function SocialWorks() {
  const socialInitiatives = [
    {
      icon: Users,
      title: "Community Engagement",
      description: "Actively participating in community initiatives and using design skills to support local causes and organizations."
    },
    {
      icon: Handshake,
      title: "Collaborative Projects",
      description: "Working with non-profits and social organizations to create digital solutions that address community needs."
    },
    {
      icon: Lightbulb,
      title: "Educational Outreach",
      description: "Sharing knowledge and design expertise through workshops, mentorship, and educational initiatives."
    },
    {
      icon: Target,
      title: "Social Impact Design",
      description: "Creating designs that prioritize social good, accessibility, and positive community impact."
    },
    {
      icon: Award,
      title: "Volunteer Work",
      description: "Contributing time and skills to volunteer projects that make a difference in people's lives."
    },
    {
      icon: Globe,
      title: "Global Awareness",
      description: "Designing solutions that raise awareness about social issues and promote positive change."
    }
  ];

  const socialProjects = [
    {
      title: "Accessible Design Initiatives",
      description: "All my design projects prioritize accessibility, ensuring that digital experiences are inclusive for people with disabilities, elderly users, and those with limited digital literacy. This includes the Ration+ app which specifically addresses the needs of vulnerable populations.",
      impact: "Making technology accessible to underserved communities"
    },
    {
      title: "Community-Focused Solutions",
      description: "Designing solutions that address real community needs, such as digitizing essential services and creating user-friendly interfaces for diverse populations, including multilingual support.",
      impact: "Improving access to essential services for all"
    },
    {
      title: "Educational Content Creation",
      description: "Creating educational resources and sharing design knowledge to help others learn and grow in the field of UI/UX design.",
      impact: "Empowering others through knowledge sharing"
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
            SOCIAL WORKS
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
          <p className="text-xl text-[#FFD700] max-w-3xl mx-auto font-mono">
            "Using design as a tool for positive social change and community empowerment."
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
            I believe in giving back to the community and using my design skills to create positive social impact. 
            Through various initiatives and projects, I work towards making technology more accessible, supporting 
            community causes, and contributing to social good. Every project is an opportunity to make a difference 
            in people's lives.
          </p>
        </motion.div>

        {/* Social Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-league font-bold mb-12 text-center text-white">
            SOCIAL INITIATIVES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 border-2 border-[#FFD700] hover:border-white hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#FFD700] group-hover:bg-white text-black flex items-center justify-center mb-4 transition-all duration-300">
                  <initiative.icon size={24} />
                </div>
                <h4 className="text-lg font-league font-bold mb-3 text-white">
                  {initiative.title}
                </h4>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-league font-bold mb-12 text-center text-white">
            SOCIAL PROJECTS
          </h3>
          <div className="space-y-8">
            {socialProjects.map((project, index) => (
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
                  <Target size={20} />
                  <span>{project.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
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
            <h3 className="text-2xl font-league font-bold mb-6 text-white">
              INTERESTED IN COLLABORATING?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              If you have a social cause or community project that could benefit from design expertise, 
              I'd love to hear from you. Let's work together to create positive change.
            </p>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#FFD700] text-black px-8 py-4 text-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_#FFD700] cursor-pointer"
              >
                Get In Touch
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

