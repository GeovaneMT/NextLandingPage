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
export function SwiperSlider({ content1, content2, content3 }: { content1: React.ReactNode, content2: React.ReactNode, content3: React.ReactNode }) {
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
      className='mySwiper h-full' 
      slidesPerView={'auto'}
      spaceBetween={30}
      cssMode={true}
      navigation={!isMobile}
      pagination={false}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      <SwiperSlide className='bg-gray-gray3 dark:bg-grayDark-gray3 rounded-md p-4'>
        {content1}        
      </SwiperSlide>
      <SwiperSlide className='bg-gray-gray3 dark:bg-grayDark-gray3 rounded-md p-4'>
        {content2}        
      </SwiperSlide>
      <SwiperSlide className='bg-gray-gray3 dark:bg-grayDark-gray3 rounded-md p-4'>
        {content3}        
      </SwiperSlide>
    </Swiper>
  )
}
