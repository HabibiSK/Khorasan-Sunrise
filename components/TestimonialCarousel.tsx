'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

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
    <div className="relative max-w-4xl w-full mx-auto flex flex-col items-center justify-center">
      <div>
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 w-full" style={{ boxSizing: 'border-box' }}>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              width={60}
              height={60}
              className="rounded-full border-2 border-gold"
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
              <div
                key={i}
                style={{
                  color: '#FFD700',
                  fontSize: '20px',
                }}
              >
                ★
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-gold' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel
