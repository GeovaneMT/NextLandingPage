import React from 'react'
import * as Switch from '@radix-ui/react-switch'

interface SwitchModeProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export const SwitchMode: React.FC<SwitchModeProps> = ({
  onCheckedChange,
  checked,
}) => (
  <form className="cursor-pointer">
    <div className="flex items-center">
      <label
        className="text-white text-[15px] leading-none pr-[15px]"
        htmlFor="Theme-Switch"
      ></label>
      <Switch.Root
        onCheckedChange={onCheckedChange}
        checked={checked}
        className="w-[42px] h-[25px] rounded-full relative shadow-[0_2px_10px] shadow-blackA-blackA4 highlighted:shadow-blackA-blackA7 dark:shadow-grayDark-gray1 dark:highlighted:shadow-grayDark-gray4 data-[state=checked]:bg-orange-orange9 data-[state=unchecked]:bg-gray-gray10 outline-none cursor-default"
        id="Theme-Switch"
        style={
          {
            '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
          } as React.CSSProperties
        } // Type assertion
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full cursor-pointer  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
)
