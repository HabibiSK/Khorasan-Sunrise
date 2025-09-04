'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import ParticleSystem from '../components/ParticleSystem'

// 3D Tilt Card Component
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={className}>
        {children}
      </div>
    </motion.div>
  )
}

// Video Background Component
const VideoBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        className="object-cover w-full h-full"
        style={{ filter: 'brightness(0.4) contrast(1.2)' }}
      >
        <source src="https://player.vimeo.com/external/370467937.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6ab7a8eba1&profile_id=165" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
    </div>
  )
}

// Interactive Testimonial Carousel
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "This journey changed my perspective on Afghanistan completely. The hospitality and culture are truly remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marcus Chen",
      location: "Toronto, Canada",
      text: "The attention to detail and authentic experiences exceeded all expectations. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      text: "From the moment we arrived, we felt welcomed as family. This is travel at its most authentic.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              width={60}
              height={60}
              className="rounded-full border-2 border-gold-400"
            />
            <div>
              <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
              <p className="text-stone-300">{testimonials[currentIndex].location}</p>
            </div>
          </div>
          <p className="text-white text-lg leading-relaxed mb-4 italic">
          "{testimonials[currentIndex].text}"
        </p>
        <div className="flex gap-1">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-gold-400 text-xl">★</span>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-gold-400' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Advanced Lighting Effect
const LightingEffect = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  return (
    <motion.div
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none" />
    </motion.div>
  )
}

