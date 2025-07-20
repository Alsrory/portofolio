import React from "react";
import { Effect } from "../ui/effects";
import Section_Title from "./compenents of continer/Section_Title";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import getstatistic from "@/src/constant/statistic";

async function About() {
  const { Statistics } = await getstatistic();
  return (
    <section id="about" className="relative scroll-mt-28">
      <Effect className="left-32 md:-left-44 -top-12" />
      <article className="relative mx-auto max-w-[50rem] bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6">
        <Effect
          variant="square"
          size="default"
          className="-top-4 -right-5 -z-10 rotate-12"
        />
        <Section_Title
          title="about me "
          descripation="Who I Am "
          className=" items-center"
        />
       
        <p>
          Dedicated and skilled Full-Stack Web Developer with a Bachelor&apos;s
          degree in Information Technology. I am passionate about crafting
          efficient, user-friendly, and innovative web applications that meet
          client needs and enhance user experiences. Proficient in both
          front-end and back-end technologies, I specialize in HTML, CSS,
          JavaScript, React, and Next.js on the front-end, as well as Laravel
          (PHP), Express.js, and Node.js on the back-end. With a strong
          commitment to continuous learning and problem-solving, I thrive in
          dynamic environments and excel at collaborating with cross-functional
          teams to deliver high-quality software solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6  gap-y-4 items-end">
          {Statistics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start "
            >
              <p className="text-2xl text-foreground md:text-4xl font-bold">
                {item.value}
              </p>
              <p className=" whitespace-nowrap text-sm md:text-lg font-semibold">
                {item.lable}
              </p>
            </div>
          ))}

          <a
            href="#skills"
            className={cn(
              buttonVariants({ size: "lg" }),
              "col-span-2 md:col-span-1"
            )}
          >
            <span> go to Skills</span>
            <ArrowRightCircle className="size-4" />
          </a>
        </div>
      </article>
    </section>
  );
}

export default About;
