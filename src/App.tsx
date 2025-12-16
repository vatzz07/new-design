import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AboutMe } from './pages/AboutMe';
import { Business } from './pages/Business';
import { Humanitarian } from './pages/Humanitarian';
import { SocialWorks } from './pages/SocialWorks';
import { Contact } from './pages/Contact';

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-8 h-8 border-2 border-[#FFD700] border-t-white mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-white font-league text-lg tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            LOADING ELEGANCE...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Chaotic HA HA HA Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FFD700] font-league font-bold select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 0.5}rem`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360, 720]
            }}
            transition={{ 
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            ★
          </motion.div>
        ))}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`white-${i}`}
            className="absolute text-white font-league font-bold select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 1.5 + 0.8}rem`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{ 
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            ◆
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/business" element={<Business />} />
          <Route path="/humanitarian" element={<Humanitarian />} />
          <Route path="/social-works" element={<SocialWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Floating Joker Elements */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD700] transform rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [45, 225, 405]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
