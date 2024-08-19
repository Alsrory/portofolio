import {defineField, defineType} from 'sanity'

export const skillsType = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
        name:'lable',
        type:'string',
        title:'Lable',
        validation:(Rule)=>[Rule.required().min(3).max(100)]
    }),
    defineField({
      name:'value',
      type:"number",
      title:"precentage",
      validation:(Rule)=>[Rule.required().min(1).error('minimum value must be 1'),Rule.max(100).error('max value 100')]
    }),
    defineField({
      name:"category",
      type:'string',
      title:'Category',
      initialValue:'backend',
      options:{
        list:[
          {title:'Front End',value:'frontend'},
          {title:'Back End',value:'backend'},
          {title:"Tools",value:'tools'}

        ]
      },
      validation:(Rule)=>[Rule.required()]
    })
  ]
})