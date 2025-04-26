'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Github, Mail, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <nav className="flex justify-between items-center p-4 relative z-50">
      <div className="hidden md:flex font-secondtitle hover:underline font-extrabold">
      <Link href="/" >
        <h2>Miraç</h2>
      </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex uppercase font-secondtitle items-center space-x-6">
        {/* <TestComp /> */}
        <Link href="/#work" className="hover:underline">Work</Link>
        <Link href="/AboutMe" className="hover:underline">About Me</Link>
        <Link href="/Contact" className="hover:underline">Contact</Link>

        {/* Social Icons */}
        <div className="flex space-x-3">
          <a href="https://github.com/miracalakus" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-gray-500" />
          </a>
          <a href="mailto:miracalakus@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5 hover:text-gray-500" />
          </a>
          <a href="https://www.linkedin.com/in/mirac-alakus" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-gray-500" />
          </a>
        </div>
        <ThemeToggle/>
      </div>

      {/* Mobile part */}
      <Link href="/" className="md:hidden">
        <h2 className='font-secondtitle font-bold'>MA</h2>
      </Link>
      <button
        className="md:hidden z-30"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-10 h-10 text-white" /> : <Menu className="w-8 h-8" />}
      </button>

      <AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed inset-0 bg-[#D35400] dark:bg-[#222222] p-8 flex flex-col gap-6 font-secondtitle md:hidden text-white text-4xl"
    >
      <Link href="/#work" onClick={() => setIsOpen(false)} className="hover:underline">
      🎨Work
      </Link>
      <Link href="/AboutMe" onClick={() => setIsOpen(false)} className="hover:underline">
      🙋‍♂️About Me
      </Link>
      <Link href="/Contact" onClick={() => setIsOpen(false)} className="hover:underline">
        📞Contact
      </Link>

      <div className="flex space-x-6 mt-4">
        <a href="https://github.com/miracalakus" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-white hover:text-gray-200" />
        </a>
        <a href="mailto:miracalakus@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="w-6 h-6 text-white hover:text-gray-200" />
        </a>
        <a href="https://www.linkedin.com/in/mirac-alakus" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-white hover:text-gray-200" />
        </a>
      </div>
      <div>
      <ThemeToggle/>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}
