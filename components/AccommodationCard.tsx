'use client'

import Image from 'next/image'
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react'

export const AccommodationCard = ({ item }: { item: any }) => {
  return (
    <div className="group relative bg-charcoal/50 backdrop-blur-xl border border-snow/10 rounded-3xl overflow-hidden hover:border-sunrise/30 transition-all duration-500 shadow-2xl">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 mask-linear-b"
        />
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-lapis text-snow px-4 py-1 rounded-full text-xs font-bold shadow-lg">
          <MapPin className="w-3 h-3" /> {item.location}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-serif font-bold text-snow mb-4 group-hover:text-sunrise transition-colors">
          {item.name}
        </h3>
        <p className="text-snow/70 mb-8 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        <div className="mb-8 grid grid-cols-2 gap-4">
          {item.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2 text-snow/60 text-sm">
              <CheckCircle className="w-4 h-4 text-sunrise shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <button className="w-full flex items-center justify-center gap-3 bg-snow/5 hover:bg-sunrise text-snow hover:text-charcoal border border-snow/10 hover:border-sunrise font-bold py-4 rounded-2xl transition-all group/btn">
          Inquire About Stay
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
