import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { GiHamburgerMenu } from "react-icons/gi";
  export default function Nav(){
    return(
        <Sheet>
       <SheetTrigger><GiHamburgerMenu className="w-6 h-auto" /></SheetTrigger>
       <SheetContent>
       <SheetHeader>
       <SheetTitle>Are you absolutely sure?</SheetTitle>
       <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
      </SheetHeader>
      </SheetContent>
      </Sheet>
    );
  }