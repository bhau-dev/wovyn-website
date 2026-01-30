import { motion } from 'framer-motion'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import AppFlowShowcase from '../components/AppFlowShowcase/AppFlowShowcase'
import TapestryShowcase from '../components/TapestryShowcase/TapestryShowcase'
import Privacy from '../components/Privacy/Privacy'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AppFlowShowcase />
        <TapestryShowcase />
        <Privacy />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  )
}

export default Home
