import Image from 'next/image'

export default function HeartOfAfghanistan() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Afghanistan mountains"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gold-400">
            Heart of Afghanistan
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            10 Days of Authentic Cultural Immersion
          </p>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-2xl font-bold">€&nbsp;3,499 per person</p>
            <p className="text-lg">10 days, double occupancy</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-lapis-800">
                Tour Overview
              </h2>
              <p className="text-stone-600 text-lg mb-6">
                Embark on a transformative journey through Afghanistan's cultural heartlands. This 10-day adventure takes you from the bustling streets of Kabul to the ancient wonders of Herat and the spiritual center of Mazar-i-Sharif.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lapis-800">Duration</h4>
                  <p className="text-stone-600">10 Days</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lapis-800">Group Size</h4>
                  <p className="text-stone-600">4-12 People</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lapis-800">Difficulty</h4>
                  <p className="text-stone-600">Moderate</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lapis-800">Accommodation</h4>
                  <p className="text-stone-600">Local Homes</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Afghanistan culture"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-lapis-800">
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-8">
            {[
              { day: 1, title: "Arrival in Kabul", description: "Welcome to Afghanistan! Transfer to your accommodation and settle in with a traditional Afghan dinner." },
              { day: 2, title: "Kabul Exploration", description: "Visit the National Museum, Babur Gardens, and Shah-e Doh Shamshira Mosque. Experience Kabul's rich history." },
              { day: 3, title: "Kabul Culture", description: "Explore the Darul Aman Palace and Kabul City Center. Meet local artisans and learn about Afghan crafts." },
              { day: 4, title: "Flight to Herat", description: "Morning flight to Herat. Visit the Friday Mosque and explore the ancient city's architecture." },
              { day: 5, title: "Herat Heritage", description: "Discover the Mausoleum of Queen Gauhar Shad and the Five-Minaret Complex. Experience Herat's artistic legacy." },
              { day: 6, title: "Drive to Mazar-i-Sharif", description: "Scenic drive through Afghanistan's landscapes to Mazar-i-Sharif, the country's fourth-largest city." },
              { day: 7, title: "Blue Mosque & Shrines", description: "Visit the stunning Blue Mosque and the Shrine of Ali. Explore ancient Balkh, once a center of learning." },
              { day: 8, title: "Return to Kabul", description: "Flight back to Kabul. Free time for shopping and reflection on your journey." },
              { day: 9, title: "Kabul Farewell", description: "Final explorations and cultural experiences in Kabul. Farewell dinner with your guides." },
              { day: 10, title: "Departure", description: "Transfer to the airport for your international flight home." }
            ].map((item) => (
              <div key={item.day} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-lapis-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.day}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2 text-lapis-800">Day {item.day}: {item.title}</h3>
                  <p className="text-stone-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-lapis-800">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-lapis-800">✓ Included</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  9 nights accommodation in local homes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All domestic flights
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All transportation and transfers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Expert English-speaking guide
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All entrance fees
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Meals as specified
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-lapis-800">✗ Not Included</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ruby-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  International flights
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ruby-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Afghan visa
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ruby-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Travel insurance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ruby-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Personal expenses
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ruby-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Optional activities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-lapis-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready for the Adventure of a Lifetime?
          </h2>
          <p className="text-xl mb-8 text-lapis-100">
            Join us on this transformative journey through Afghanistan's heart. Spaces are limited to ensure an authentic experience.
          </p>
          <button className="bg-gold-400 hover:bg-gold-500 text-lapis-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Inquire About This Tour
          </button>
        </div>
      </section>
    </div>
  )
}
