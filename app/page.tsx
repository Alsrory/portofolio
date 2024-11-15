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


export default function Home() {
  return (
    <main className="   ">
      <NavBar/>
      <div className=" container pt-24 space-y-24  lg:pt-28 antialiased">
      
      <HomeSection/>
        {/*end  skills esction */}
        <About/>
        
         <SkillSection/>
         <Project/>
         <Contact/>
         <ScrollToTap/>
      
          
      </div>
      <Footer/>
    </main>
  );
}
