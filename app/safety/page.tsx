'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Safety() {
  const heroRef = useRef<HTMLElement>(null!)
  const overviewRef = useRef<HTMLElement>(null!)
  const measuresRef = useRef<HTMLElement>(null!)
  const trustRef = useRef<HTMLElement>(null!)
  const ctaRef = useRef<HTMLElement>(null!)

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
      <div style={{ minHeight: '100vh' }}>
        {/* Hero Section */}
        <section
          ref={heroRef}
          style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
        >
          {/* Animated Background */}
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
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Floating Particles */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
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

          {/* Parallax Content */}
          <motion.div style={{ y, opacity, position: 'relative', zIndex: 10, textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem' }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.h1
                variants={floatingVariants}
                animate="animate"
                style={{ fontSize: '4rem', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '1.5rem', background: 'linear-gradient(to right, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                Safety & Trust
              </motion.h1>
              <motion.p variants={itemVariants} style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
                Your safety is our highest priority. Learn about our comprehensive security measures and trusted protocols that ensure every journey is protected.
              </motion.p>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#measures"
                  style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '2rem 2rem', borderRadius: '9999px', fontWeight: '600', transition: 'all 0.3s', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}
                >
                  Explore Our Measures
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Overview Section */}
        <section ref={overviewRef} style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'linear-gradient(to bottom right, #f0f9ff, #1e3a8a)' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOverviewInView ? "visible" : "hidden"}
            style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <motion.h2 variants={itemVariants} style={{ fontSize: '2.5rem', fontFamily: 'serif', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1.5rem' }}>
                Comprehensive Safety Overview
              </motion.h2>
              <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: '#575757', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
                From the moment you book until you return home, we implement multiple layers of protection to ensure your peace of mind.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Guides",
                  desc: "Certified local guides with extensive knowledge and safety training.",
                  iconBg: "bg-emerald-100",
                  icon: (
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                },
                {
                  title: "Emergency Response",
                  desc: "24/7 emergency support with medical evacuation capabilities.",
                  iconBg: "bg-red-100",
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  )
                },
                {
                  title: "Health Protocols",
                  desc: "Strict health and hygiene standards throughout your journey.",
                  iconBg: "bg-blue-100",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}
                >
                  <div className={`w-16 h-16 ${card.iconBg} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-lapis-800 text-center">
                    {card.title}
                  </h3>
                  <p className="text-stone-600 text-center">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Safety Measures Section */}
        <section ref={measuresRef} className="py-20 bg-white">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isMeasuresInView ? "visible" : "hidden"}
            style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '2rem', paddingRight: '2rem' }}
          >
            <div className="text-center mb-16">
              <motion.h2 variants={itemVariants} style={{ fontSize: '3rem', fontFamily: 'serif', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1.5rem' }}>
                Our Safety Measures
              </motion.h2>
              <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: '#575757', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
                Detailed protocols and procedures designed to protect you at every step of your journey.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Pre-Trip Preparation",
                  measures: [
                    "Health screening and vaccination verification",
                    "Personalized risk assessment",
                    "Emergency contact setup",
                    "Travel insurance coordination"
                  ]
                },
                {
                  title: "During Your Journey",
                  measures: [
                    "Regular safety briefings",
                    "GPS tracking and communication",
                    "Medical kit availability",
                    "Flexible itinerary adjustments"
                  ]
                }
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  style={{ backgroundColor: 'rgba(30, 64, 175, 0.1)', padding: '2rem', borderRadius: '0.75rem' }}
                >
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e3a8a' }}>
                    {section.title}
                  </h3>
                  <ul style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                    {section.measures.map((measure, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <svg style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.75rem', marginTop: '0.125rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span style={{ color: '#374151' }}>{measure}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Trust & Transparency Section */}
        <section ref={trustRef} style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'linear-gradient(to right, #1e40af, #1e3a8a)', color: 'white' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTrustInView ? "visible" : "hidden"}
            style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 variants={itemVariants} style={{ fontSize: '3rem', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '2rem' }}>
                  Trust & Transparency
                </motion.h2>
                <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#dbeafe' }}>
                  We believe in complete transparency with our travelers. You'll always know exactly what to expect, and we maintain open communication throughout your journey.
                </motion.p>
                <motion.ul variants={containerVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "Clear pricing with no hidden fees",
                    "Detailed itineraries and expectations",
                    "24/7 contact availability",
                    "Flexible cancellation policies"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      style={{ display: 'flex', alignItems: 'flex-start' }}
                    >
                      <svg style={{ width: '1.5rem', height: '1.5rem', color: '#fbbf24', marginRight: '1rem', marginTop: '0.25rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div variants={itemVariants}>
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Trust and safety"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact CTA Section */}
        <section ref={ctaRef} className="py-20 bg-gradient-to-r from-gold-400 to-gold-500 text-lapis-900">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            style={{ maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem' }}
          >
              <motion.h2 variants={itemVariants} style={{ fontSize: '3rem', fontFamily: 'serif', fontWeight: 'bold', marginBottom: '2rem' }}>
                Have Questions About Safety?
              </motion.h2>
            <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
              We're here to address any concerns and provide detailed information about our safety protocols. Contact us for a personal consultation.
            </motion.p>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-lapis-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  )
}
