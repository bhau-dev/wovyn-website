import { motion } from 'framer-motion'
import styles from './Features.module.css'

function FeatureCard({ icon, iconColor, title, description }) {
  return (
    <motion.div
      className={styles.featureCard}
      whileHover={{ y: -4, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)' }}
      transition={{ duration: 0.2 }}
    >
      <div className={`${styles.featureIcon} ${styles[iconColor]}`}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

export default FeatureCard
