import { Skills, skillsCategory } from "@/src/constant/interfaces"
import { client } from "./client"

export async function getSkills(category:skillsCategory){
    const query=`
    *[_type=="skills"&& category=="${category}"]{
    _id,lable,value,category}`
    const data= await client.fetch(query)
    return data as Skills[]
}
