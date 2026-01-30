import { motion } from 'framer-motion'
import Container from '../ui/Container'
import styles from './Hero.module.css'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const phoneVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 }
    }
  }

  return (
    <section className={styles.hero}>
      <Container>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.heroTagline} variants={itemVariants}>
            Relationship Journal for iOS
          </motion.span>
          <motion.h1 variants={itemVariants}>
            Weave <em>stronger</em> connections.
          </motion.h1>
          <motion.p className={styles.heroDescription} variants={itemVariants}>
            Remember what matters about the people who matter. Wovyn helps you nurture meaningful relationships without the guilt or noise of social media.
          </motion.p>
          <motion.div className={styles.heroCtas} id="download" variants={itemVariants}>
            <motion.a
              href="#"
              className={styles.appStoreLink}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/assets/app-store-badge.svg"
                alt="Download on the App Store"
                className={styles.appStoreBadge}
              />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.heroVisual}
          variants={phoneVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.phoneMockup}
            whileHover={{ y: -8, boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)' }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/assets/Home - With Friends.png"
              alt="Wovyn App Screenshot"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
