import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavbarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="bg-transparent  cursor-pointer">
          <Menu />
        </span>
      </SheetTrigger>
      <SheetContent className="bg-[#0c1555] text-white border-0 rounded-lg">
        <div className="grid gap-4 py-4">
          <ul className="flex flex-col gap-10 ">
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>ABOUT</li>
            <li>DASHBOARD</li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMenu;
