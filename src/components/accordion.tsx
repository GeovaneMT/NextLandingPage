'use client'

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';


export function AccordionComponent() {
  return (
    <Accordion.Root
      className="bg-mauve-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item value="Branding"
        className='mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b'
      >
        <Accordion.Header className='flex text-black'>
          <Accordion.Trigger 
            className='text-violet-violet11 shadow-mauve-mauve6 hover:bg-mauve-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none'
          >
            Branding 
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
            Com estratégias de design, marketing e comunicação nós construímos marcas, produtos e idéias que sobrevivem além dos seus criadores, se tornando inesquecíveis e ocupando um lugar no coração das pessoas.
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}