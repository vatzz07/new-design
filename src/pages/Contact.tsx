import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, Calendar, Download } from 'lucide-react';
import resumeImage from 'figma:asset/685708400766cdfdd0dd8912961eae71f5594252.png';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "psrivatsan407@gmail.com",
      href: "mailto:psrivatsan407@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/srivatsan', label: 'GitHub', color: 'white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/srivatsanp/', label: 'LinkedIn', color: '#FFD700' },
    { icon: Twitter, href: 'https://twitter.com/srivatsan', label: 'Twitter', color: 'white' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:psrivatsan407@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeImage;
    link.download = 'Srivatsan_P_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen w-full bg-black text-white py-24 px-8 relative overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FFD700] text-6xl font-league"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          >
            {i % 3 === 0 ? '★' : i % 3 === 1 ? '◆' : '✦'}
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
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
          <p className="text-xl text-[#FFD700] max-w-3xl mx-auto font-mono">
            "Great design begins with great collaboration. Let's create something amazing together."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-league font-bold mb-6 text-white">
                SEND A MESSAGE
              </h3>
              <p className="text-gray-300 mb-8">
                Have a project in mind? Let's create something elegant together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#FFD700] font-medium mb-2 font-mono">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-[#FFD700] text-white focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#FFD700] font-medium mb-2 font-mono">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-[#FFD700] text-white focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#FFD700] font-medium mb-2 font-mono">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-[#FFD700] text-white focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-[#FFD700] font-medium mb-2 font-mono">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-[#FFD700] text-white focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#FFD700] text-black px-8 py-4 text-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_#FFD700] flex items-center justify-center gap-3"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-league font-bold mb-6 text-white">
                GET IN TOUCH
              </h3>
              <p className="text-gray-300 mb-8">
                Ready to bring your ideas to life? I'm just one message away from our next collaboration.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-900 border-2 border-[#FFD700] hover:border-white hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#FFD700] group-hover:bg-white text-black flex items-center justify-center transition-all duration-300">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="text-[#FFD700] font-mono text-sm">{info.label}</div>
                    <div className="text-white group-hover:text-white transition-colors duration-300">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-league font-bold mb-6 text-white">
                CONNECT WITH ME
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-12 h-12 bg-gray-900 border-2 border-[#FFD700] hover:border-white flex items-center justify-center transition-all duration-300 group"
                    style={{ color: social.color }}
                  >
                    <social.icon size={20} className="group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black px-6 py-4 text-lg font-bold font-league border-4 border-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300 shadow-[6px_6px_0px_0px_#FFD700] hover:shadow-[6px_6px_0px_0px_white] flex items-center justify-center gap-4"
              >
                <Download size={24} />
                <span>DOWNLOAD RESUME</span>
              </motion.button>
              
              <p className="text-center text-gray-400 font-mono text-sm">
                "Want to see my credentials? Click above!"
              </p>
            </motion.div>

            {/* Quick availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-4 sm:p-6 border-2 sm:border-4 border-[#FFD700] shadow-[4px_4px_0px_0px_white] sm:shadow-[8px_8px_0px_0px_white]"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="text-white" size={24} />
                <h4 className="text-lg font-league font-bold text-white">AVAILABILITY</h4>
              </div>
              <p className="text-gray-300">
                Currently available for freelance projects and collaborations. 
                <span className="text-[#FFD700] font-mono"> Let's create excellence together!</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

