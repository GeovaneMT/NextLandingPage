'use client'

import { RevealList } from  'next-reveal'
import { SwiperSlider } from '@/components/swiper/swiper'
import Image from 'next/image'

export function HomeContent() {

  return (
    <RevealList 
      delay={300} 
      scale={0.9} 
      interval={300} 
      origin='bottom' 
      easing='ease-out' 
      distance='1rem' 
      reset={true}
      className={'h-full'}
    >
      <div className='flex flex-col gap-8 h-full '>
        <div className=' h-full'>
          <SwiperSlider 
            content1={
              <div className='flex h-full justify-center align-center'>
                <Image className='object-contain' src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </div>
            }
            content2={
              <div className='flex h-full justify-center align-center'>
                <Image className='object-contain' src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </div>
            }
            content3={
              <div className='flex h-full justify-center align-center'>
                <Image className='object-contain' src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </div>
            }
          />
        </div>
        <div className='h-full'>
          <SwiperSlider 
            content1={
              <div className='flex h-full justify-center align-center'>
                <Image className='object-contain' src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </div>
            }
            content2={
              <div className='flex h-full justify-center align-center'>
                <Image className='object-contain' src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </div>
            }
            content3={
              <div className='flex h-full justify-center align-center'>
                <Image className='object-contain' src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </div>
            }
          />
        </div>
      </div>
    </RevealList>
  )
}
