import Image from 'next/image'
import Link from 'next/link'

export default function Tours() {
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
            Our Tours
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover Afghanistan's hidden treasures with our expert-guided adventures.
          </p>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 10-Day Tour */}
            <div className="card">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Afghanistan mountains"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4 text-lapis-800">
                  Heart of Afghanistan
                </h3>
                <p className="text-stone-600 mb-6 text-lg">
                  10 days of authentic exploration through the cultural heart of Afghanistan. Experience ancient cities, stunning landscapes, and genuine cultural immersion.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-lapis-800 mb-2">Highlights:</h4>
                  <ul className="text-stone-600 space-y-1">
                    <li>• Kabul's historic sites</li>
                    <li>• Herat's ancient architecture</li>
                    <li>• Mazar-i-Sharif's Blue Mosque</li>
                    <li>• Local home stays</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-lapis-800">€3,499</p>
                    <p className="text-stone-600">per person</p>
                  </div>
                  <Link href="/tours/heart-of-afghanistan">
                    <button className="btn-primary">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 14-Day Tour */}
            <div className="card">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Afghanistan desert"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4 text-lapis-800">
                  Great Afghanistan Expedition
                </h3>
                <p className="text-stone-600 mb-6 text-lg">
                  14 days of comprehensive adventure across Afghanistan's diverse landscapes. From mountains to deserts, experience the full spectrum of Afghan beauty.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-lapis-800 mb-2">Highlights:</h4>
                  <ul className="text-stone-600 space-y-1">
                    <li>• Panjshir Valley</li>
                    <li>• Bamiyan Buddhas</li>
                    <li>• Band-e-Amir lakes</li>
                    <li>• Desert landscapes</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-lapis-800">€4,999</p>
                    <p className="text-stone-600">per person</p>
                  </div>
                  <Link href="/tours/great-afghanistan-expedition">
                    <button className="btn-primary">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-lapis-800">
            Why Choose Our Tours?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-lapis-800">Authentic Experiences</h3>
              <p className="text-stone-600 text-lg">
                No tourist traps. Real cultural immersion with local families and communities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-lapis-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-lapis-800">Safety First</h3>
              <p className="text-stone-600 text-lg">
                Expert local guides and comprehensive security protocols ensure your safety.
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
                Your journey directly supports local communities and women's empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
