'use client'
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { links } from "@/src/constant/interfaces";
import { LinksNav } from "@/src/constant/navlinks";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
 interface mobile extends links{}
 function MobileNavBar(){
    let [isopendiv,setOpen]=useState<boolean>(false)
    function taggleMenu(){
        setOpen(!isopendiv)
    }
    return(
        <div className={cn(buttonVariants({variant:'outline',size:'icon'}),`visible md:hidden flex-col z-50  `)}  onClick={taggleMenu}>
            {!isopendiv?<Menu/>:<X></X>} 
        <div className={` flex flex-col right-9 top-20 pl-2 capitalize text-foreground  bg-popover tracking-wide w-[7rem] transition-all absolute border shadow-lg rounded-lg  gap--1 ${!isopendiv?'hidden':'visible'} `}>
        
       {LinksNav.map((item,index)=>(
        <Link key={index} href={item.linkUrl} className={`flex-col py-2  focus:bg-accent hover:bg-muted   `} >{item.linkName}</Link>
       ))}
    
     </div> 
          
   
     </div>
    )
}
export default MobileNavBar