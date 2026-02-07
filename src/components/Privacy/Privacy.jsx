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
            <h2 className="title-medium">Your privacy, your control</h2>
            <p>
              We believe your relationships are personal. Wovyn is built with privacy at its core — your data syncs securely through iCloud, AI features require explicit consent, and you can delete your account and all data at any time.
            </p>
            <ul className={styles.privacyPoints}>
              <li>Data syncs securely via iCloud — Apple's end-to-end encryption</li>
              <li>AI suggestions require your explicit opt-in consent</li>
              <li>Delete your account and all data anytime in Settings</li>
              <li>No ads, no data selling, no social graph mining</li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Privacy
