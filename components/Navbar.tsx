'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 opacity-100 text-white overflow-hidden"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: scrolled ? -100 : 0, opacity: scrolled ? 0 : 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/Teppich%20leiste.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          filter: 'blur(1px)'
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {[
                { href: '/', label: 'Khorasan', isLogo: true },
                { href: '/', label: 'Home' },
                { href: '/tours', label: 'Tours' },
                { href: '/accommodations', label: 'Accommodations' },
                { href: '/about', label: 'About' },
                { href: '/philosophy', label: 'Philosophy' },
                { href: '/safety', label: 'Safety' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label, isLogo }) => (
                <Link key={href} href={href} className="relative group">
                  {isLogo ? (
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: [0, 6, -6, 0] }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <span className="text-2xl font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent" style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}>
                        {label}
                      </span>
                    </motion.div>
                  ) : (
                    <>
                      <span
                        className={`transition-colors duration-300 ${pathname === href ? 'text-gold-400 font-bold' : 'hover:text-gold-400'}`}
                        style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
                      >
                        {label}
                      </span>
                      <motion.div
                        layoutId="underline"
                        initial={false}
                        animate={pathname === href ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 bottom-[-0.25rem] w-full h-[2px] bg-gradient-to-r from-gold-400 to-gold-500"
                      />
                    </>
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex">
              <button className="btn-primary" style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}>Book Your Adventure</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.div
                initial={false}
                animate={isOpen ? { rotate: 90, scale: 1.2 } : { rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-gold-400 focus:outline-none"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.g
                          key="close"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" stroke="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
                          <motion.line x1="6" y1="18" x2="18" y2="6" strokeWidth="2" stroke="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
                        </motion.g>
                      ) : (
                        <motion.g
                          key="menu"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" stroke="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
                          <motion.line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" stroke="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
                          <motion.line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" stroke="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
                        </motion.g>
                      )}
                    </AnimatePresence>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-white/15 backdrop-blur-xl rounded-xl"
              >
                <nav className="px-2 pt-2 pb-4 space-y-1">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
                      }
                    }}
                  >
                    {[
                      { href: '/', label: 'Khorasan', isLogo: true },
                      { href: '/', label: 'Home' },
                      { href: '/tours', label: 'Tours' },
                      { href: '/accommodations', label: 'Accommodations' },
                      { href: '/about', label: 'About' },
                      { href: '/philosophy', label: 'Philosophy' },
                      { href: '/safety', label: 'Safety' },
                      { href: '/contact', label: 'Contact' },
                    ].map(({ href, label, isLogo }) => (
                      <motion.div
                        key={href}
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <Link
                          href={href}
                          className={`block px-3 py-2 rounded-lg transition-colors duration-300 relative ${pathname === href ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-lapis-900 font-bold' : 'hover:text-gold-400'}`}
                        >
                          {isLogo ? (
                            <span className="text-2xl font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent" style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}>
                              {label}
                            </span>
                          ) : (
                            <>
                              {label}
                              <motion.div
                                layoutId="mobile-underline"
                                initial={false}
                                animate={pathname === href ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute left-0 bottom-[-0.25rem] w-full h-[2px] bg-gradient-to-r from-gold-400 to-gold-500"
                              />
                            </>
                          )}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                    >
                      <div className="px-3 py-2">
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <button type="button" className="btn-primary w-full">
                            Book Your Adventure
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
