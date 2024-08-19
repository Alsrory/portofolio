import { Projects } from "@/src/constant/interfaces";
import { client } from "./client";

export async function getProject() {
  const query = `*[_type=="project"]{
    _id,title,descripation,responesive,image,urllink,github,publishedAt,tags
    }`;
  const data = await client.fetch(query);
  return data as Projects[];
}
