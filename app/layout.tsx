import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SmoothScroll from '../components/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khorasan Sunrise - The Soul of Afghanistan',
  description: 'Authentic journeys through the land of the sunrise. Discover the beauty and culture of Afghanistan with Khorasan-Sunrise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.className} bg-charcoal text-snow`}>
        <SmoothScroll>
          <Navbar />
          <main className="pt-0 overflow-hidden">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
