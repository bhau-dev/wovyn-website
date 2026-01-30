import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import MobileMenu from '../ui/MobileMenu'
import styles from './Header.module.css'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <div className={styles.headerInner}>
            <Link to="/" className={styles.logo}>
              <img src="/assets/app-icon.jpg" alt="Wovyn" className={styles.logoIcon} />
              Wovyn.
            </Link>
            {isHomePage ? (
              <>
                <nav className={styles.nav}>
                  <ul className={styles.navLinks}>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#privacy">Privacy</a></li>
                  </ul>
                </nav>
                <Button href="#download" className={styles.ctaButton}>
                  Download
                </Button>
                <button
                  className={styles.menuButton}
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                </button>
              </>
            ) : (
              <Link to="/" className={styles.backLink}>
                Back to Home
              </Link>
            )}
          </div>
        </Container>
      </motion.header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

export default Header
