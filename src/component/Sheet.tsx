import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { GiHamburgerMenu } from "react-icons/gi";
  import { FaHome } from "react-icons/fa";
  import { Button } from "@/components/ui/button";
  import { ImPriceTag } from "react-icons/im";
  export default function Nav(){
    return(
        <Sheet>
       <SheetTrigger><GiHamburgerMenu className="w-6 h-auto" /></SheetTrigger>
       <SheetContent className="bg-[#ffffff]">
       <SheetHeader>
       <SheetTitle className="font-montserrat text-xl font-semibold leading-6 text-left text-[#285B52]">Diligent Insights</SheetTitle>
       </SheetHeader>
       <div className="flex flex-col flex-start gap-8  w-24  w-full mt-8">
        <div className="flex gap-2 items-center jusitfy-center"><FaHome /><span>Home</span></div>
        <div className="flex gap-2 items-center jusitfy-center"><ImPriceTag/><span>Pricing</span></div>
        <div className='h-full flex justify-center items-center w-24 text-[#0D0E10] font-semibold text-4  leading-6 cursor-pointer'>Sign-up</div>
        <div className='h-full flex justify-center items-center w-24 cursor-pointer'><Button className='w-full h-full bg-[#285B52]'>Login</Button></div>
        </div>
      </SheetContent>
      </Sheet>
    );
  }