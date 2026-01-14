import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Community from './components/Community'
import Inquiries from './components/Inquiries'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Journey />
        <Community />
        <Inquiries />
      </motion.main>
      <Footer />
    </div>
  )
}

export default App
