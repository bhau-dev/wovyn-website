import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Button.module.css'

function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className = '',
  ...props
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`

  const MotionLink = motion(Link)

  if (to) {
    return (
      <MotionLink
        to={to}
        className={buttonClass}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
