'use client'

import React, { useEffect } from 'react'

export const SliderClient = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const track = document.getElementById('image-track') as HTMLDivElement

    if (!track) return

    const handleOnDown = (e: MouseEvent | TouchEvent) =>
      (track.dataset.mouseDownAt = String(
        'touches' in e ? e.touches[0].clientX : e.clientX
      ))

    const handleOnUp = () => {
      track.dataset.mouseDownAt = '0'
      track.dataset.prevPercentage = track.dataset.percentage
    }

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      if (track.dataset.mouseDownAt === '0') return

      const clientX =
        'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
      const mouseDelta = parseFloat(track.dataset.mouseDownAt || '0') - clientX,
        maxDelta = window.innerWidth / 2

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage || '0') + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        )

      track.dataset.percentage = nextPercentage.toString()

      track.animate(
        {
          transform: `translate(${nextPercentage}%)`,
        },
        { duration: 1200, fill: 'forwards' }
      )

      const images = Array.from(track.getElementsByClassName('image'))
      images.forEach((image) => {
        // Your code here

        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: 'forwards' }
        )
      })
    }

    window.addEventListener('mousedown', handleOnDown)
    window.addEventListener('touchstart', handleOnDown)
    window.addEventListener('mouseup', handleOnUp)
    window.addEventListener('touchend', handleOnUp)
    window.addEventListener('mousemove', handleOnMove)
    window.addEventListener('touchmove', handleOnMove)

    return () => {
      window.removeEventListener('mousedown', handleOnDown)
      window.removeEventListener('touchstart', handleOnDown)
      window.removeEventListener('mouseup', handleOnUp)
      window.removeEventListener('touchend', handleOnUp)
      window.removeEventListener('mousemove', handleOnMove)
      window.removeEventListener('touchmove', handleOnMove)
    }
  }, [])

  return <div>{children}</div>
}
