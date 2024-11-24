import { HomeIcon, MailIcon, InfoIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MailIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];