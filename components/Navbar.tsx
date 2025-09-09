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
        setIsOpen(false) // Close hamburger menu on scroll down
      } else {
        setScrolled(false)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ripple effect handler
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    const rect = button.getBoundingClientRect()
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - rect.left - radius}px`
    circle.style.top = `${event.clientY - rect.top - radius}px`
    circle.classList.add('ripple')

    const ripple = button.getElementsByClassName('ripple')[0]
    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 opacity-100 text-white overflow-hidden"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: scrolled ? -100 : 0, opacity: scrolled ? 0 : 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    >
      <div
        className="absolute inset-0 hidden md:block"
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
              <motion.button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gold-400 focus:outline-none p-2"
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <motion.svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 45 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    variants={{
                      open: { d: "M6 18L18 6" },
                      closed: { d: "M4 6h16" }
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h16"
                    variants={{
                      open: { opacity: 0 },
                      closed: { opacity: 1 }
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    variants={{
                      open: { d: "M6 6L18 18" },
                      closed: { d: "M4 18h16" }
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Mobile Menu */}
                <motion.div
                  initial={{ x: '-100%', opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1.02 }}
                  exit={{ x: '-100%', opacity: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{
                    backgroundImage: "url('/images/Hamburger-menu-img.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                  className="fixed top-0 left-0 h-full w-80 z-50 rounded-r-2xl overflow-hidden"
                >
                  {/* Enhanced Glassmorphism Background */}
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

                  {/* Parallax Background Effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "url('/images/Hamburger-menu-img.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />

                  <nav className="relative px-4 pt-6 pb-6 space-y-0.5 z-10 h-full flex flex-col">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: { staggerChildren: 0.08, delayChildren: 0.2 }
                        }
                      }}
                      className="flex-1"
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
                      ].map(({ href, label, isLogo }, index) => (
                        <motion.div
                          key={href}
                          variants={{
                            hidden: { opacity: 0, x: -50, y: 30, rotateX: -15 },
                            visible: { opacity: 1, x: 0, y: 0, rotateX: 0 }
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 25,
                            delay: index * 0.1
                          }}
                          style={{
                            transformStyle: 'preserve-3d',
                            perspective: '1000px'
                          }}
                        >
                          <Link
                            href={href}
                            className={`block px-8 py-6 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                              pathname === href
                                ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-lapis-900 font-bold shadow-2xl'
                                : 'hover:bg-white/10 hover:text-gold-400'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {/* 3D Shadow Layer */}
                            <motion.div
                              className="absolute inset-0 bg-black/20 rounded-xl"
                              style={{
                                transform: 'translateY(4px) translateX(2px)',
                                filter: 'blur(2px)'
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: (index * 0.1) + 0.2 }}
                            />

                            {/* Main Content */}
                            <motion.div
                              className="relative z-10 overflow-hidden rounded-xl"
                              whileHover={{
                                y: -3,
                                transition: { type: 'spring', stiffness: 400, damping: 25 }
                              }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isLogo ? (
                                <motion.div
                                  className="relative z-10"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <span className="text-3xl font-black text-white" style={{
                                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)',
                                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                                  }}>
                                    {label}
                                  </span>
                                </motion.div>
                              ) : (
                                <motion.div
                                  className="relative z-10 flex items-center justify-between px-2"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <span className="text-xl font-bold" style={{
                                    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6)',
                                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))'
                                  }}>
                                    {label}
                                  </span>
                                  <motion.div
                                    layoutId="mobile-underline"
                                    initial={false}
                                    animate={pathname === href ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute left-0 bottom-[-0.25rem] w-full h-[3px] bg-gradient-to-r from-gold-400 to-gold-500"
                                    style={{
                                      filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.6))'
                                    }}
                                  />
                                </motion.div>
                              )}
                            </motion.div>

                            {/* Enhanced Hover Glow Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-gold-400/30 to-gold-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                              initial={false}
                              whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)'
                              }}
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ delay: 0.6, type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <div className="px-4 py-4">
                        <motion.div
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative overflow-hidden rounded-xl"
                        >
                          <button
                            type="button"
                            className="btn-primary w-full relative z-10 overflow-hidden"
                            onClick={(e) => {
                              createRipple(e);
                              setIsOpen(false);
                            }}
                          >
                            <span className="relative z-10 drop-shadow-lg">Book Your Adventure</span>
                          </button>

                          {/* Button Glow Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-gold-400/30 to-gold-500/30 opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
