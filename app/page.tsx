import Image from "next/image";
import { Button } from "@/components/ui/button";
import HomeSection from "../components/container/homeSection";
import About from "../components/container/about";
import SkillSection from "@/components/container/skillSection";
import Project from "@/components/container/project";
import Contact from "@/components/container/contact";
import ScrollToTap from "@/components/container/compenents of continer/scroll_To_tap";
import NavBar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import Achievement from "@/components/container/compenents of continer/achievement";


export default function Home() {
  return (
    <main className="   ">
      <NavBar/>
      <div className=" container mt-10 pt-28 space-y-28  lg:pt-28 antialiased">
      
      <HomeSection/>
        {/*end  skills esction */}
        <About/>
        
         <SkillSection/>
         <Project/>
         <Achievement/>
         <Contact/>

         <ScrollToTap/>
      
          
      </div>
      <Footer/>
    </main>
  );
}
