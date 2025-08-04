import { Projects } from "@/src/constant/interfaces";
import { client } from "./client";

export async function getProject() {
  const query = `*[_type=="project"] | order(publishedAt desc){
    _id,title,descripation,responesive,image,urllink,github,publishedAt,tags
    }`;
  const fetchProjects = async () => {
  const data = await client.fetch(query);
  return data as Projects[];
}

 const data  = await fetchProjects();
    return data as Projects[];
}