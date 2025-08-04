import { AchivevItem } from "@/src/constant/interfaces";
import { client } from "./client";

export async function getAchivement(): Promise<AchivevItem[]> {
  const query = `*[_type == "achievement"] | order(description asc){ _id, image, description }`;

  // ✅ التحديث الرئيسي هنا: إضافة خيار 'next.revalidate' لدالة جلب الإنجازات أيضاً
  const data = await client.fetch(query, {}, {
    next: {
      revalidate: 60 // إعادة التحقق من البيانات كل 60 ثانية
    }
  });

  // إذا كانت حقل 'image' في Sanity يُرجع كائن Sanity asset وليس رابط URL مباشر،
  // فستحتاج إلى تحويله هنا باستخدام urlFor.
  // مثال (إذا كانت image هي كائن Sanity asset):
  // return data.map((item: any) => ({
  //   _id: item._id,
  //   description: item.description,
  //   image: urlFor(item.image).url(), // استخدام urlFor لتحويل كائن Sanity إلى URL
  // })) as AchivevItem[];

  // للتبسيط، نفترض أن 'image' تأتي مباشرة كـ string URL
  return data as AchivevItem[];
}