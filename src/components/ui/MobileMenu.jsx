import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './MobileMenu.module.css'

function MobileMenu({ isOpen, onClose }) {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      }
    }
  }

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  }

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      }
    })
  }

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />
          <motion.nav
            className={styles.menu}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <button className={styles.closeButton} onClick={onClose} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <ul className={styles.links}>
              <motion.li custom={0} variants={linkVariants}>
                <a href="#features" onClick={handleLinkClick}>Features</a>
              </motion.li>
              <motion.li custom={1} variants={linkVariants}>
                <a href="#how-it-works" onClick={handleLinkClick}>How It Works</a>
              </motion.li>
              <motion.li custom={2} variants={linkVariants}>
                <a href="#privacy" onClick={handleLinkClick}>Privacy</a>
              </motion.li>
              <motion.li custom={3} variants={linkVariants}>
                <a href="#download" onClick={handleLinkClick} className={styles.downloadLink}>
                  Download
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
