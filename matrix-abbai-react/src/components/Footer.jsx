import { motion } from 'framer-motion'
import '../styles/footer.css'

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container footer-container">
        <motion.p
          className="footer-copyright"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © 2024 Matrix Abbai. All rights reserved.
        </motion.p>
        
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer