import { Metadata } from 'next'
import { RevealListWrapper } from '@/components/RevealList'
import { ParallaxText } from '@/components/ParallaxText'
import { Slider } from '@/components/Slider/slider'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <RevealListWrapper
      delay={300}
      scale={0.9}
      interval={300}
      origin="bottom"
      easing="ease-out"
      distance="1rem"
      reset={true}
      className={''}
    >
      <div className="flex flex-col gap-8">
        <div className="h-[80vh] flex flex-col justify-center">
          <ParallaxText baseVelocity={-5}>Brands Not Scars</ParallaxText>
          <ParallaxText baseVelocity={5}>Brands Not Scars</ParallaxText>
        </div>
        <div className="overflow-hidden">
          <Slider />
        </div>
      </div>
    </RevealListWrapper>
  )
}
