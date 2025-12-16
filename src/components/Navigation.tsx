import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Mail, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About Me', path: '/about-me', id: 'about-me' },
    { name: 'Business', path: '/business', id: 'business' },
    { name: 'Humanitarian', path: '/humanitarian', id: 'humanitarian' },
    { name: 'Social Works', path: '/social-works', id: 'social-works' },
    { name: 'Contact', path: '/contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:psrivatsan407@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/srivatsanp/', label: 'LinkedIn' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/about-me">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <img 
                  src="/images/jlb.png" 
                  alt="JLB Logo" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`font-fira text-sm font-medium transition-all duration-300 hover:text-white ${
                      location.pathname === item.path
                        ? 'text-white border-b-2 border-[#FFD700]'
                        : 'text-white hover:text-white'
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-10 h-10 bg-gray-900 border-2 border-[#FFD700] hover:border-white text-[#FFD700] hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 bg-[#FFD700] border-2 border-white text-black flex items-center justify-center transition-all duration-300"
            >
              {isOpen ? <X size={16} className="sm:w-5 sm:h-5" /> : <Menu size={16} className="sm:w-5 sm:h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? '0%' : '100%' 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed inset-0 bg-black z-40 lg:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Joker mobile background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#FFD700] text-8xl font-league"
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
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              ★
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-12 relative">
          {/* Mobile Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-league font-bold text-white"
          >
            SRIVATSAN<span className="text-[#FFD700]"> P</span>
          </motion.div>

          {/* Mobile Navigation Links */}
          <div className="space-y-8">
            {navItems.map((item, index) => (
              <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    x: isOpen ? 0 : 50 
                  }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`block text-2xl sm:text-3xl font-league font-bold transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white border-b-4 border-[#FFD700] pb-2'
                      : 'text-white hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 30 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="w-12 h-12 bg-gray-900 border-2 border-[#FFD700] hover:border-white text-[#FFD700] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Elegant Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center max-w-xs px-6 mx-auto"
          >
            <p className="text-[#FFD700] font-mono text-sm italic">
              "Excellence in design, elegance in execution."
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}