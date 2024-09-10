import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Search } from "lucide-react";

const NavbarDailog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="bg-transparent cursor-pointer">
          <Search />
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] bg-[#0c1555] text-white border-0 rounded-lg">
        <DialogHeader>
          <DialogTitle>Search Here</DialogTitle>
          <DialogDescription>
            You can search as your prefarance
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <input
              id="name"
              placeholder="Search...."
              className="col-span-4 bg-[#0a103f] focus:outline-none h-[42px] pl-5 rounded-lg"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-[#fbb71c]">
            Search
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NavbarDailog;
