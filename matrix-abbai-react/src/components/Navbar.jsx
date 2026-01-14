import { motion } from 'framer-motion'
import { useState } from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <motion.nav
      className="navbar glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2>Matrix Abbai</h2>
        </motion.div>

        <div className="navbar-menu">
          <motion.a
            className="navbar-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('home')}
          >
            Home
          </motion.a>
          <motion.a
            className="navbar-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('about')}
          >
            About
          </motion.a>
          <motion.a
            className="navbar-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('community')}
          >
            Community
          </motion.a>
          <motion.a
            className="navbar-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </motion.a>

        </div>

        <motion.button
          className="btn-primary navbar-cta glow"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(138, 43, 226, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://t.me/matrixabbaisiddarth', '_blank')}
        >
          Join Community
        </motion.button>

        <div className="navbar-mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="navbar-mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('community')}>Community</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
          <button
            className="btn-primary"
            onClick={() => {
              setIsMenuOpen(false);
              window.open('https://t.me/matrixabbaisiddarth', '_blank');
            }}
          >
            Join Community
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar