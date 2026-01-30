import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import styles from './Footer.module.css'

function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Link to="/" className={styles.logo}>
              <img src="/assets/app-icon.jpg" alt="Wovyn" className={styles.logoIcon} />
              Wovyn.
            </Link>
            <p>A personal relationship manager for people who care about depth over breadth.</p>
          </div>
          <div className={styles.footerLinks}>
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#download">Download</a></li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hello@wovyn.app">Contact</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>Copyright &copy; 2026 Bhaumik Uttam Jain</p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </Container>
    </motion.footer>
  )
}

export default Footer
