import { Github, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-16 border-t border-neutral-300 dark:border-neutral-700 py-8 text-center font-subtitle text-sm text-neutral-600 dark:text-neutral-400">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {year} Miraç Alakuş. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/miracalakus"
            target='_blank'
            className="hover:text-[#D35400]"
          >
            <Github/>
          </a>
          <a
            href="mailto:miracalakus@gmail.com"
            target='_blank'
            className="hover:text-[#D35400]"
          >
            <Mail/>
          </a>
          <a
            href="https://www.linkedin.com/in/mirac-alakus"
            target='_blank'
            className="hover:text-[#D35400]"
          >
            <Linkedin/>
          </a>
        </div>
      </div>
    </footer>
  );
}
