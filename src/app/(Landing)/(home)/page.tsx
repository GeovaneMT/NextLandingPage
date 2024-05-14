import { Metadata } from 'next'
import { TabsJobs } from '@/components/tabs'
import { ParallaxText } from '@/components/ParallaxText'
import { RevealListWrapper } from '@/components/RevealList'
import { LuBox, LuPalette, LuHelpingHand, LuLightbulb} from "react-icons/lu";
import { TypeWriter } from '@/components/typewriter';


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
    >
      <div className="flex flex-col gap-8">
        <div className="relative h-[calc(90vh-4rem)]">
          <div className="flex flex-col justify-center w-full h-full pattern-dots pattern-grayDark-gray10 dark:pattern-gray-gray10 pattern-bg-transparent pattern-opacity-20 pattern-size-2">
            <ParallaxText baseVelocity={-5}>Brands Not Scars</ParallaxText>
            <ParallaxText baseVelocity={5}>Brands Not Scars</ParallaxText>
          </div>
          <div className="absolute inset-0 grid grid-rows-6 justify-center items-center px-8">
            <span className="row-span-2 font-bold uppercase w-full text-center">
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
            </span>
          </div>
        </div>
        <div className="-mt-44">
          <TabsJobs
            title1="Branding"
            title2="Design"
            title3="Acessoria"
            icon1={<LuPalette />}
            icon2={<LuBox />}
            icon3={<LuLightbulb />}
            content1="Com estratégias de design, marketing e comunicação nós construímos marcas, produtos e idéias que sobrevivem além dos seus criadores, se tornando inesquecíveis e ocupando um lugar no coração das pessoas."
            content2="Oferecemos soluções de design para empresas e produtos. Vamos além da bela embalagem,pensamos em toda a experiência do consumidor."
            content3="Criamos e executamos a estratégia de comunicação para empresas que buscam aumentar a visibilidade, estabelecer relacionamentos e reforçar a imagem da sua marca no mercado empresarial."
          />
        </div>
      </div>
    </RevealListWrapper>
  )
}
