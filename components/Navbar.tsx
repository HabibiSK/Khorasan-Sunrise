'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sunrise } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/tours', label: 'Tours' },
    { href: '/about', label: 'About' },
    { href: '/safety', label: 'Safety' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-charcoal/80 backdrop-blur-xl border-b border-snow/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-sunrise rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-sunrise/20">
             <Sunrise className="w-6 h-6 text-charcoal" />
          </div>
          <span className="text-2xl font-serif font-bold text-snow tracking-tight">
            Khorasan <span className="text-sunrise">Sunrise</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-sunrise ${
                pathname === link.href ? 'text-sunrise' : 'text-snow/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="btn-sunrise py-2 px-6 text-sm">
            Start Trip
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-snow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="absolute top-full left-0 w-full bg-charcoal/95 backdrop-blur-2xl border-b border-snow/5 py-12 px-6 flex flex-col items-center gap-8 md:hidden">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif font-bold text-snow hover:text-sunrise transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button className="btn-sunrise w-full py-4 text-lg">
                Start Trip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
