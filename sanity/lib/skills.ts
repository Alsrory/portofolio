import { Skills, skillsCategory } from "@/src/constant/interfaces";
import { client } from "./client";

export async function getSkills(category: skillsCategory): Promise<Skills[]> {
  const query = `*[_type=="skills" && category=="${category}"]| order(value desc){_id,lable,value,category}`;

  // ✅ التحديث الرئيسي هنا: إضافة خيار 'next.revalidate'
  // هذا يخبر Next.js بإعادة التحقق من البيانات (جلبها مرة أخرى)
  // كل 60 ثانية على الأكثر. إذا تغيرت البيانات في Sanity،
  // فستظهر التغييرات على الموقع خلال هذه الفترة الزمنية.
  const data = await client.fetch(query, {}, {
    next: {
      revalidate: 60 // إعادة التحقق من البيانات كل 60 ثانية (يمكنك تعديل هذه القيمة)
    }
  });

  // تم إزالة آلية setInterval لأن Next.js سيتعامل مع إعادة التحقق الآن.
  return data as Skills[];
}