// components/Achievement.tsx
import { Effect } from "@/components/ui/effects";
import Section_Title from "./Section_Title";
import React from "react"; // useState is not used here, so removed
import AchieveeDilog from "../AchieveeDilog";
import { getAchivement } from "@/sanity/lib/achivevename"; // Ensure this path is correct
import { AchivevItem } from "@/src/constant/interfaces"; // Import the interface
import Image from "next/image";

async function Achievement() {
  // Ensure getAchivement returns an array of AchivevItem
  const achievements: AchivevItem[] = await getAchivement();

  return (
    <section id="achievement" className="relative scroll-mt-28">
      <Effect className="left-32 md:-left-44 -top-12" />
      <div className="relative   bg-background/90 border rounded-lg p-6 flex flex-col items-center gap-y-8">
        <Effect
          variant="square"
          size="default"
          className="-top-4 -right-5 -z-10 rotate-12"
        />
        <Section_Title
          title="achievement"
          descripation="what I have Achieved in this filed"
          className='md:items-center md:pt-6'
        />
        <Image
          src="/certificate.png"
          alt="Placeholder"
          height={400}
          width={400}
          className=" w-[300px] h-[300px] md:w-[400px] md:h-[400px] cursor-pointer
          transition-transform hover:scale-105 object-cover rounded-md shadow-md"
        />
        {/* Pass the array of achievements to AchieveeDilog */}
        <AchieveeDilog Achievement={achievements} />
      </div>
    </section>
  );
}

export default Achievement;
