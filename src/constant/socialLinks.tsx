import { Facebook, Linkedin, MessageCircle, WheatIcon, X } from "lucide-react";
import { socialLink } from "./interfaces";

export const SocialLink:socialLink[]=[
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