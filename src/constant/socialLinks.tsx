import { Facebook, Linkedin, MessageCircle, WheatIcon, X } from "lucide-react";
import { links } from "./interfaces";
// import { socialLink } from "./interfaces";

export const SocialLink:links[]=[
    {
       linkName:'Linkedin',
        linkUrl:'/',
        icon:Linkedin,
    },
    {
        linkName:'fecebook',
         linkUrl:'/',
         icon:Facebook,
     },
     {
        linkName:'x',
         linkUrl:'/',
         icon:X,
     },
     {linkName:'whatsup',
        linkUrl:'/',
        icon:MessageCircle
     }]