import { motion } from 'framer-motion'
import Container from '../ui/Container'
import styles from './TapestryShowcase.module.css'

const friendNodes = [
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', alt: 'Friend' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', alt: 'Friend' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', alt: 'Friend' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', alt: 'Friend' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face', alt: 'Friend' }
]

function TapestryShowcase() {
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }

  const counterOrbitVariants = {
    animate: {
      rotate: -360,
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }

  return (
    <section className={`${styles.tapestryShowcase} section`}>
      <Container>
        <div className={styles.tapestryContent}>
          <motion.div
            className={styles.tapestryText}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="label">The Tapestry</p>
            <h2 className="title-medium">See your relationships at a glance</h2>
            <p>
              The Tapestry is a beautiful, interactive visualization of your closest connections. Friends orbit around you based on how recently you've connected — those drifting away move to the outer rings.
            </p>
            <p>
              At a glance, you'll know exactly who needs a little love.
            </p>
            <div className={styles.statusLegend}>
              <div className={styles.statusItem}>
                <span className={`${styles.statusDot} ${styles.good}`}></span>
                <span>Connected</span>
              </div>
              <div className={styles.statusItem}>
                <span className={`${styles.statusDot} ${styles.warning}`}></span>
                <span>Drifting</span>
              </div>
              <div className={styles.statusItem}>
                <span className={`${styles.statusDot} ${styles.urgent}`}></span>
                <span>Needs Attention</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.tapestryVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.tapestryIllustration}>
              <div className={`${styles.orbit} ${styles.orbit3}`}></div>
              <div className={`${styles.orbit} ${styles.orbit2}`}></div>
              <div className={`${styles.orbit} ${styles.orbit1}`}></div>
              <div className={styles.centerNode}>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face"
                  alt="You"
                  loading="lazy"
                />
              </div>
              <motion.div
                className={styles.orbitContainer}
                variants={orbitVariants}
                animate="animate"
              >
                {friendNodes.map((friend, index) => (
                  <motion.div
                    key={index}
                    className={styles.friendNode}
                    variants={counterOrbitVariants}
                    animate="animate"
                  >
                    <img src={friend.src} alt={friend.alt} loading="lazy" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default TapestryShowcase
