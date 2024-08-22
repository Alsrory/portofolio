import Link from "next/link"

function Logo(){
    return(
       
        <Link className="flex  py-2 hover:translate-x-2" href={"/"} >
            <h1 className="text-xl font-semibold tracking-wider border px-1  shadow-accent shadow-lg ">ALSARORY</h1>
            <div className=" w-2 h-2  rounded-lg mt-5 ml-1 bg-primary "></div>
        </Link>
       
    )
}
export default Logo