'use client'

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// Reusable AccordionItem component
function AccordionItem({ value, children }) {
  return (
    <Accordion.Item value={value} className='mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b'>
      {children}
    </Accordion.Item>
  );
}
function AccordionHeader({ children }) {
  return (
    <Accordion.Header className='flex text-black'>
      {children}
    </Accordion.Header>
  );
}
function AccordionTrigger({ children }) {
  return (
    <Accordion.Trigger 
      className='text-violet-violet11 shadow-mauve-mauve6 hover:bg-mauve-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none'
    >
      {children}
      <ChevronDownIcon
        className="text-violet-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transfoduration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger >
  );
}

function AccordionContent({ children }) {
  return (
    <Accordion.Header className='flex text-black'>
      {children}
    </Accordion.Header>
  );
}

export function AccordionComponent() {
  return (
    <Accordion.Root
      className="bg-mauve-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="Branding">
        <AccordionHeader>
          <AccordionTrigger>
            Branding 
          </AccordionTrigger>
        </AccordionHeader>
        <Accordion.Content 
          className='text-mauve-mauve11 bg-mauve-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'
        >
          <div className="py-[15px] px-5">
            Com estratégias de design, marketing e comunicação nós construímos marcas, produtos e idéias que sobrevivem além dos seus criadores, se tornando inesquecíveis e ocupando um lugar no coração das pessoas.
          </div>
        </Accordion.Content>
      </AccordionItem>
      <AccordionItem value="Design">
        <Accordion.Header className='flex text-black'>
          <Accordion.Trigger 
            className='text-violet-violet11 shadow-mauve-mauve6 hover:bg-mauve-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none'
          >
            Design 
            <ChevronDownIcon
              className="text-violet-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content 
          className='text-mauve-mauve11 bg-mauve-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'
        >
          <div className="py-[15px] px-5">
            Oferecemos soluções de design para empresas e produtos. Vamos além da bela embalagem, pensamos em toda a experiência do consumidor.
          </div>
        </Accordion.Content>
      </AccordionItem>
    </Accordion.Root>
  );
}
