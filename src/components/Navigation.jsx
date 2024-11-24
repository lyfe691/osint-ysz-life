import { Link } from "react-router-dom";
import { navItems } from "@/nav-items";

const Navigation = () => {
  return (
    <nav className="bg-accent border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-secondary">
            OSINT Training
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ title, to, icon }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center space-x-2 text-gray-300 hover:text-secondary transition-colors"
              >
                {icon}
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;