import { Any } from 'next-sanity'
import Image from 'next/image'
import { FC } from 'react'


interface ProjeCtcardProps {
    imageUrl:string
    title:string
  
}

const ProjeCtcard: FC<ProjeCtcardProps> = ({imageUrl,title}) => {
  return <div className='  relative  group   rounded-md shadow-lg cursor-pointer   overflow-hidden'>
    <figure className=' absolute size-full top-0 left-0 bg-gradient-to-t from red/70  to-transparent'/>
    <Image src={imageUrl} width={320} height={220} alt='title' className=' h-[13rem] md:size-full rounded-sm group-hover:scale-105 transition'/>
    <h3 className=" absolute bottom-2 start-2 text-foreground group-hover:text-primary capitalize truncate"> {title}</h3></div>
}

export default ProjeCtcard