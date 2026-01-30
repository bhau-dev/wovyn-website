import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from '../ui/Container'
import FeatureCard from './FeatureCard'
import styles from './Features.module.css'

const features = [
  {
    icon: '🔔',
    iconColor: 'amber',
    title: 'Smart Reminders',
    description: "Get gentle nudges before friendships drift. Set your own rhythm for each relationship — daily, weekly, or monthly."
  },
  {
    icon: '📝',
    iconColor: 'rose',
    title: 'Memory Knots',
    description: "Capture important details about your friends. Remember their kids' names, favorite coffee order, or that book they recommended."
  },
  {
    icon: '✨',
    iconColor: 'emerald',
    title: 'The Tapestry',
    description: "A beautiful visualization of your relationships. See who needs attention at a glance and track your connection patterns."
  },
  {
    icon: '📱',
    iconColor: 'stone',
    title: 'Home Screen Widget',
    description: "Quick access to friends who need a check-in. Never miss an opportunity to reach out with the iOS widget."
  },
  {
    icon: '📊',
    iconColor: 'amber',
    title: 'Interaction History',
    description: "Log coffee dates, calls, and messages. Build a timeline of your relationships and see your progress over time."
  },
  {
    icon: '🎂',
    iconColor: 'emerald',
    title: 'Birthday Reminders',
    description: "Never forget an important date. Get reminded the day before so you have time to prepare something meaningful."
  }
]

function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <section className={`${styles.features} section`} id="features">
      <Container>
        <motion.div
          className={styles.featuresHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="label">Features</p>
          <h2 className="title-medium">Everything you need to stay close</h2>
          <p className="body-text">
            Quality over quantity. Wovyn helps you focus on the relationships that truly matter.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default Features
