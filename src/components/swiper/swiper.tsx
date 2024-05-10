'use client'

import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

interface ContentProps {
  children: React.ReactNode;
}
export function SwiperSlider({ contents }: { contents: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth <= 992
      isMobileDevice && setIsMobile(true)
    }

    checkIsMobile()
  }, [])

  return (
    <Swiper 
      className='mySwiper w-full h-full' 
      slidesPerView={'auto'}
      spaceBetween={30}
      cssMode={true}
      navigation={!isMobile}
      pagination={false}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      <SwiperSlide className='bg-orange-500'>
        {contents}          
      </SwiperSlide>
    </Swiper>
  )
}
