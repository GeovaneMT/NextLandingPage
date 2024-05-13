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
      className='w-full mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b'
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
      className='group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none bg-blackA-blackA9 dark:bg-whiteA-whiteA9 text-grayDark-gray12 dark:text-gray-gray12 shadow-grayDark-gray12 dark:shadow-gray-gray12 hover:bg-blackA-blackA12 dark:hover:bg-whiteA-whiteA8'
    >
      {children}
      <ChevronDownIcon
        className="text-grayDark-gray11 dark:text-gray-gray11 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transfoduration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger >
  );
}

function AccordionContent({ children }: AccordionProps) {
  return (
    <Accordion.Content
      className='text-grayDark-gray10 dark:text-gray-gray10 bg-grayDark-gray12 dark:bg-gray-gray12 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'
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
      className="w-[50vw] bg-gray-gray6 dark:bg-grayDark-gray6 shadow-black/5 rounded-md shadow-[0_2px_10px]"
      type="single"
      defaultValue="item-1"
      orientation="horizontal"
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
