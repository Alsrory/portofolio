import { Projects } from '@/src/constant/interfaces'
import Link from 'next/link'
import { FC } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import ProjectCard from './projectCard'
import { urlFor } from '@/sanity/lib/image'
import Corecel from './corecel'
import ProjectInfo from './projectInfo'

interface ProjectItemProps {
  project:Projects
}

const ProjectItem: FC<ProjectItemProps> = ({project}) => {
  return <article >
   <Dialog >
  <DialogTrigger asChild >
    <div className='' >
    <ProjectCard imageUrl={urlFor(project.image[0])} title={project.title}/>
    </div>
  </DialogTrigger>
  <DialogContent className='p-0 sm:max-w-3xl lg:max-w-7xl overflow-x-hidden  overflow-y-auto   '>
    <DialogHeader className='bg-muted p-4 md:p-6 '>
      <DialogTitle className='  text-foreground font-semibold truncate capitalize text-2xl'>{project.title}</DialogTitle>
    </DialogHeader>
    <div className="flex flex-col lg:flex-row gap-4 p-4 w-full max-h-[85vh] max-w-3xl lg:max-w-7xl overflow-y-auto ">
        <Corecel images={project.image}/>
        <ProjectInfo projectinfo={project} />
        {/* <div className=' flex-1 bg-slate-600 space-y-4 lg:sapce-y-6  lg:p-4  '>
    <p className=" text-center text-2xl font-bold  text-foreground hover:text-primary capitalize">{project.title}</p>
    <p className=" text-sm">project descaription:{project.descripation}</p>
    <hr />
    <p className=" text-sm">project descaription:{project.github}</p>
    <article className="space-y-2 lg:space-y-3">
    
    </article>
  </div> */}
      
      
      </div>
  </DialogContent>
</Dialog>

  </article>
}

export default ProjectItem