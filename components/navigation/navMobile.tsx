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
    const [isDesktop, setIsDesktop] = useState(false);

    function taggleMenu(){
        setOpen(!isopendiv)
    }
    return (
        <>
            {isopendiv && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden" onClick={taggleMenu}></div>
            )}
            {/* drop list men*/}
            <div
                className={`
                    fixed  top-0 right-0 z-[101] w-[60vw] max-w-xs  h-[70vh]
                    flex flex-col   pt-8 pb-8 bg-white/95 rounded-bl-2xl shadow-2xl
                    transition-all duration-300 md:hidden
                    ${isopendiv ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}
                `}
            >
                {/* button close  dropb list menu*/}
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
                {LinksNav.map((item, index ) => {
                    const { icon: Icon } = item;
                    return (
                        <Link
                            key={index}
                            href={item.linkUrl}
                            className=" flex gap-x-4  py-3 pr-10 px-4 mb-2 rounded-lg text-base self-end text-gray-800 hover:bg-blue-50 transition-colors duration-200"
                            onClick={taggleMenu}
                        > {item.linkName}
                            <Icon className="size-4  mt-1" />
                           
                        </Link>
                    );
               })}
            </div>
        {/* drop downlist button */}
           
             <div
                className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    isopendiv ? "hidden" : "flex-col md:hidden", 
                    "z-[102] fixed top-6 right-4 md:right-24" 
                )}
                onClick={taggleMenu}
            >
                <Menu size={28} />
            </div>
        </>
    );
}
export default MobileNavBar
