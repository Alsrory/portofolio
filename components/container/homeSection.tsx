import React from 'react'
import Image from 'next/image'
import { SocialLink } from '@/src/constant/socialLinks'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import SocialLinkIcon from './compenents of continer/socialLinkIcon'
import { ArrowRightCircle, Download, DownloadIcon } from 'lucide-react'
import { Effect } from '../ui/effects'

function HomeSection() {
  return (
    <section className="grid md:grid-cols-12 items-center gap-6">
          <SocialLinkIcon/>
          {/* prestition */}
          <div className=" md:col-span-6 flex flex-col items-center md:items-start  gap-y-6 p-2">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground capitalize"> hi,I&lsquo;m Wajdi Alsarory</h2>
            <h5 className="text-xl md:text-2xl font-semibold capitalize">web developer</h5>
            <p className=' leading-7 md:text-lg md:max-w[85%] text-center md:text-start'>I am Wajdi Al-Sarouri, a Full-Stack Web Developer with a Bachelor&lsquo;s degree in Information Technology. I have a passion for web programming and the ability to adapt and keep up with the evolving landscape of technology.</p>
            <div className="flex gap-2 py-4">
              <a href="#project"className={buttonVariants({size:'lg',})}>
                <span>my works</span>
                <ArrowRightCircle className='size-4'></ArrowRightCircle>
              </a>
              <a href="cv.pdf" target='_blank'className={buttonVariants({size:'lg',variant:'outline',})} download={true}> <span>download</span>
              <DownloadIcon className='size-4'></DownloadIcon>
              </a>
            </div>
          
            
          </div>
          {/* image */}
          <div className="md:col-span-5 grid place-content-center">
            <div className="relative flex justify-center items-center size-80 md:size-96">
              
              <Effect className='size-full'/>
              <Effect variant='square' size='sm'className='bottom-[8%] right-[25%] -rotate-12'/>
              <Image height={420}width={420}alt='profile' src='/a.JPG'
              className=' object-fill size-[80%] border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background'/>

           </div>
           
          </div>
        </section>
  )
}

export default HomeSection
