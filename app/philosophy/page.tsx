import Image from 'next/image'

export default function Philosophy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Afghanistan landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gold-400">
            Our Philosophy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Social impact, cultural preservation, and authentic experiences.
          </p>
        </div>
      </section>

      {/* Philosophy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-lapis-800">
                Our Commitment
              </h2>
              <p className="text-stone-600 text-lg mb-6">
                We believe tourism should benefit local communities and preserve cultural heritage. Our tours and accommodations are designed to empower Afghan women, support artisans, and promote sustainable development.
              </p>
              <p className="text-stone-600 text-lg">
                By choosing Khorasan, you contribute directly to social projects and help maintain Afghanistan's rich traditions for future generations.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Afghan artisans"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Highlights */}
      <section className="py-16 bg-lapis-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-lapis-800">
            Social Impact Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-4 text-emerald-600">85%</div>
              <h3 className="text-2xl font-bold mb-2 text-lapis-800">Local Employment</h3>
              <p className="text-stone-600">
                A significant portion of our revenue goes directly to local guides, artisans, and service providers.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-4 text-emerald-600">12</div>
              <h3 className="text-2xl font-bold mb-2 text-lapis-800">Women's Cooperatives</h3>
              <p className="text-stone-600">
                We support multiple women's artisan groups through direct purchases and tourism revenue.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-4 text-emerald-600">500+</div>
              <h3 className="text-2xl font-bold mb-2 text-lapis-800">Community Members</h3>
              <p className="text-stone-600">
                Our initiatives have positively impacted hundreds of community members across Afghanistan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
