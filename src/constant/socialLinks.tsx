import { Facebook, Github, Linkedin, MessageCircle, WheatIcon, X } from "lucide-react";
import { links } from "./interfaces";
// import { socialLink } from "./interfaces";

export const SocialLink:links[]=[
    {
       linkName:'Linkedin',
        linkUrl:'https://www.linkedin.com/in/wajdi-alsarori-43246a214',
        icon:Linkedin,
    },
    {
        linkName:'github',
         linkUrl:'https://github.com/Alsrory',
         icon:Github,
     },
     {
        linkName:'x',
         linkUrl:'https://x.com/alsarorwajdi?t=zLbxxxymaOsI3nZ87WFgQQ&s=09',
         icon:X,
     },
     {linkName:'whatsup',
        linkUrl:'https://wa.me/message/WNIBTOFSDJPVE1',
        icon:MessageCircle,
     }]