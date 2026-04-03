'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Start Your Trip" 
        subtitle="Ready to embark on your Afghan adventure? Get in touch with us to start planning your curated journey."
        accent="Connect"
      />

      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <span className="text-sunrise font-bold tracking-widest uppercase text-xs mb-4 block">Our Presence</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-snow mb-8">
                In the Heart <br /> of Kabul
              </h2>
              <p className="text-xl text-snow/60 leading-relaxed font-light mb-12 max-w-md">
                We're based in Afghanistan and work with partners worldwide. For the most authentic experience, we recommend contacting us directly.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, text: "Kabul, Afghanistan", accent: "text-sunrise" },
                { icon: Mail, text: "info@khorasan-adventures.com", accent: "text-lapis-light" },
                { icon: Phone, text: "+93 XX XXX XXXX", accent: "text-snow" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-8 bg-charcoal/50 backdrop-blur-xl border border-snow/10 rounded-3xl group hover:border-sunrise/30 transition-all shadow-2xl">
                  <div className={`w-12 h-12 ${item.accent} bg-snow/5 rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xl text-snow/70 group-hover:text-snow transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal/80 backdrop-blur-2xl border border-snow/10 p-12 md:p-16 rounded-[4rem] shadow-2xl">
             <h3 className="text-3xl font-serif font-bold text-snow mb-12">Send Us a Message</h3>
             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-snow/50 text-xs uppercase tracking-widest pl-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-snow/5 border border-snow/10 rounded-2xl px-6 py-4 text-snow focus:outline-none focus:border-sunrise/50 focus:bg-snow/10 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-snow/50 text-xs uppercase tracking-widest pl-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-snow/5 border border-snow/10 rounded-2xl px-6 py-4 text-snow focus:outline-none focus:border-sunrise/50 focus:bg-snow/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-snow/50 text-xs uppercase tracking-widest pl-2">Subject</label>
                  <select 
                    name="subject"
                    required
                    className="w-full bg-snow/5 border border-snow/10 rounded-2xl px-6 py-4 text-snow/60 focus:outline-none focus:border-sunrise/50 focus:bg-snow/10 transition-all appearance-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="tour">Tour Inquiry</option>
                    <option value="basecamp">Basecamp House</option>
                    <option value="custom">Custom Trip</option>
                    <option value="other">General Info</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-snow/50 text-xs uppercase tracking-widest pl-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your interests..."
                    className="w-full bg-snow/5 border border-snow/10 rounded-2xl px-6 py-4 text-snow focus:outline-none focus:border-sunrise/50 focus:bg-snow/10 transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full btn-sunrise flex items-center justify-center gap-3 text-xl py-6"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  )
}
