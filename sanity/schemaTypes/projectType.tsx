import { defineField, defineType } from 'sanity'


export const projectType=defineType( {
name: 'project',
title: 'Project',
type: 'document',
fields: [
    defineField({
        name:'title',
        type:'string',
        title:'Title',
        validation:(Rule)=>[Rule.required(),Rule.min(3).error('the min letter must be 3'),Rule.max(100)]
    }),
    defineField({
        name:'descripation',
        type:'text',
        title:'Desicraption',
        validation:(Rule)=>[Rule.required(),Rule.min(3).max(1000)]
    }),
    defineField({
        name:'responesive',
        type:'boolean',
        title:'Is responesive',
        
      
    }),
    defineField({
        name:'image',
        type:'array',
        title:'Image',
        of:[{type:'image'}]
    }),
    defineField({
        name:'tags',
        type:'array',
        title:'Tages',
        of:[{type:'string'}]
    }),
    defineField({
        name:'urllink',
        type:'url',
        title:'URL Link',
      // validation:(Rule)=>Rule.regex()
    }),
    defineField({
        name:'github',
        type:'url',
        title:'Github Repositrey Link',
      // validation:(Rule)=>Rule.regex()
    }),
    defineField({
        name:'publishedAt',
        type:'date',
        title:'Published At',
       validation:(Rule)=>[Rule.min(new Date('2020-1-1').toDateString()),Rule
        .max(new Date().toDateString()).error('this value not correct')
       ]
    }),

]
})

