import { Projects } from '@/src/constant/interfaces'
import { FC } from 'react'
import { Separator } from '../ui/separator'
import InfoItem from './infoItem'
import { ArrowBigRight, Calculator, Github, LayoutDashboard, TagIcon, Webcam, WebcamIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

interface ProjectInfoProps {
    projectinfo:Projects
  
}

const ProjectInfo: FC<ProjectInfoProps> = ({projectinfo}) => {
  return <article className=' flex-1 space-y-4 lg:sapce-y-6 p-2 lg:p-4 w-fit '>
  <h1 className=" text-center text-2xl font-bold  text-foreground hover:text-primary capitalize">{projectinfo.title}</h1>
  <p className=" tracking-wide">project descaription:{projectinfo.descripation}</p>
  <Separator/>
  <div className="space-y-2 lg:space-y-4">
  <InfoItem icon={Calculator} lebel="Published">
    <p className='font-semibold'>{projectinfo.publishedAt.toLocaleString()}</p>
  </InfoItem>
  <InfoItem icon={LayoutDashboard} lebel="Layout">
    <p className='font-semibold'>{projectinfo.responesive ?"responsive" :'n/a'}</p>
  </InfoItem>
  <InfoItem icon={TagIcon} lebel="Tags">
    <div className=' flex item-center flex-wrap gap-4 font-semibold'>{projectinfo.tags.map((tag,index)=>(
      <span key={index}>{tag}</span>
    ))}</div>
  </InfoItem>
  <hr />
  <div className="flex gap-2 md:gap-4">
    <a className={buttonVariants({size:'lg' })} href={projectinfo.urllink}>
     <span>go website </span> <ArrowBigRight className='size-5'/>
    </a>
    <a className={buttonVariants({size:'lg' ,variant:'outline'})} href={projectinfo.github}>
     repostiry code <Github className='size-4'/>
    </a>
  </div>
  <InfoItem icon={Webcam} lebel="web site">
    <p className='font-semibold'>{projectinfo.urllink}</p>
  </InfoItem>
  <InfoItem icon={Github} lebel="Github link">
    <p className='font-semibold'>{projectinfo.github}</p>
  </InfoItem>
  
  </div>
</article>
}

export default ProjectInfo