// Glass Morphism Newsletter Component
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
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-md mx-auto">
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Stay Connected</h3>
        </motion.div>
        {!isSubscribed ? (
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent backdrop-blur-sm mb-4"
              required
            />
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-400 to-gold-500 text-lapis-900 font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Subscribe Now
              </button>
            </motion.div>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <div className="text-center py-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <div className="text-4xl text-green-400 mb-4">✓</div>
              </motion.div>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5 }}>
                <h4 className="text-white font-bold text-lg mb-2">Welcome to Our Community!</h4>
              </motion.div>
              <p className="text-stone-200">Thank you for subscribing</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const heroRef = useRef<HTMLElement>(null!)
  const toursRef = useRef<HTMLElement>(null!)
  const aboutRef = useRef<HTMLElement>(null!)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const { scrollYProgress: toursProgress } = useScroll({
    target: toursRef,
    offset: ["start end", "end start"]
  })

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  })

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-100">
      {/* Hero Section with Advanced Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <VideoBackground />

        {/* Particle System */}
        <ParticleSystem mousePosition={mousePosition} />

        {/* Lighting Effect */}
        <LightingEffect mousePosition={mousePosition} />

        {/* Background Layers */}
        <motion.div
          style={{ y: y1, scale }}
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Afghanistan landscape"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
          </div>
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div
          style={{ y: y3 }}
          animate={{
            rotate: [45, 135, 45],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-emerald-400/20 rounded-lg rotate-45" />
        </motion.div>

        {/* Interactive Mouse Follower */}
        <motion.div
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <div className="absolute w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            {/* Trust Badge */}
            <motion.div variants={itemVariants}>
              <div className="mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-400/20 to-gold-500/20 backdrop-blur-md border border-gold-400/30 px-6 py-3 rounded-full">
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                      <div className="w-2 h-2 bg-gold-400 rounded-full" />
                    </motion.div>
                    <span className="text-gold-300 font-medium">Since 2018 • Trusted by 500+ Travelers</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants}>
              <span className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-none block">
                <motion.div
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    backgroundImage: 'linear-gradient(to right, #FFD700, #FFA500, #FFD700)',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    backgroundPosition: '0% 50%'
                  }}
                >
                  Discover the Soul
                </motion.div>
                <motion.div
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    backgroundImage: 'linear-gradient(to right, #FFD700, #FFA500, #FFD700)',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    backgroundPosition: '0% 50%'
                  }}
                >
                  of Afghanistan
                </motion.div>
              </span>
            </motion.h1>
            {/* CTA Buttons */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <button className="group relative bg-gradient-to-r from-lapis-600 to-lapis-700 text-white font-bold px-10 py-5 rounded-2xl text-lg overflow-hidden">
                    <motion.div initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-lapis-500 to-lapis-600" />
                    </motion.div>
                    <span className="relative z-10">Explore Our Tours</span>
                  </button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.07, boxShadow: "0 0 16px #FFD700" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    className="group border-2 border-white/80 text-white font-semibold px-8 py-5 rounded-2xl text-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                    type="button"
                  >
                    <span className="flex items-center gap-2">
                      <span>▶</span>
                      Watch Our Story
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                {[
                  { number: "10+", label: "Years Experience", color: "gold" },
                  { number: "500+", label: "Happy Travelers", color: "emerald" },
                  { number: "12", label: "Women's Cooperatives", color: "ruby" }
                ].map((stat, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="text-center group cursor-pointer">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 200 }}>
                        <span className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 bg-clip-text text-transparent`}>
                          {stat.number}
                        </span>
                      </motion.div>
                      <div className="text-sm text-stone-300 group-hover:text-white transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tours Section with Advanced Animations */}
      <section
  ref={toursRef}
  className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
  // Framer Motion props removed from section, should be on motion.section if needed
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants}>
            <div className="text-center mb-20">
              <motion.p variants={itemVariants}>
                <span className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed text-stone-200">
                  Authentic cultural immersion durch lokale Gastfreundschaft, echte Begegnungen und unvergessliche Abenteuer im Herzen Afghanistans.
                </span>
              </motion.p>
              <motion.p variants={itemVariants}>
                <span className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                  Carefully crafted journeys that combine cultural immersion, adventure, and meaningful connections with local communities.
                </span>
              </motion.p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 10-Day Tour with 3D Tilt */}
            <TiltCard className="group relative">
              <div className="relative h-80 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Afghanistan mountains"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating Badges */}
                <motion.div variants={floatingVariants} animate="animate">
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-gold-400 to-gold-500 text-lapis-900 px-4 py-2 rounded-2xl font-bold shadow-lg">10 Days</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md text-lapis-800 px-5 py-3 rounded-2xl font-bold shadow-lg">From $2,500</div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl -mt-16 relative z-10">
                  <h3 className="text-3xl font-serif font-bold mb-4 text-lapis-800">
                    Heart of Afghanistan
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Journey through Kabul, Herat, and Mazar-i-Sharif. Experience ancient mosques, local markets, and authentic Afghan hospitality in carefully selected family homes.
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-stone-500 bg-stone-50 px-3 py-2 rounded-full">
                      <svg className="w-4 h-4 mr-2 text-lapis-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0 1 1 0 012 0zm-1 3a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd" />
                      </svg>
                      Small Groups (4-8 people)
                    </div>
                    <div className="flex items-center text-sm text-stone-500 bg-stone-50 px-3 py-2 rounded-full">
                      <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Year-round departures
                    </div>
                  </div>

                  
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        className="w-full bg-gradient-to-r from-lapis-600 to-lapis-700 text-white font-bold py-4 rounded-2xl hover:shadow-lg transition-all duration-300"
                        type="button"
                      >
                        View Detailed Itinerary
                      </button>
                    </motion.div>
                </div>
              </motion.div>
            </TiltCard>

            {/* 14-Day Tour with 3D Tilt */}
            <TiltCard className="group relative">
              <div className="relative h-80 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Afghanistan desert"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <motion.div variants={floatingVariants} animate="animate">
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-4 py-2 rounded-2xl font-bold shadow-lg">14 Days</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md text-lapis-800 px-5 py-3 rounded-2xl font-bold shadow-lg">From $3,800</div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl -mt-16 relative z-10">
                  <h3 className="text-3xl font-serif font-bold mb-4 text-lapis-800">
                    Great Afghanistan Expedition
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    The ultimate journey across Afghanistan's diverse landscapes. From the Hindu Kush mountains to the deserts of the south, experience the full spectrum of Afghan culture and history.
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-stone-500 bg-stone-50 px-3 py-2 rounded-full">
                      <svg className="w-4 h-4 mr-2 text-ruby-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0 1 1 0 012 0zm-1 3a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd" />
                      </svg>
                      Intimate Groups (2-6 people)
                    </div>
                    <div className="flex items-center text-sm text-stone-500 bg-stone-50 px-3 py-2 rounded-full">
                      <svg className="w-4 h-4 mr-2 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Spring & Fall seasons
                    </div>
                  </div>

                  
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-4 rounded-2xl hover:shadow-lg transition-all duration-300"
                        type="button"
                      >
                        View Detailed Itinerary
                      </button>
                    </motion.div>
                </div>
              </motion.div>
            </TiltCard>
          </div>

          <motion.div
            variants={itemVariants}
          >
            <div className="text-center mt-16">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <button
                  className="bg-blue-700 text-white font-bold px-12 py-5 rounded-2xl text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  type="button"
                >
                  View All Tours
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
  <section className="py-24 bg-gradient-to-b from-white to-stone-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-20">
              <motion.div whileHover={{ scale: 1.05 }}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 bg-gradient-to-r from-lapis-800 via-lapis-700 to-lapis-600 bg-clip-text text-transparent">
                  What Our Travelers Say
                </h2>
              </motion.div>
              <motion.p whileHover={{ scale: 1.02 }}>
                <span className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                  Real stories from real travelers who experienced the authentic heart of Afghanistan.
                </span>
              </motion.p>
            </div>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-md mx-auto">
              <motion.div whileHover={{ scale: 1.05 }}>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Stay Connected</h3>
              </motion.div>
              {!isSubscribed ? (
                <form onSubmit={handleSubmit}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent backdrop-blur-sm mb-4"
                    required
                  />
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gold-400 to-gold-500 text-lapis-900 font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Subscribe Now
                    </button>
                  </motion.div>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <div className="text-center py-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="text-4xl text-green-400 mb-4">✓</div>
                    </motion.div>
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5 }}>
                      <h4 className="text-white font-bold text-lg mb-2">Welcome to Our Community!</h4>
                    </motion.div>
                    <p className="text-stone-200">Thank you for subscribing</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
