import { useState, useRef, useEffect, useCallback } from 'react'
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

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])
  return isMobile
}

function AppFlowShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(2) // Center phone by default
  const touchStartX = useRef(null)
  const isMobile = useIsMobile()

  const handlePhoneClick = (index) => {
    setSelectedIndex(index)
  }

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const SWIPE_THRESHOLD = 50
    if (deltaX < -SWIPE_THRESHOLD) {
      setSelectedIndex((prev) => Math.min(prev + 1, phones.length - 1))
    } else if (deltaX > SWIPE_THRESHOLD) {
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    }
    touchStartX.current = null
  }, [])

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
        <div
          className={styles.flowPhones}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {phones.map((phone, index) => {
            const isHovered = hoveredIndex === index
            const isSelected = selectedIndex === index
            const isActive = isMobile
              ? isSelected
              : isHovered || (hoveredIndex === null && isSelected)
            const hasHover = hoveredIndex !== null

            // Calculate position offset — on mobile, offset from selected phone
            const centerIndex = isMobile ? selectedIndex : 2
            const offset = index - centerIndex
            const baseX = isMobile ? offset * 260 : offset * 180

            // On mobile, fully hide non-active phones
            const mobileOpacity = isMobile
              ? (isSelected ? 1 : 0)
              : (hasHover && !isHovered ? 0.4 : 1)

            return (
              <motion.div
                key={index}
                className={styles.flowPhone}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => handlePhoneClick(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                animate={{
                  x: baseX,
                  scale: isActive ? (isMobile ? 1.05 : 1.15) : hasHover ? 0.85 : 1,
                  y: isActive ? (isMobile ? -10 : -30) : 0,
                  rotateY: isMobile ? 0 : (isActive ? 0 : offset * 5),
                  zIndex: isActive ? 20 : 10 - Math.abs(offset),
                  opacity: mobileOpacity,
                  filter: hasHover && !isHovered && !isMobile ? 'brightness(0.6) blur(1px)' : 'brightness(1) blur(0px)',
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

        {isMobile && (
          <p className={styles.swipeHint}>Swipe to explore</p>
        )}
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
