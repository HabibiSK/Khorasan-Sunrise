'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(16px)',
        borderRadius: '24px',
        padding: '32px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <motion.h3
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: '16px',
        }}
        whileHover={{ scale: 1.05 }}
      >
        Stay Connected
      </motion.h3>
      <motion.p
        style={{
          color: '#D1D5DB',
          marginBottom: '24px',
          textAlign: 'center',
        }}
        whileHover={{ scale: 1.02 }}
      >
        Get exclusive updates on new tours and cultural insights
      </motion.p>

      {!isSubscribed ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <motion.div whileFocus={{ scale: 1.02 }}>
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                color: 'white',
                fontSize: '16px',
                outline: 'none',
              }}
              required
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(to right, #FFD700, #FFD700)',
                color: '#1A1A1A',
                fontWeight: 'bold',
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Subscribe Now
            </button>
          </motion.div>
        </form>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            textAlign: 'center',
            padding: '32px 0',
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: '48px',
              color: '#10B981',
              marginBottom: '16px',
            }}
          >
            ✓
          </motion.div>
          <motion.h4
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '8px',
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Our Community!
          </motion.h4>
          <p style={{ color: '#D1D5DB' }}>Thank you for subscribing</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default NewsletterSignup
