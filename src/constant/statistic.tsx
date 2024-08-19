import { statistic } from "./interfaces";

    
   


function  getstatistic() {
    const Statistics:statistic[]=[
        {
            lable:"Year Expirence",
           value: new Date().getFullYear()-2018
           
        },
        {
            lable:"Project",
            value: 4,
           
        },
    
    
    ]
    return {Statistics}

}

export default getstatistic
