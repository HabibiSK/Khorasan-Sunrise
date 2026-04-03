'use client'

import { ReactNode } from 'react'

export default function MobileCarousel({ children }: { children: ReactNode }) {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-8 md:grid md:grid-cols-2 md:overflow-visible md:snap-none md:px-0 lg:grid-cols-3 xl:grid-cols-3 scrollbar-hide">
      {children}
    </div>
  )
}
