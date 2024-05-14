'use client'

import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'

export const TypeWriter = ({text}: {text: string}) => {
  return (
    <>
      <span>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={[text]}
          loop={1}
          cursor
          cursorStyle='.'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </>
  )
}