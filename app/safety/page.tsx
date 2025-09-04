'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Safety() {
  const heroRef = useRef<HTMLElement>(null!)
  const overviewRef = useRef<HTMLElement>(null!)
  const measuresRef = useRef<HTMLElement>(null!)
  const trustRef = useRef<HTMLElement>(null!)
  const ctaRef = useRef<HTMLElement>(null!)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const isOverviewInView = useInView(overviewRef, { once: true, margin: "-100px" })
  const isMeasuresInView = useInView(measuresRef, { once: true, margin: "-100px" })
  const isTrustInView = useInView(trustRef, { once: true, margin: "-100px" })
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const enhancedCardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
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
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
          }}
        >
          {/* Multi-layered Animated Background */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(30, 64, 175, 0.3), transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3), transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(30, 64, 175, 0.3), transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(30, 64, 175, 0.3), transparent 50%)"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Animated Gradient Background */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(45deg, #1e40af, #3b82f6, #1e40af)",
                "linear-gradient(45deg, #3b82f6, #1e40af, #3b82f6)",
                "linear-gradient(45deg, #1e40af, #3b82f6, #1e40af)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 z-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Mouse-following Gradient */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${springX}px ${springY}px, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`,
            }}
          />

          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 z-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Parallax Content */}
          <motion.div
            style={{ y, opacity }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                animate={{
                  background: [
                    "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                    "linear-gradient(45deg, #FFA500, #FFD700, #FFA500)",
                    "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                <motion.h1
                  variants={floatingVariants}
                  animate="animate"
                  style={{
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block"
                  }}
                >
                  Safety & Trust
                </motion.h1>
              </motion.div>
              <motion.p
                variants={itemVariants}
              >
                Your safety is our highest priority. Learn about our comprehensive security measures and trusted protocols that ensure every journey is protected.
              </motion.p>
              <div className="inline-block">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#measures"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg"
                >
                  Explore Our Measures
                </Link>
              </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Safety Overview */}
        <section ref={overviewRef} className="py-20 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOverviewInView ? "visible" : "hidden"}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <div className="text-5xl font-serif font-bold mb-8 text-lapis-800">
                <motion.h2
                  variants={itemVariants}
                >
                  Comprehensive Safety Protocols
                </motion.h2>
                </div>
                <div className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                <motion.p
                  variants={itemVariants}
                >
                  We maintain the highest safety standards with extensive local networks, expert guides, and proven security protocols. Our commitment to safety has enabled us to operate successfully for years with zero major incidents.
                </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Safety Measures */}
        <section id="measures" ref={measuresRef} className="py-20 bg-stone-50 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isMeasuresInView ? "visible" : "hidden"}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-5xl font-serif font-bold text-center mb-16 text-lapis-800">
              <motion.h2
                variants={itemVariants}
              >
                Our Safety Measures
              </motion.h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    iconBg: "bg-emerald-500",
                    title: "Expert Local Guides",
                    desc: "All our guides are experienced professionals with deep knowledge of local conditions and extensive security networks.",
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    iconBg: "bg-lapis-500",
                    title: "24/7 Security Network",
                    desc: "We maintain round-the-clock communication with local authorities and security personnel throughout your journey.",
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )
                  },
                  {
                    iconBg: "bg-ruby-500",
                    title: "Emergency Protocols",
                    desc: "Comprehensive emergency response plans with medical facilities, evacuation procedures, and 24/7 support.",
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )
                  },
                  {
                    iconBg: "bg-gold-500",
                    title: "Route Planning",
                    desc: "All routes are carefully planned and regularly assessed for safety. We avoid high-risk areas and maintain flexibility.",
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    iconBg: "bg-emerald-600",
                    title: "Regular Updates",
                    desc: "We provide regular security updates and maintain open communication with all travelers throughout their journey.",
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    iconBg: "bg-lapis-600",
                    title: "Insurance Coverage",
                    desc: "We recommend comprehensive travel insurance and can assist in arranging coverage that includes emergency evacuation.",
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  }
                ].map((card, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                    <motion.div
                      variants={enhancedCardVariants}
                      whileHover={{
                        scale: 1.05,
                        rotateY: 5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                        z: 50
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{ perspective: "1000px" }}
                    >
                      <div className={`w-20 h-20 ${card.iconBg} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                        <motion.div
                          whileHover={{
                            rotate: [0, -10, 10, 0],
                            scale: 1.1
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {card.icon}
                        </motion.div>
                      </div>
                      <div className="text-2xl font-bold mb-4 text-lapis-800 text-center">
                        <motion.h3
                          whileHover={{ scale: 1.02 }}
                        >
                          {card.title}
                        </motion.h3>
                      </div>
                      <div className="text-stone-600 text-center leading-relaxed">
                        <motion.p
                          whileHover={{ scale: 1.01 }}
                        >
                          {card.desc}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Trust & Transparency */}
        <section ref={trustRef} className="py-20 bg-white relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTrustInView ? "visible" : "hidden"}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="text-5xl font-serif font-bold mb-8 text-lapis-800">
                  <motion.h2
                    variants={itemVariants}
                  >
                    Trust & Transparency
                  </motion.h2>
                  </div>
                  <div className="text-stone-600 text-lg mb-8 leading-relaxed">
                  <motion.p
                    variants={itemVariants}
                  >
                    We believe in complete transparency with our travelers. You'll always know exactly what to expect, and we maintain open communication throughout your journey.
                  </motion.p>
                  </div>
                  <div className="space-y-4 text-stone-600">
                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {[
                        "Clear pricing with no hidden fees",
                        "Detailed itineraries and expectations",
                        "24/7 contact availability",
                        "Flexible cancellation policies"
                      ].map((item, idx) => (
                        <motion.li
                          key={idx}
                          variants={itemVariants}
                          whileHover={{ x: 10 }}
                          className="flex items-start group mb-4"
                        >
                          <div className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0">
                            <motion.svg
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </motion.svg>
                          </div>
                          <span className="group-hover:text-lapis-700 transition-colors duration-300">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                  <div className="w-full flex justify-center">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      filter: "brightness(1.1) contrast(1.1)"
                    }}
                  >
                    <div className="relative">
                    <motion.div
                      whileHover={{ rotateY: 5 }}
                      style={{ perspective: "1000px" }}
                      className="relative"
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Trust and safety"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-lapis-500/20 to-transparent rounded-2xl"
                        whileHover={{ opacity: 0.3 }}
                        initial={{ opacity: 0 }}
                      ></motion.div>
                    </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Contact CTA */}
        <section ref={ctaRef} className="py-20 bg-gradient-to-r from-lapis-500 to-lapis-600 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-30, 30, -30],
                  x: [-20, 20, -20],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div className="text-5xl font-serif font-bold mb-8">
              <motion.h2
                variants={itemVariants}
              >
                Have Questions About Safety?
              </motion.h2>
              </div>
              <div className="text-xl mb-12 text-lapis-100 leading-relaxed">
              <motion.p
                variants={itemVariants}
              >
                We're here to address any concerns and provide detailed information about our safety protocols. Contact us for a personal consultation.
              </motion.p>
              </div>
              <div className="inline-block">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 40px rgba(255, 215, 0, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-gold-400 to-gold-500 text-lapis-900 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-block"
                >
                  Contact Our Team
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  )
}
