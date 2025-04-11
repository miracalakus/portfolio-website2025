import { ArrowDown } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="h flex flex-col items-center justify-center text-center">
      <div className="text-center mt-12 w-full">
        <h1 className="font-title">Hi, I'm Miraç Alakuş</h1> 
        <div className="px-4 sm:px-12 md:px-20 lg:px-40">
          {/* Full version for tablets and up */}
          <h2 className="hidden sm:block text-black font-title dark:text-white">
            With a focus on front-end development 💻, UI/UX design 🎨, and motion 🎥, the goal is to create digital experiences that balance function and feeling.
          </h2>
         {/* Short version for mobile only */}
          <h2 className="block sm:hidden text-black font-title dark:text-white">
            I design and build digital experiences with front-end💻, UI/UX🎨, and motion🎥 in focus.
          </h2>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </div>
    </section>
  );
}
