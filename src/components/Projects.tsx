import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import paisaPathImage from 'figma:asset/cc1c1a0430167af9780da1025c34d69c6a8f09c9.png';
import rationPlusImage from 'figma:asset/750b0744f638d6b96c71de73994fbf08578d9f1a.png';
import liftologyImage from 'figma:asset/bad65bb3dd25b2017592cf161c8eeb81a075c32f.png';

export function Projects() {
  const projects = [
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

  return (
    <section className="relative w-full bg-black text-white py-24 lg:py-32 overflow-hidden" id="projects">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-[#FFD700] text-8xl font-league transform rotate-45">★</div>
        <div className="absolute top-40 right-32 text-white text-6xl font-league transform -rotate-12">◆</div>
        <div className="absolute bottom-32 left-1/4 text-[#FFD700] text-7xl font-league transform rotate-12">★</div>
        <div className="absolute bottom-20 right-20 text-white text-5xl font-league transform -rotate-45">◆</div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-league font-bold mb-8 leading-none text-white">
            SELECTED WORKS
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
          <p className="text-xl text-[#FFD700] max-w-3xl mx-auto font-mono">
            "Every project tells a story of innovation and elegance."
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
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

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-league font-bold mb-6 text-white">
              READY TO CREATE?
            </h3>
            <p className="text-lg text-[#FFD700] mb-8 font-mono">
              "Let's build something extraordinary together."
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFD700] text-black px-8 py-4 text-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_#FFD700]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
