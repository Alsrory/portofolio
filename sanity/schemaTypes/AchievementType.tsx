import {defineField, defineType} from 'sanity'

export const AchievementType = defineType({
  name: 'achievement',
  title: 'Achievements',
  type: 'document',
  fields: [
    defineField({
        name:'image',
        type:'array',
        title:'Image',
        of:[{type:'image'}]
    }),
    defineField({
      name:'description',
      type:"string",
      title:"Description",
      validation:(Rule)=>[Rule.required().min(1).error('minimum value must be 1'),Rule.max(100).error('max value 100')]
    }),
  
  ]
})