import { motion } from 'framer-motion'
import '../styles/journey.css'
import siidarttImage from '../assets/images/siidartt.png'

const Journey = () => {
  return (
    <section className="journey section" id="about">
      <div className="container journey-container">
        <motion.div
          className="journey-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="journey-image-card glass">
            <img src={siidarttImage} alt="Siidartt Journey" className="journey-image-display" />
          </div>
        </motion.div>
        
        <motion.div
          className="journey-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="journey-card glass">
            <motion.h2
              className="journey-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My Journey
            </motion.h2>
            
            <motion.p
              className="journey-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              From humble beginnings to crafting extraordinary personal brands, my path has been one of relentless pursuit of excellence. Each project, each client, each challenge has shaped not just my expertise, but my philosophy of creating identities that resonate and endure.
            </motion.p>
            
            <motion.a
              href="https://www.instagram.com/matrix.abbai?igsh=MWFteWg3dGhqZjB0Zg%3D%3D&utm_source=qr"
              className="journey-link"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the full story →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Journey