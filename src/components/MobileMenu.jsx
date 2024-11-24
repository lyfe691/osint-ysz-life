import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { navItems } from "@/nav-items";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-secondary" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-accent border-r border-secondary/20 w-64">
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map(({ title, to, icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors p-2 rounded-md hover:bg-secondary/10"
            >
              {icon}
              <span>{title}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;