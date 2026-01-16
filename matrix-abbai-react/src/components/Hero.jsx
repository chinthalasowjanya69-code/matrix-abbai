
import { motion } from 'framer-motion'
import { useState } from 'react'
import ContactForm from './ContactForm'
import '../styles/hero.css'
const heroImage = "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/cdarth77-imagetourl.cloud-1768555561896-lav5nu.JPG"

const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })

  const handleGetStartedClick = (e) => {
    const rect = e.target.getBoundingClientRect()
    setClickPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    })
    setIsContactFormOpen(true)
  }

  const handleViewPortfolioClick = () => {
    const journeySection = document.getElementById('about')
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            PERSONAL BRAND EXCELLENCE
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Build Presence.<br />
            Create Identity.
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Elevate your personal brand with strategic storytelling, visual identity, and digital presence that commands attention and drives results.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="btn-primary glow"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(138, 43, 226, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStartedClick}
            >
              Direct Message
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image-card glass glow">
            <div className="hero-image-placeholder">
              <img
                  src={heroImage}
                  alt="Hero"
                  className="placeholder-icon hero-image-display hero-image-zoomed"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '24px',
                    objectFit: 'cover',
                    objectPosition: 'center 70%',
                    background: '#18122B',
                    maxHeight: '500px',
                  }}
              />
              <p>Hero Image</p>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        clickPosition={clickPosition}
      />
    </section>
  )
}

export default Hero