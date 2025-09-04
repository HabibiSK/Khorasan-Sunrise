'use client'

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        className="object-cover w-full h-full"
        style={{ filter: 'brightness(0.4) contrast(1.2)' }}
      >
        <source src="https://player.vimeo.com/external/370467937.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6ab7a8eba1&profile_id=165" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
    </div>
  )
}

export default VideoBackground
