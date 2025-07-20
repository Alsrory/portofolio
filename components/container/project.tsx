import React from 'react'
import Section_Title from './compenents of continer/Section_Title'
import { getProject } from '@/sanity/lib/project'
import { Effect } from '../ui/effects'
import ProjectItem from '../project/projectItem'



 async function Project() {
  const Projects= await getProject()
  return (
    <section id='project' className=' relative  space-y-6 scroll-mt-20'>
     
      <Effect className='left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'/>
      <Section_Title title='Project' descripation={"Here are some of the projects I've completed "} className=' md:items-center p-4'/>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2  justify-between md:px-5 gap-x-4">
     {Projects.map((project)=>(
      <ProjectItem key={project._id} project={project}/>
     ))}
      </div>
      
      
    </section>
  )
}

export default Project
