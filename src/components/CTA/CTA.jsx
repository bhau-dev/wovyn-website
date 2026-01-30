import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import styles from './CTA.module.css'

function CTA() {
  return (
    <section className={`${styles.ctaSection} section`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="title-medium">Ready to weave stronger connections?</h2>
          <p>Download Wovyn for free and start nurturing the relationships that matter most.</p>
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Button href="#" variant="inverse" className={styles.ctaButton}>
              Download for iOS
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTA
