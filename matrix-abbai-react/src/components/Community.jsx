import { motion } from 'framer-motion'
import '../styles/community.css'
import telegramIcon from '../assets/images/telegram.jpg'

const Community = () => {
  return (
    <section className="community section" id="community">
      <div className="container">
        <motion.div
          className="community-card glass glow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="community-icon"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <img src={telegramIcon} alt="Telegram" className="community-telegram-icon" />
          </motion.div>
          
          <motion.h2
            className="community-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The Inner Circle
          </motion.h2>
          
          <motion.p
            className="community-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Join an exclusive community of visionaries, creators, and entrepreneurs who are redefining personal branding. Share insights, collaborate on projects, and grow together in a space designed for those who demand excellence.
          </motion.p>
          
          <motion.button
            className="btn-primary community-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(138, 43, 226, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://t.me/matrixabbaisiddarth', '_blank')}
          >
            Enter the Circle
          </motion.button>
          
          <motion.p
            className="community-caption"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Exclusively via Telegram
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Community