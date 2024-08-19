'use client'
import { urlFor } from '@/sanity/lib/image'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import { FC, Suspense, useState } from 'react'
import { Image as SanityImage } from 'sanity'

interface CorecelProps {
  images:SanityImage[]
}

const Corecel: FC<CorecelProps> = ({images}) => {
    const [imgeselect,setImage]=useState(urlFor(images[0]))
  return <div className=' flex-1 space-y-4   '>
    <Image src={imgeselect} width={300} height={320} alt='current iamge' className='w-full h-[320px]  max-h-[30rem] shadow   '/>
    <div className='grid grid-cols-4 gap-4'>
        {images.map((image,index)=>(
            <Suspense key={index} fallback={<Loader/>}>
            <div className="w-full max-h-28 overflow-hidden">
                <Image src={urlFor(image)} width={220} height={220} alt='iamge' className=' opacity-60 hover:opacity-100 cursor-pointer transition hover:scale-110' onClick={() => ImageSelect(index, urlFor(image))}/> 
            </div>
            
            </Suspense>

        ))}
    </div>
    
  </div>
 function ImageSelect(index: number, url: string) {
  setImage(urlFor(url))
  console.log('Selected image index:', imgeselect);
  console.log('Selected image URL:', url);
  // Additional logic can be added here to handle the selected image
}
}

export default Corecel