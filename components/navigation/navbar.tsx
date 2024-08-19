import { LinksNav } from "@/src/constant/navlinks"
import Logo from "./logo"
import NavSction from "./nav"
import MobileNavBar from "./navMobile"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./modeToggle"

function NavBar(){
    
    return(
        <div className=" top-0 fixed backdrop-blur-md bg-background/70 w-full z-30  ">
            
        <div className="   flex justify-between py-6 pr-2 lg:pr-32 ">
        <Logo/>
        {/* navbar of desktop  */}
        <div className=" hidden md:visible md:flex gap-8  ">
       {LinksNav.map((item,index)=>(
        <NavSction key={index} {...item}/>
       ))}
        
       </div>
       {/* end of desktop navbar */}
        
        {/* mobile navbar */}
        <div className="flex pr-10 items-start gap-1">
        <ModeToggle/>
        <MobileNavBar/>
      
        </div>
        
     
        {/* end of mobile navbar */}
        </div>
        </div>
    )
  
}
export default NavBar