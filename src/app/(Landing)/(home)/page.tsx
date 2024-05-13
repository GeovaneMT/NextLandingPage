import { Metadata } from 'next'
import { RevealListWrapper } from '@/components/RevealList'
import { ParallaxText } from '@/components/ParallaxText'
import { Slider } from '@/components/Slider/slider'
import { TabsJobs } from '@/components/tabs'

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
        <div className='relative h-[calc(80vh-4rem)]'>
          <div className='flex flex-col justify-center w-full h-full pattern-dots pattern-grayDark-gray10 dark:pattern-gray-gray10 pattern-bg-transparent pattern-opacity-20 pattern-size-2'>
              <ParallaxText baseVelocity={-5}>Brands Not Scars</ParallaxText>
              <ParallaxText baseVelocity={5}>Brands Not Scars</ParallaxText>
          </div>
          <span className='absolute inset-0 flex flex-col justify-around items-center p-8'>
            <h1 className='md:text-4xl font-bold uppercase w-full text-center'>
              <span className='text-black dark:text-white'>
                Soluções para sua empresa.
              </span>
                <p> Para marcas, produtos e ideias.</p>
            </h1>
            <p className='opacity-0'></p>
            <p className='opacity-0'></p>
          </span>
        </div>
        <div className='-mt-48 z-10 w-full p-8'>
          <TabsJobs 
            title1='Branding' 
            title2='Design' 
            title3='teste' 
            content1='Com estratégias de design, marketing e comunicação nós construímos marcas, produtos e idéias que sobrevivem além dos seus criadores, se tornando inesquecíveis e ocupando um lugar no coração das pessoas.' 
            content2='Oferecemos soluções de design para empresas e produtos. Vamos além da bela embalagem,pensamos em toda a experiência do consumidor.' 
            content3='Com estratégias de design, marketing e comunicação nós construímos marcas, produtos e idéias que sobrevivem além dos seus criadores, se tornando inesquecíveis e ocupando um lugar no coração das pessoas.'
          />
        </div>

      </div>
    </RevealListWrapper>
  )
}
