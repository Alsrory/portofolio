import { Facebook, Home, LayersIcon, Linkedin, MessageCircle, Settings, User, WheatIcon, X } from "lucide-react";
import { socialLink } from "./interfaces";

export const FooterIcons:socialLink[]=[
    {
       linkName:'home',
        linkUrl:'/',
        icon:Home,
    },
    {
        linkName:'about',
         linkUrl:'#about',
         icon:User,
     },
     {
         linkName:'skills',
          linkUrl:'#skills',
          icon:Settings,
      },

     {
        linkName:'Project',
         linkUrl:'#project',
         icon:LayersIcon,
     },
     {linkName:'Contect',
        linkUrl:'#contact',
        icon:MessageCircle
       
     }]