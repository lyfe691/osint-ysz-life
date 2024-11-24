import { HomeIcon, MailIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Contact from "./pages/Contact.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MailIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];