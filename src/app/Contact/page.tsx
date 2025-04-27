'use client';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 space-y-16">

      {/* Page header */}
      <div className="text-center space-y-4">
        <h1 className="md:text-7xl sm:text-3xl font-title">Get in Touch</h1>
        <h2 className="text-lg text-[#222222] font-subtitle dark:text-white">
          Got a project, collaboration, or question? I&apos;m always excited to meet new people and explore ideas.  
          Feel free to reach out — I’ll get back to you as soon as I can!
        </h2>
      </div>
      <ContactForm/>
            {/* Alternative contact */}
            <div className="text-center text-sm text-neutral-500 dark:text-neutral-400">
      Not into forms? No worries — just email me at {""}
        <a href="miracalakus@gmail.com" className="hover:underline text-blue-500">
          miracalakus@gmail.com
        </a>
      </div>
      </div>
  );
}
