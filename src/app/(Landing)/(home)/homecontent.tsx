'use client'

import { RevealList } from 'next-reveal'
import { ParallaxText } from '@/components/swiper/swiper'
import { ImageSlider } from '@/components/slider'

export function HomeContent() {
  return (
    <RevealList
      delay={300}
      scale={0.9}
      interval={300}
      origin="bottom"
      easing="ease-out"
      distance="1rem"
      reset={true}
      className={''}
    >
      <ParallaxText baseVelocity={-5}>Brands Not Scars</ParallaxText>
      <ParallaxText baseVelocity={5}>Brands Not Scars</ParallaxText>
      <div className="overflow-hidden">
        <ImageSlider />
      </div>
    </RevealList>
  )
}
