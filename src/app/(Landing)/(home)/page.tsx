import { Metadata } from 'next'
import { TabsInfo } from '@/components/tabs/tabs'
import { ParallaxText } from '@/components/parallax-text'
import { LuBox, LuPalette, LuLightbulb} from "react-icons/lu"
import { TypeWriter } from '@/components/typewriter'
import { EmblaCarousel } from '@/components/Slider/carousel'
import { EmblaOptionsType } from 'embla-carousel'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 8
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="flex flex-col gap-8">
      <div className="relative h-[calc(90vh-4rem)]">
        <div className="flex flex-col justify-center w-full h-full pattern-dots pattern-grayDark-gray10 dark:pattern-gray-gray10 pattern-bg-transparent pattern-opacity-20 pattern-size-2">
          <ParallaxText baseVelocity={-5}>Brands Not Scars</ParallaxText>
          <ParallaxText baseVelocity={5}>Brands Not Scars</ParallaxText>
        </div>
        <div className="absolute inset-0 grid grid-rows-6 justify-center items-center px-8">
          <div className="row-span-2 font-bold uppercase w-full text-center">
            <h1 className="text-black dark:text-white sm:text-3xl md:text-4xl" >
              <TypeWriter text='Soluções para sua empresa' />
            </h1>
            <h2 className='items-center justify-center gap-2 sm:gap-6 md:gap-8 text-xs flex sm:text-xl md:text-2xl' > 
            <p className='flex items-center justify-center gap-1 sm:gap-2'>Para marcas<LuPalette />
            </p>
            <p className='flex items-center justify-center gap-1 sm:gap-2'>produtos<LuBox />
            </p>
            <p className='flex items-center justify-center gap-1 sm:gap-2'>e ideias<LuLightbulb />
            </p>
            </h2>
          </div>
        </div>
      </div>
      <div
        id='content' 
        className="-mt-72 pt-24 "
      >
            <TabsInfo
              title1="Branding"
              title2="Design"
              title3="Acessoria"
              icon1={<LuPalette />}
              icon2={<LuBox />}
              icon3={<LuLightbulb />}
              content1={
                <>
                
                  <p>Com estratégias de Branding e Comunicação nós construímos marcas que sobrevivem além dos seus criadores, se tornando inesquecíveis e ocupando um lugar no coração das pessoas.</p>

                  <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              
              </>
            }
              content2={
                <>
                
                  <p>Oferecemos soluções de design para empresas e produtos. Vamos além da bela embalagem,pensamos em toda a experiência do consumidor.</p>

                  <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            
                </>
              }
              content3={
                <>
                
                  <p>Criamos e executamos a estratégia de comunicação para empresas que buscam aumentar a visibilidade, estabelecer relacionamentos e reforçar a imagem da sua marca no mercado empresarial.</p>

                  <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          
              </>
            }
            />
      </div>
    </div>
  )
}
