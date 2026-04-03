'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export default function SharedBackground() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bg-glow", {
        x: '20%',
        y: '20%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="bg-glow fixed top-[-20%] left-[-20%] w-[60%] h-[60%] bg-lapis/20 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="bg-glow fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sunrise/10 blur-[150px] rounded-full pointer-events-none z-0" />
    </>
  )
}
