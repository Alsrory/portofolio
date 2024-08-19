import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SocialLink } from '@/src/constant/socialLinks'
import React from 'react'

function SocialLinkIcon() {
  return (
    <div className='flex  mx-auto md:mx-0  py-2   size-fit  md:flex-col border p-2 gap-4 rounded-3xl'>
       
    {SocialLink.map((item,index)=>{
        const{linkUrl,icon:Icon}=item
        return(
<a href={linkUrl} key={index} className={cn(buttonVariants({variant:'outline',size:'icon'},),'hover:text-primary rounded-full')}><Icon className={`size-5`}/></a>
        )
})}
</div>
  )
}

export default SocialLinkIcon
