import { Skills } from '@/src/constant/interfaces'
import { Label } from '@radix-ui/react-dropdown-menu'
import { FC } from 'react'
import SkillItem from './skill_Item'

interface SkillsContentProps {
  data:Skills[],
  label:string
}

const SkillsContent: FC<SkillsContentProps> = ({data,label}) => {
  return <article className='min-h-[25rem] border border-primary rounded-lg '>
    <h2 className="text-2xl capitalize text-primary font-semibold py-4 px-4 border-b border-primary">{label}</h2>
    <div className="px-6 py-6 space-y-6">
        {data.map((item)=>(
            <SkillItem key={item._id} item={item}/>))}
    </div>
    </article>
}

export default SkillsContent