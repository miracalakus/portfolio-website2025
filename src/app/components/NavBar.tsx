import Link from "next/link";
import { Github, Mail, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      {/* Home Button */}
      <Link href="/" className="font-title hover:underline">
       <h2>Mirac</h2> 
      </Link>

      {/* Navigation Links */}
      <div className="font-subtitle flex items-center space-x-6">
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/about" className="hover:underline">
          About Me
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <a href="https://github.com/miracalakus" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-gray-500" />
          </a>
          <a href="miracalakus@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5 hover:text-gray-500" />
          </a>
          <a href="https://linkedin.com/in/miracalakus" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-gray-500" />
          </a>
        </div>
      </div>
    </nav>
  );
}
