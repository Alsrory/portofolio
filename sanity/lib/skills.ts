import { Skills, skillsCategory } from "@/src/constant/interfaces"
import { client } from "./client"

export async function getSkills(category:skillsCategory){
    const query = `*[_type=="skills" && category=="${category}"]{_id,lable,value,category}`;
    const fetchSkills = async () => {
        const data = await client.fetch(query);
        return data as Skills[];
    };
    // Polling: جلب البيانات كل 60 ثانية
    let skills = await fetchSkills();
    if (typeof window !== "undefined") {
        setInterval(async () => {
            skills = await fetchSkills();
        }, 60000);
    }
    return skills as Skills[];

}
