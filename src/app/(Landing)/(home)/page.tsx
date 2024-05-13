import { Metadata } from 'next'
import { RevealListWrapper } from '@/components/RevealList'
import { ParallaxText } from '@/components/ParallaxText'
import { Slider } from '@/components/Slider/slider'
import { AccordionComponent } from '@/components/accordion'

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
        <div className='relative h-[80vh]'>
          <div className='flex flex-col justify-center w-full h-full pattern-dots pattern-black pattern-bg-transparent pattern-opacity-10 pattern-size-1'>
            <div className="">
              <ParallaxText baseVelocity={-5}>Brands Not Scars</ParallaxText>
              <ParallaxText baseVelocity={5}>Brands Not Scars</ParallaxText>
            </div>
          </div>
          <span className='absolute inset-0 flex flex-col justify-around items-center p-8'>
            <h1 className='text-4xl font-bold uppercase w-full text-center'>
              <span className='text-black dark:text-white'>
                Soluções para sua empresa.
              </span>
                <p> Para marcas, produtos e ideias.</p>
            </h1>
            <p className='opacity-0'></p>
            <AccordionComponent />
          </span>
        </div>
        <div className="overflow-hidden">
          <Slider />
        </div>
      </div>
    </RevealListWrapper>
  )
}
