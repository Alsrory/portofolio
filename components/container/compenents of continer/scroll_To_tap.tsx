"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpCircle } from "lucide-react";
import React, { useState } from "react";

export default function ScrollToTap() {
  const [scrolling, setScroll] = useState<boolean>(false);
  // use effect
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 80);
    });
  }, []);
  // useSatate of button
  let x='hidden'
  let [visible, setVisible] = useState("hidden");
  function handdleVasible() {
    if (visible=='hidden') {
      setVisible((visible = "visible"));
    } else {
      setVisible((visible = "hidden"));
    }
  }
  return (
    <div>
      <Button
        size={"icon"}
        className={cn(
          `fixed bottom-16 md:bottom-8 end-1 md:end-12 transition-transform duration-300 z-40 `,
          !scrolling && " opacity-0 translate-y-6 pointer-events-none"
        )}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        // onFocus={handdleVasible}
        //onMouseMove={handdleVasible}
        onMouseOver={handdleVasible}
      //  onTouchStart={}
             onMouseMove={handdleVasible}
      >
        <ArrowUpCircle className="size-4" />
        <div className= {`
        bg-slate-500  rounded-md px-3 fixed bottom-16 md:bottom-8 end-1 md:end-12 ${visible} `}>
      
          go to Top
        </div>
      </Button>
    </div>
  );
}
