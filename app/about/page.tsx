import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Afghan culture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gold-400">
            About Khorasan
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Rediscovering Afghanistan through authentic experiences and meaningful connections.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-lapis-800">
                Our Story
              </h2>
              <p className="text-stone-600 text-lg mb-6">
                Khorasan was born from a deep love for Afghanistan's rich cultural heritage and a commitment to sharing its authentic beauty with the world. Founded by experienced guides who grew up in Afghanistan's diverse regions, we believe that true understanding comes from genuine human connections.
              </p>
              <p className="text-stone-600 text-lg mb-6">
                Unlike typical tourist experiences, we focus on creating meaningful interactions with local communities. Our approach goes beyond sightseeing – we facilitate cultural exchange, support local artisans, and contribute to community development projects.
              </p>
              <p className="text-stone-600 text-lg">
                Every journey with Khorasan is designed to create lasting memories while respecting and preserving Afghanistan's cultural traditions.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Afghan heritage"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-lapis-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-lapis-800">Authenticity</h3>
              <p className="text-stone-600 text-lg">
                We believe in real cultural immersion, not staged tourist experiences. Every interaction is genuine and meaningful.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-lapis-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-lapis-800">Safety & Trust</h3>
              <p className="text-stone-600 text-lg">
                Your safety is our highest priority. We maintain extensive local networks and follow strict security protocols.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ruby-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-lapis-800">Social Impact</h3>
              <p className="text-stone-600 text-lg">
                We actively support local communities, women's empowerment, and sustainable tourism initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-lapis-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-lapis-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white font-bold">A</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-lapis-800">Ahmad Rahimi</h3>
              <p className="text-lapis-600 font-semibold mb-4">Founder & Lead Guide</p>
              <p className="text-stone-600">
                Born in Kabul, Ahmad has over 15 years of experience guiding travelers through Afghanistan's most beautiful regions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white font-bold">M</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-lapis-800">Mariam Hassan</h3>
              <p className="text-lapis-600 font-semibold mb-4">Cultural Liaison</p>
              <p className="text-stone-600">
                Mariam specializes in connecting travelers with local artisans and women's cooperatives throughout Afghanistan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-ruby-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white font-bold">K</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-lapis-800">Khalid Noori</h3>
              <p className="text-lapis-600 font-semibold mb-4">Logistics Coordinator</p>
              <p className="text-stone-600">
                With extensive knowledge of Afghanistan's transportation networks, Khalid ensures smooth and safe journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-lapis-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Our Social Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-4 text-gold-400">85%</div>
              <h3 className="text-2xl font-bold mb-4">Local Employment</h3>
              <p className="text-lapis-100">
                Of our tour revenue goes directly to local guides, drivers, and service providers.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-4 text-gold-400">12</div>
              <h3 className="text-2xl font-bold mb-4">Women's Cooperatives</h3>
              <p className="text-lapis-100">
                Supported women's artisan groups through direct purchases and tourism revenue.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-4 text-gold-400">500+</div>
              <h3 className="text-2xl font-bold mb-4">Community Members</h3>
              <p className="text-lapis-100">
                Benefited from our tourism initiatives and community development projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6 text-lapis-800">
            Join Us in Rediscovering Afghanistan
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            Experience the real Afghanistan – not through tourist brochures, but through genuine human connections and authentic cultural immersion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Explore Our Tours
            </button>
            <button className="btn-secondary">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
