'use client'

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

interface AccordionProps {
  children: React.ReactNode;
}

function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <Accordion.Item 
      value={value} 
      className='mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b'
    >
      {children}
    </Accordion.Item>
  )
}
function AccordionHeader({ children }: AccordionProps) {
  return (
    <Accordion.Header 
      className='flex text-black'
    >
      {children}
    </Accordion.Header>
  )
}
function AccordionTrigger({ children }: AccordionProps) {
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

function AccordionContent({ children }: AccordionProps) {
  return (
    <Accordion.Content
      className='text-mauve-mauve11 bg-mauve-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'
    >
      <div
        className="py-[15px] px-5"
      >
        {children}
      </div>
    </Accordion.Content>
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
        <AccordionContent>
          Com estratégias de design, marketing e comunicação nós construímos marcas, produtos e idéias que sobrevivem além dos seus criadores, se tornando inesquecíveis e ocupando um lugar no coração das pessoas.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="Design">
        <AccordionHeader>
          <AccordionTrigger>
            Design
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Oferecemos soluções de design para empresas e produtos. Vamos além da bela embalagem,pensamos em toda a experiência do consumidor.
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
}
