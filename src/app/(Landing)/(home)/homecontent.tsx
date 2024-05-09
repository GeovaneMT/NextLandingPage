'use client'

import Image from 'next/image'
import { RevealList } from  'next-reveal'
import { Button } from '@/components/button'


export function HomeContent() {

  return (
    <RevealList delay={300} scale={0.9} interval={300} origin='bottom' easing='ease-out' distance='1rem' reset={true}>
    <div className='h-[50vh]'>
      <Button variant="ghost" title="Home" />
      <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
      <p>Aqui vai o conteudo</p>
    </div>
    <div className='h-[50vh]'>
      <Button variant="ghost" title="Home" />
      <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
      <p>Aqui vai o conteudo</p>
    </div>
    <div className='h-[50vh]'>
      <Button variant="ghost" title="Home" />
      <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
      <p>Aqui vai o conteudo</p>
    </div>
    <div className='h-[50vh]'>
      <Button variant="ghost" title="Home" />
      <Image src="/Gray-Logo.png" alt={''} width={300} height={300}/>
      <p>Aqui vai o conteudo</p>
    </div>
  </RevealList>
  )
}
