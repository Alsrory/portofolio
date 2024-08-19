import { LucideIcon } from 'lucide-react'
import { FC } from 'react'

interface InfoItemProps {
  icon:LucideIcon,
  lebel:string,
  children:React.ReactNode
}

const InfoItem: FC<InfoItemProps> = ({icon:Icon,lebel,children}) => {
  return <div className='grid grid-cols-3 gap-2 items-start text-sm capitalize '>
    <div className="flex items-center gap-2 ">
        <Icon className='size-5'/>
    <span >{lebel}</span>
    </div>
    <div className="col-span-2 text-foreground">
        {children}
    </div>
  </div>
}

export default InfoItem