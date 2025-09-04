import Image from 'next/image'

export default function Accommodations() {
  const accommodations = [
    {
      name: "Kabul House",
      location: "Heart of Kabul",
      description: "A beautifully restored traditional Afghan home in the heart of Kabul. Experience authentic Afghan hospitality in a historic setting.",
      features: ["Traditional architecture", "Garden courtyard", "Local cuisine", "Cultural immersion"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Herat House",
      location: "Ancient City of Herat",
      description: "Located in the historic district of Herat, this accommodation offers stunning views of the city's famous Friday Mosque.",
      features: ["Historic architecture", "Mosque views", "Artisan workshops", "Cultural tours"],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Mazar-i-Sharif House",
      location: "Northern Gateway",
      description: "A comfortable home in Mazar-i-Sharif, close to the stunning Blue Mosque and offering insights into northern Afghan culture.",
      features: ["Blue Mosque proximity", "Northern cuisine", "Cultural exchanges", "Market access"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Bamiyan House",
      location: "Valley of Buddhas",
      description: "Nestled in the Bamiyan Valley, this accommodation provides access to the famous Buddha statues and stunning mountain landscapes.",
      features: ["Mountain views", "Buddha site access", "Hiking trails", "Valley exploration"],
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Panjshir House",
      location: "Mountain Paradise",
      description: "Located in the scenic Panjshir Valley, this accommodation offers breathtaking mountain views and access to hiking and cultural experiences.",
      features: ["Mountain scenery", "Hiking opportunities", "Valley culture", "Fresh air"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Afghan home"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gold-400">
            Basecamp for Explorers
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Authentic Afghan homes that become your home away from home.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-6 text-lapis-800">
              More Than Just a Place to Stay
            </h2>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto">
              Our accommodations are carefully selected homes that serve as meeting points for travelers seeking authentic experiences. Each location offers unique insights into Afghan culture, cuisine, and daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="card">
                <div className="relative h-64">
                  <Image
                    src={accommodation.image}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold mb-2 text-lapis-800">
                    {accommodation.name}
                  </h3>
                  <p className="text-lapis-600 font-semibold mb-4">{accommodation.location}</p>
                  <p className="text-stone-600 mb-6 text-lg">{accommodation.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold text-lapis-800 mb-3">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {accommodation.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-stone-600">
                          <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="btn-primary w-full">
                    Inquire About Stay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-lapis-800">
                Authentic Cultural Immersion
              </h2>
              <p className="text-stone-600 text-lg mb-6">
                Staying in local homes allows you to experience Afghan culture from the inside. Share meals with families, learn traditional crafts, and gain insights into daily life that no hotel can provide.
              </p>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Traditional Afghan meals prepared by local families</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Opportunities to learn traditional crafts and skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Direct support for local communities and women's empowerment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Personal connections that last beyond your trip</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Afghan family hospitality"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-lapis-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Experience Authentic Afghan Hospitality?
          </h2>
          <p className="text-xl mb-8 text-lapis-100">
            Contact us to learn more about our accommodation options and how they can enhance your Afghan adventure.
          </p>
          <button className="bg-gold-400 hover:bg-gold-500 text-lapis-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}
