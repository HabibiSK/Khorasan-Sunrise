'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Star, MapPin, Clock, Gauge, ArrowRight } from 'lucide-react'

export const TourCard = ({ tour }: { tour: any }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="group relative bg-charcoal/50 backdrop-blur-xl border border-snow/10 rounded-3xl overflow-hidden hover:border-sunrise/30 transition-all duration-500 shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 mask-linear-b"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 bg-charcoal/40 backdrop-blur-md rounded-full border border-snow/20 hover:bg-sunrise/20 transition-all group/heart"
        >
          <Heart className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-snow'}`} />
        </button>
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-sunrise/90 text-charcoal px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          <Star className="w-3 h-3 fill-charcoal" /> {tour.rating}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 text-sunrise mb-4 text-sm font-medium">
          <MapPin className="w-4 h-4" /> {tour.location}
        </div>
        <h3 className="text-2xl font-serif font-bold text-snow mb-4 group-hover:text-sunrise transition-colors">
          {tour.title}
        </h3>
        <p className="text-snow/70 mb-8 leading-relaxed line-clamp-3">
          {tour.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center p-3 bg-snow/5 rounded-2xl border border-snow/10 group-hover:border-sunrise/20 transition-all">
            <Clock className="w-5 h-5 text-sunrise mb-2" />
            <span className="text-[10px] text-snow/50 uppercase tracking-widest mb-1">Duration</span>
            <span className="text-xs font-bold text-snow">{tour.duration}</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-snow/5 rounded-2xl border border-snow/10 group-hover:border-sunrise/20 transition-all">
            <Gauge className="w-5 h-5 text-sunrise mb-2" />
            <span className="text-[10px] text-snow/50 uppercase tracking-widest mb-1">Level</span>
            <span className="text-xs font-bold text-snow">{tour.difficulty}</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-snow/5 rounded-2xl border border-snow/10 group-hover:border-sunrise/20 transition-all">
            <MapPin className="w-5 h-5 text-sunrise mb-2" />
            <span className="text-[10px] text-snow/50 uppercase tracking-widest mb-1">Distance</span>
            <span className="text-xs font-bold text-snow">{tour.distance}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-snow">
            <span className="text-sunrise text-sm font-normal">from</span> ${tour.price}
          </div>
          <button className="flex items-center gap-2 bg-sunrise hover:bg-sunrise-light text-charcoal font-bold px-6 py-3 rounded-2xl transition-all shadow-lg hover:shadow-sunrise/30 group/btn">
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}
