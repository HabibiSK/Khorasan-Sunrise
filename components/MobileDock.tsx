'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Compass, Map, Shield, Mail, Home } from 'lucide-react'

export default function MobileDock() {
  const pathname = usePathname()

  const items = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/tours', icon: Map, label: 'Tours' },
    { href: '/accommodations', icon: Compass, label: 'Stay' },
    { href: '/safety', icon: Shield, label: 'Safety' },
    { href: '/contact', icon: Mail, label: 'Contact' },
  ]

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
      <div className="bg-charcoal/80 backdrop-blur-2xl border border-snow/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="relative p-3 group">
            <item.icon 
              className={`w-6 h-6 transition-all ${
                pathname === item.href ? 'text-sunrise scale-110' : 'text-snow/50 group-active:scale-90'
              }`} 
            />
            {pathname === item.href && (
              <motion.div 
                layoutId="dock-indicator"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sunrise rounded-full shadow-[0_0_8px_rgba(255,215,0,1)]"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
