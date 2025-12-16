import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Users, Target, Award, Lightbulb } from 'lucide-react';
import paisaPathImage from 'figma:asset/cc1c1a0430167af9780da1025c34d69c6a8f09c9.png';
import rationPlusImage from 'figma:asset/750b0744f638d6b96c71de73994fbf08578d9f1a.png';
import liftologyImage from 'figma:asset/bad65bb3dd25b2017592cf161c8eeb81a075c32f.png';
import { ArrowRight } from 'lucide-react';

export function Business() {
  const businessProjects = [
    {
      id: 1,
      title: "Paisa Path",
      category: "AI-Powered Fintech App Prototype",
      description: "Designed a mobile interface with budgeting, investment tracking, and financial planning features. Focused on accessibility and trust-building for finance beginners, creating an intuitive experience for financial management.",
      image: paisaPathImage,
      link: "https://www.figma.com/proto/F63A6mZHZkkwXCIZiUiGy8/PAISA-PATH?page-id=0%3A1&node-id=550-4732&viewport=1512%2C896%2C0.18&t=8rx1pJpXgeekqxMZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=505%3A269&show-proto-sidebar=1",
      status: "Completed"
    },
    {
      id: 2,
      title: "Ration+",
      category: "Digital Ration App (UI/UX Prototype)",
      description: "Created a Tamil-English app for digitizing ration services with card scanning and delivery features. Focused on accessibility and ease of use, including delivery options for pregnant women, elderly and disabled users.",
      image: rationPlusImage,
      link: "https://www.figma.com/proto/z59wwk81nwaw2315GSHCqp/Ration--?page-id=0%3A1&node-id=46-594&viewport=180%2C130%2C0.2&t=BarCSAy4eksYTot5-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      status: "Completed"
    },
    {
      id: 3,
      title: "Liftology",
      category: "AI-Integrated Fitness Web App",
      description: "Built a fitness web app with AI trainers, diet plans, and workout tracking. Designed an engaging red-black UI with integrated authentication and data handling for seamless user experience.",
      image: liftologyImage,
      link: "https://www.figma.com/proto/uuhp3pKltkAPhnspAbAbYe/LIFTOLOGY?page-id=0%3A1&node-id=34-311&viewport=-1071%2C17%2C0.16&t=1VJEQiTxDEpFZl05-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=34%3A610",
      status: "Completed"
    }
  ];

  const businessValues = [
    { icon: Target, title: "Strategic Design", description: "Creating solutions that align with business goals and user needs" },
    { icon: TrendingUp, title: "Growth Focused", description: "Designing for scalability and long-term business success" },
    { icon: Users, title: "User-Centered", description: "Putting users at the heart of every business decision" },
    { icon: Lightbulb, title: "Innovation", description: "Leveraging cutting-edge technology for competitive advantage" },
    { icon: Award, title: "Quality", description: "Delivering excellence in every project and interaction" },
    { icon: Briefcase, title: "Professional", description: "Maintaining high standards in all business endeavors" }
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

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-league font-bold mb-8 leading-none text-white">
            BUSINESS
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
          <p className="text-xl text-[#FFD700] max-w-3xl mx-auto font-mono">
            "Transforming ideas into successful business solutions through strategic design and innovation."
          </p>
        </motion.div>

        {/* Business Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-league font-bold mb-12 text-center text-white">
            BUSINESS VALUES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessValues.map((value, index) => (
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

        {/* Business Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-league font-bold mb-12 text-center text-white">
            BUSINESS PROJECTS
          </h3>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {businessProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden bg-gray-900 aspect-[4/3] group border-2 sm:border-4 border-white shadow-[4px_4px_0px_0px_#FFD700] sm:shadow-[8px_8px_0px_0px_#FFD700]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#FFD700]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-3 py-1 text-sm font-medium border-2 ${
                      project.status === 'Completed' 
                        ? 'bg-white text-black border-[#FFD700]' 
                        : 'bg-[#FFD700] text-black border-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-fira text-[#FFD700] uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-league font-bold mb-6 text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-6 pt-6">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 bg-[#FFD700] text-black px-6 py-3 font-medium border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_#FFD700]"
                    >
                      <span>View Project</span>
                      <ArrowRight size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-league font-bold mb-12 text-center text-white">
            PROFESSIONAL EXPERIENCE
          </h3>
          <div className="max-w-5xl mx-auto">
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
                <li>• Collaborating with cross-functional teams to deliver business solutions</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

