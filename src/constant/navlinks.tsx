import { links } from "./interfaces";
import { Facebook, Home, LayersIcon, Linkedin, MessageCircle, Settings, User, WheatIcon, X } from "lucide-react";


  export const LinksNav:links[]=[
    
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