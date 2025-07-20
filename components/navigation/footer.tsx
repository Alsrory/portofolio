import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinksNav } from "@/src/constant/navlinks";
import { SocialLink } from "@/src/constant/socialLinks";
import Link from "next/link";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 -end-0 border-t-2 w-full  shadow-md  px-3 py-4  md:pb-4 bg-muted/95 z-10 overflow-x-hidden">
      <div className=" container flex px-3 md:px-10 lg:px-20 justify-between   items-center gap-y-4 overflow-x-hidden">
        <div className=" hidden md:block">
        <p >
          Copyright &copy; {currentYear} All right reserved
        </p>
        </div>
        

        {LinksNav.map((link, index) => {
          const { linkUrl, icon: Icon } = link;
          return (
           
              <Link key={index} href={link.linkUrl}  className={"hover:text-primary capitalize text-foreground flex gap-x-1  md:gap-x-3 "}>
                <Icon className="size-4  mt-1" />
              
              <span className="">{link.linkName}</span></Link>
           
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
