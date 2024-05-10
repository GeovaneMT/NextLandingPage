'use client'

import { RevealList } from  'next-reveal'
import { SwiperSlider } from '@/components/swiper/swiper'
import Image from 'next/image'
import { Button } from '@/components/button'

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
    >
      <div className='flex flex-col gap-8'>
        <div className='h-[50vh]'>
          <SwiperSlider 
            content1={
              <>
                <Button variant="ghost" title="Home" />
                <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </>
            }
            content2={
              <>
                <Button variant="ghost" title="Home" />
                <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </>
            }
            content3={
              <>
                <Button variant="ghost" title="Home" />
                <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </>
            }
          />
        </div>
        <div className='h-[50vh]'>
          <SwiperSlider 
            content1={
              <>
                <Button variant="ghost" title="Home" />
                <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </>
            }
            content2={
              <>
                <Button variant="ghost" title="Home" />
                <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </>
            }
            content3={
              <>
                <Button variant="ghost" title="Home" />
                <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
              </>
            }
          />
        </div>
      </div>
    </RevealList>
  )
}
