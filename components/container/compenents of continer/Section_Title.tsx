import { cn } from '@/lib/utils'
import React, { FC } from 'react'

interface Section_TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title:string,
  descripation:String
  
}

const Section_Title: FC<Section_TitleProps> = ({title,descripation,className,...props}) => {
  return <div className={cn('flex flex-col gap-y-1 md:gap-y-2 items-center capitalize md:items-start',className)} {...props}>
    <h5 className="font-bold text-primary text-xl tracking-wide">{title}</h5>
    <h3 className="text-base  text-center  font-semibold text-foreground md:text-2xl">{descripation}</h3>
    </div>
}

export default Section_Title