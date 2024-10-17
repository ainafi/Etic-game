import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { faq } from '@/constants'
const Faq:React.FC = () => {
  return (
    <section className='py-6'>
        <h2 className='pb-5 text-2xl font-semibold text-center text-white md:text-3xl'>Foire aux questions</h2>
        <div>
        {faq.map((item)=>(
           <Accordion key={item.id} type="single" collapsible>
           <AccordionItem value="item-1">
               <AccordionTrigger  className='font-medium text-white md:text-md '>{item.question}</AccordionTrigger>
               <AccordionContent className='text-white md:text-md '>
               {item.answer}
               </AccordionContent>
            </AccordionItem>
            </Accordion>
        ))}

        </div>
    </section>
  )
}

export default Faq