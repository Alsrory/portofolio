import { getProject } from "@/sanity/lib/project";
import { statistic } from "./interfaces";

    
   


  async function  getstatistic() {
  
     const projects= await getProject()
   let number_project=  projects.length
     
    const Statistics:statistic[]=[
        {
            lable:"Year Expirence",
           value:new Date().getFullYear()-2018
           
        },
        {
            lable:"Project",
            value: number_project
           
        },
    
    
    ]
    return {Statistics}

}

export default getstatistic


