import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from '../ui/Container'
import styles from './HowItWorks.module.css'

const steps = [
  {
    title: 'Add Your People',
    description: 'Import contacts or add friends manually. Start with your closest circle — quality over quantity.'
  },
  {
    title: 'Set Your Rhythm',
    description: 'Choose how often you want to connect with each friend. Daily check-ins or quarterly catch-ups — you decide.'
  },
  {
    title: 'Log Interactions',
    description: 'Had coffee? Quick call? A simple tap logs your interaction and resets the connection timer.'
  },
  {
    title: 'Stay Connected',
    description: 'Get gentle reminders before relationships drift. Wovyn keeps you on track without the guilt trips.'
  }
]

function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className={`${styles.howItWorks} section`} id="how-it-works">
      <Container>
        <motion.div
          className={styles.howItWorksHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="label">How It Works</p>
          <h2 className="title-medium">Simple. Intentional. Effective.</h2>
        </motion.div>
        <motion.div
          ref={ref}
          className={styles.steps}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className={styles.step} variants={itemVariants}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default HowItWorks
