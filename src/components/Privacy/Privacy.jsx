import { motion } from 'framer-motion'
import Container from '../ui/Container'
import styles from './Privacy.module.css'

function Privacy() {
  return (
    <section className={`${styles.privacySection} section`} id="privacy">
      <Container>
        <div className={styles.privacyContent}>
          <motion.div
            className={styles.privacyVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.privacyIconLarge}>🔒</div>
          </motion.div>
          <motion.div
            className={styles.privacyText}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="label">Privacy First</p>
            <h2 className="title-medium">Your data stays on your device</h2>
            <p>
              We believe your relationships are personal. That's why Wovyn is built with a local-first architecture — your data never leaves your device.
            </p>
            <ul className={styles.privacyPoints}>
              <li>All data stored locally on your iPhone</li>
              <li>No cloud sync required</li>
              <li>You're in complete control</li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Privacy
