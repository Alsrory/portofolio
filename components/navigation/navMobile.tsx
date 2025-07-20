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
    return (
        <>
            {/* زر القائمة */}
            {/* طبقة شبه معتمة */}
            {isopendiv && (
                <div className="fixed inset-z bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300" onClick={taggleMenu}></div>
            )}
            {/* القائمة المنسدلة من الأعلى جهة اليمين */}
            <div
                className={`
                    fixed top-0 right-0 z-[101] w-[60vw] max-w-xs  h-[70vh]
                    flex flex-col content-center items-start pt-8 pb-8 bg-white/95 rounded-bl-2xl shadow-2xl
                    transition-all duration-300 
                    ${isopendiv ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}
                `}
            >
                {/* زر الإغلاق في الأعلى */}
                <div className="  self-end pr-8">
                <button
                    onClick={taggleMenu}
                    className=" mb-4 p-2  rounded bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="إغلاق القائمة"
                >
                    <X size={28} />
                </button>
                </div>
                <hr className="w-full border-t-2 border-gray-400  " />
                {LinksNav.map((item, index) => (
                    <Link
                        key={index}
                        href={item.linkUrl}
                        className="w-full text-right py-3 pr-10 px-4 mb-2 rounded-lg text-base  text-gray-800 hover:bg-blue-50 transition-colors duration-200"
                        onClick={taggleMenu}
                    >
                        {item.linkName}
                    </Link>
                ))}
            </div>
            {/* زر القائمة يبقى دائماً في الأعلى جهة اليمين */}
            <div
                className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "visible md:hidden flex-col z-[102] fixed top-6 right-4 md:right-24"
                )}
                onClick={taggleMenu}
                style={{ display: isopendiv ? "none" : "flex" }}
            >
                <Menu size={28} />
            </div>
        </>
    );
}
export default MobileNavBar
// 'use client'
// import { buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { links } from "@/src/constant/interfaces";
// import { LinksNav } from "@/src/constant/navlinks";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { FC, useState } from "react";
//  interface mobile extends links{}
//  function MobileNavBar(){
//     let [isopendiv,setOpen]=useState<boolean>(false)
//     function taggleMenu(){
//         setOpen(!isopendiv)
//     }
//     return(
//         <div className={cn(buttonVariants({variant:'outline',size:'icon'}),`visible md:hidden flex-col z-50  `)}  onClick={taggleMenu}>
//             {!isopendiv?<Menu/>:<X></X>} 
//         <div className={` flex flex-col right-9 top-20 pl-2 capitalize text-foreground  bg-popover tracking-wide w-[7rem] transition-all absolute border shadow-lg rounded-lg  gap--1 ${!isopendiv?'hidden':'visible'} `}>
        
//        {LinksNav.map((item,index)=>(
//         <Link key={index} href={item.linkUrl} className={`flex-col py-2  focus:bg-accent hover:bg-muted   `} >{item.linkName}</Link>
//        ))}
    
//      </div> 
          
   
//      </div>
//     )
// }
// export default MobileNavBar