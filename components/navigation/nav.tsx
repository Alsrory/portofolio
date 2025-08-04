import { links } from "@/src/constant/interfaces"
import Link from "next/link"
import { FC } from "react"

interface link extends links{}
export const NavSction:FC<links>=({linkName,linkUrl})=>{
return(
    <div className="pt-2 capitalize tracking-wide   text-base font-semibold hover:translate-x-1 hover:transition-all hover:text-primary  ">
        <Link href={linkUrl} >{linkName}</Link>

    </div>
)

}
export default NavSction