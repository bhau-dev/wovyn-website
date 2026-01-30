import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../ui/Container'
import styles from './AppFlowShowcase.module.css'

const phones = [
  { src: '/assets/Import - Contact Selection.png', alt: 'Select contacts', label: 'Select Contacts' },
  { src: '/assets/Import - How You Met.png', alt: 'How you met', label: 'Add Context' },
  { src: '/assets/Import - Inner Circle Selection.png', alt: 'Your inner circle', label: 'Inner Circle' },
  { src: '/assets/8. Import - Rhythm.png', alt: 'Set your rhythm', label: 'Set Rhythm' },
  { src: '/assets/Import - Success.png', alt: 'Welcome to your Tapestry', label: 'Start Weaving' }
]

function AppFlowShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(2) // Center phone by default

  const handlePhoneClick = (index) => {
    setSelectedIndex(index)
  }

  return (
    <section className={styles.appFlow} id="app-flow">
      <Container>
        <motion.div
          className={styles.appFlowHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className={`label ${styles.label}`}>Onboarding</p>
          <h2>Add friends in seconds.<br />Remember them forever.</h2>
          <p>Import contacts, set your rhythm, and let Wovyn handle the rest.</p>
        </motion.div>
      </Container>

      <motion.div
        className={styles.flowShowcase}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.flowPhones}>
          {phones.map((phone, index) => {
            const isHovered = hoveredIndex === index
            const isSelected = selectedIndex === index
            const isActive = isHovered || (hoveredIndex === null && isSelected)
            const hasHover = hoveredIndex !== null

            // Calculate position offset from center
            const centerIndex = 2
            const offset = index - centerIndex
            const baseX = offset * 180

            return (
              <motion.div
                key={index}
                className={styles.flowPhone}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handlePhoneClick(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                animate={{
                  x: baseX,
                  scale: isActive ? 1.15 : hasHover ? 0.85 : 1,
                  y: isActive ? -30 : 0,
                  rotateY: isActive ? 0 : offset * 5,
                  zIndex: isActive ? 20 : 10 - Math.abs(offset),
                  opacity: hasHover && !isHovered ? 0.4 : 1,
                  filter: hasHover && !isHovered ? 'brightness(0.6) blur(1px)' : 'brightness(1) blur(0px)',
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
              >
                <motion.div
                  className={styles.phoneInner}
                  animate={{
                    boxShadow: isActive
                      ? '0 50px 100px rgba(0, 0, 0, 0.8), 0 0 60px rgba(217, 119, 6, 0.3)'
                      : '0 25px 60px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <img src={phone.src} alt={phone.alt} loading="lazy" />
                </motion.div>

                {/* Label that appears on hover */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className={styles.phoneLabel}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>{phone.label}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Glow effect */}
                <motion.div
                  className={styles.phoneGlow}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Step indicators */}
        <div className={styles.stepIndicators}>
          {phones.map((_, index) => (
            <motion.button
              key={index}
              className={styles.stepDot}
              onClick={() => setSelectedIndex(index)}
              animate={{
                scale: selectedIndex === index ? 1.3 : 1,
                backgroundColor: selectedIndex === index ? '#D97706' : 'rgba(255, 255, 255, 0.3)',
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>

      <Container>
        <motion.p
          className={styles.flowCaption}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Select friends · Personalize each connection · Start nurturing relationships
        </motion.p>
      </Container>
    </section>
  )
}

export default AppFlowShowcase
