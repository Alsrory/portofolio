import React from 'react'
import Section_Title from './compenents of continer/Section_Title'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Effect } from '../ui/effects'
import { buttonVariants } from '../ui/button'
import { Mail } from 'lucide-react'

function Contact() {
  return (
    <article id="contact" className=' relative bg-card bg-opacity-80 backdrop-blur-md border shadow-sm rounded-xl p-6 flex flex-col items-center gap-y-6 md:gap-y-12'>
      <Effect variant={'ball'} size={'default'} className='top-0 -end-4'/>
      <Section_Title title='Contect with ' descripation={'this my way to cantact with me'} className='md:items-center md:pt-6'/>
      <a href="mailto:wajdialsarori22@gmail.com" className={buttonVariants({size:'lg'})}>
        <Mail className='size-4'/>
        <span>contact me</span>
      </a>
      

    </article>
  )
}

export default Contact
