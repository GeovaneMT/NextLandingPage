import React from 'react'
import { SwitchRoot } from './switch-root'

export function SwitchTheme() {

  return(
    <form className="cursor-pointer">
      <div className="flex items-center">
        <label
          className="text-white text-[15px] leading-none pr-[15px]"
          htmlFor="Theme-Switch"
        ></label>
        <SwitchRoot />
      </div>
    </form>
  )
}