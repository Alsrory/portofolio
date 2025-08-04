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
    // about section 
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
          I&lsquo;m Wajdi Alsarory, a Full-Stack Web Developer with a strong foundation in both front-end and back-end technologies — and a special passion for back-end architecture, performance, and API development.

I hold a Bachelor&lsquo;s degree in Information Technology from Taiz University, and I&lsquo;ve completed several certifications including Google IT Support and Back-End Engineering with Node.js (Manara).
Over the past years, I&lsquo;ve built a variety of web applications using technologies like Laravel, PHP, Node.js, React.js, and Next.js, integrating databases like MySQL and PostgreSQL, and delivering robust RESTful APIs.

My approach focuses on:

Writing clean, maintainable, and testable code.

Following best practices in security and performance.

Building real-world solutions that solve meaningful problems.

I&lsquo;m always eager to learn, collaborate, and contribute to impactful projects — whether in a team or independently.


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
