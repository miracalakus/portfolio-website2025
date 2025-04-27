import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Introduction() {
  return (
    <section className="h flex flex-col items-center justify-center text-center">
      <div className="text-center mt-12 w-full">
        <h1 className="font-title px-2 leading-tight  md:font-title">Hi, I&apos;m Miraç Alakuş</h1> 
        <div className="px-4 py-8 sm:px-12 md:px-32 lg:px-22">
          {/* Full version for tablets and up */}
          <h2 className="hidden md:text-2xl lg:text-4xl xl:text-5xl xl:px-44 lg:px-10 md:block md:px-20 uppercase text-[#222222] font-subtitle dark:text-white">
            With a focus on front-end development 💻, UX/UI design 🎨, and motion 🎥, the goal is to create digital experiences that balance function and feeling.
          </h2>
         {/* Short version for mobile only */}
          <h2 className="block leading-8 md:hidden text-[#222222] font-subtitle dark:text-white">
            I design and build digital experiences with front-end💻, UX/UI🎨, and motion🎥 in focus.
          </h2>
        </div>
      </div>
      {/* Scroll Indicator */}
      <Link href='#work' className="absolute bottom-10 animate-bounce hover:-translate-y-1/6">
        <ChevronDown className="sm:w-8 sm:h-8 md:w-10 md:h-10"  />
      </Link>
    </section>
  );
}
