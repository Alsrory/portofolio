import { LucideIcon } from "lucide-react"

export interface links{
    linkName:string ,
    linkUrl:string
} 
export interface socialLink extends links{
    icon:LucideIcon
}
export interface progress{
    title:string
    long:number
    longsm?:number

}
export interface statistic{
    lable:String
    value:Number
    
}
export type skillsCategory='frontend'|'backend'|'tools'
export interface Skills{
    _id:string,
    lable:string,
    value:number,
    category:skillsCategory

}
export interface TabItems{
    value:skillsCategory
    icon:LucideIcon
    Labal:string
}
export interface Projects{
    _id:string,
    title:string,
    descripation:string
    image:any[],
    tags:string[],
    urllink:string,
    github:string,
    publishedAt:Date
    responesive:boolean


}