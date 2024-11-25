import React from "react";
import { Github, Linkedin, Globe } from "lucide-react"; 

const Footer = () => {
  return (
    <footer className="bg-accent border-t border-secondary/20 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Copyright */}
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Yanis Sebastian Zürcher. All rights reserved.
          </p>

          {/* Right Section: Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* GitHub */}
            <a
              href="https://github.com/lyfe691"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>

            {/* Website */}
            <a
              href="https://ysz.life"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              <Globe className="h-6 w-6" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yanis-sebastian-zürcher"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;