import Link from 'next/link'
import { LuSunrise } from 'react-icons/lu'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-snow/5 text-snow">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-sunrise rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-sunrise/20">
                 <LuSunrise className="w-6 h-6 text-charcoal" />
              </div>
              <span className="text-2xl font-serif font-bold text-snow tracking-tight">
                Khorasan <span className="text-sunrise">Sunrise</span>
              </span>
            </Link>
            <p className="text-snow/50 text-lg leading-relaxed max-w-sm mb-12">
              We are dedicated to showing the world the true heart of Afghanistan. Our journeys are built on trust, respect, and the pursuit of authentic connection.
            </p>
            <div className="flex gap-6">
               <a href="#" className="w-12 h-12 rounded-full border border-snow/10 flex items-center justify-center hover:bg-sunrise hover:text-charcoal transition-all hover:-translate-y-1">
                 <FaInstagram className="w-5 h-5" />
               </a>
               <a href="#" className="w-12 h-12 rounded-full border border-snow/10 flex items-center justify-center hover:bg-sunrise hover:text-charcoal transition-all hover:-translate-y-1">
                 <FaFacebook className="w-5 h-5" />
               </a>
               <a href="#" className="w-12 h-12 rounded-full border border-snow/10 flex items-center justify-center hover:bg-sunrise hover:text-charcoal transition-all hover:-translate-y-1">
                 <FaTwitter className="w-5 h-5" />
               </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sunrise font-bold tracking-widest uppercase text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/tours" className="text-snow/70 hover:text-sunrise transition-colors text-lg">Tours</Link></li>
              <li><Link href="/about" className="text-snow/70 hover:text-sunrise transition-colors text-lg">About Us</Link></li>
              <li><Link href="/safety" className="text-snow/70 hover:text-sunrise transition-colors text-lg">Safety & Trust</Link></li>
              <li><Link href="/contact" className="text-snow/70 hover:text-sunrise transition-colors text-lg">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sunrise font-bold tracking-widest uppercase text-xs mb-8">Newsletter</h4>
            <p className="text-snow/50 mb-6">Stay updated with our latest expeditions and stories.</p>
            <form className="relative w-full max-w-sm">
               <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-snow/5 border border-snow/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-sunrise transition-colors"
               />
               <button className="absolute right-2 top-2 bottom-2 bg-sunrise text-charcoal font-bold px-4 rounded-xl hover:bg-sunrise-light transition-colors">
                 Join
               </button>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-snow/5 flex flex-col md:flex-row justify-between items-center gap-8 text-snow/30 text-sm">
          <p>&copy; 2026 Khorasan Sunrise. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-snow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-snow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
