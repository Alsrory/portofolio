import React from 'react'
import { getSkills } from '@/sanity/lib/skills'
import { Effect } from '../ui/effects'
import Section_Title from './compenents of continer/Section_Title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { tabsItem } from '@/src/constant/tabsItem'
import SkillsContent from '../skills/skillsContent'



async function SkillSection() {
  const frontendskills= await getSkills("frontend")
  const backendskills= await getSkills("backend")
  const toolsskills= await getSkills("tools")
  return (
<section  id="skills" className=" relative space-y-6">
  <Effect className='right-20 bottom-8 md:-right-36 md:-bottom-2'/>
  <Section_Title title='Skills' descripation={'my teachnical proficiency'} className='md:items-center'/>
  <Tabs defaultValue={tabsItem[0].value}>
    <div className="grid md:grid-cols-3 gap-4 md:gap-8">
      {/* tabs list */}
      <TabsList className='grid grid-cols-3 md:grid-cols-1 gap-2 w-full h-fit '>
        {tabsItem.map((item)=>{
          const{value,Labal,icon:Icon}=item;
          return(
            <TabsTrigger key={value} value={value} className='w-full gap-2'>
            <Icon className='size-4'/>
            <span className=' capitalize'>{Labal}</span>
            </TabsTrigger>
          )
})}
      </TabsList>
      {/* tabs content */}
      <div className="md:col-span-2 bg-background/50">
      <TabsContent  value='frontend' >
        <SkillsContent data={frontendskills} label='front end'/>
       
       
      </TabsContent>
      <TabsContent  value='backend' >
      <SkillsContent data={backendskills} label='back end'/>
      </TabsContent>
      <TabsContent  value='tools' >
      <SkillsContent data={toolsskills} label='tools'/>
      </TabsContent>
      </div>
    </div>
  </Tabs>
  <div>
 
 
   </div>

</section>

  
  
   )
}

export default SkillSection
