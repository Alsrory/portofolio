import { AppWindow, PenLineIcon, TerminalSquare } from "lucide-react";
import { TabItems } from "./interfaces";

export const tabsItem:TabItems[]=[

    {
        value:'frontend',
        icon:AppWindow,
        Labal:"front End"
    },
    {
        value:'backend',
        icon:TerminalSquare,
        Labal:"Back End"
    },
    {
        value:'tools',
        icon:PenLineIcon,
        Labal:"tools"
    }
]