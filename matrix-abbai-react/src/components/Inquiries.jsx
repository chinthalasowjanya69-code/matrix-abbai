import { motion } from 'framer-motion'
import '../styles/inquiries.css'
import logoImage from '../assets/images/ChatGPT Image Jan 13, 2026, 01_23_40 AM.png'
import twitterIcon from '../assets/images/twitter.jpg'
import instagramIcon from '../assets/images/instagram.jpg'
import youtubeIcon from '../assets/images/youtube.jpg'
import telegramIcon from '../assets/images/telegram.jpg'

const Inquiries = () => {
  const socialLinks = [
    { name: 'Instagram', icon: instagramIcon, url: 'https://www.instagram.com/matrix.abbai?igsh=MWFteWg3dGhqZjB0Zg%3D%3D&utm_source=qr' },
    { name: 'Telegram', icon: telegramIcon, url: 'https://t.me/matrixabbaisiddarth' }
  ]

  return (
    <section className="inquiries section" id="contact">
      <div className="container">
        <motion.div
          className="inquiries-card glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="inquiries-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Inquiries
          </motion.h2>
          
          <motion.div
            className="inquiries-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={logoImage} alt="Matrix Abbai Logo" className="logo-image" />
          </motion.div>
          
          <motion.div
            className="inquiries-email"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>For collaborations, projects, or just to connect:</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=siddarth.films@gmail.com" target="_blank" className="email-link">
              siddarth.films@gmail.com
            </a>
          </motion.div>
          
          <motion.div
            className="social-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="social-card glass"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={social.icon} alt={social.name} className="social-icon-image" />
                <span className="social-name">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Inquiries