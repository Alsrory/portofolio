import { links } from "./interfaces";
import { ArchiveIcon, Facebook, Home, LayersIcon, Linkedin, LucideArchive, MessageCircle, Settings, User, WheatIcon, X } from "lucide-react";


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
      {
         linkName:'Achievement',
          linkUrl:'#achievement',
          icon:LucideArchive,
      },
      {linkName:'Contect',
         linkUrl:'#contact',
         icon:MessageCircle
        
      }]