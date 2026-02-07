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
    description: "Get gentle nudges before friendships drift. Choose Quiet, Balanced, or Active notification modes to match your lifestyle."
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
    description: "A beautiful visualization of your relationships. See connection strength scores (0-100) and status indicators at a glance."
  },
  {
    icon: '📱',
    iconColor: 'stone',
    title: 'Home Screen Widget',
    description: "Quick access to friends who need a check-in. Never miss an opportunity to reach out with the iOS widget."
  },
  {
    icon: '🎨',
    iconColor: 'rose',
    title: 'Warm Avatars',
    description: "10 artistic avatar styles — from Thread to Bloom to Spark — each in 4 color options. Give every friend a unique, warm identity."
  },
  {
    icon: '🏷️',
    iconColor: 'stone',
    title: 'Relationship Types',
    description: "Categorize connections as Close Friend, Family, Work Colleague, and more. Multi-select labels that help you understand your social world."
  },
  {
    icon: '🎯',
    iconColor: 'amber',
    title: '42 Curated Activities',
    description: "Log hangouts from 42 curated activities across 5 categories — or create your own. From coffee dates to concerts, every moment counts."
  },
  {
    icon: '🎂',
    iconColor: 'emerald',
    title: 'Birthday Reminders',
    description: "Never forget an important date. Get reminded the day before so you have time to prepare something meaningful."
  },
  {
    icon: '📊',
    iconColor: 'amber',
    title: 'Connection Strength',
    description: "Track each friendship with a 0-100 strength score. Visual status indicators show who's thriving and who needs attention."
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
          className={styles.heroFeature}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.heroFeatureContent}>
            <div className={styles.heroFeatureBadge}>New in v1.1</div>
            <h3>AI Message Suggestions</h3>
            <p>Not sure what to say? Wovyn uses AI to craft personalized message suggestions based on your friendship history. Choose from three styles — a casual check-in, a deeper question, or an activity invite — then edit and send in your own voice.</p>
            <ul className={styles.heroFeatureDetails}>
              <li>Powered by Google Gemini</li>
              <li>Three suggestion styles to match the moment</li>
              <li>Always edit before sending — your voice, amplified</li>
              <li>Privacy-first: explicit consent required, disable anytime</li>
            </ul>
          </div>
          <div className={styles.heroFeatureVisual}>
            <span className={styles.heroFeatureIcon}>💬✨</span>
          </div>
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
