import { ArrowDown } from 'lucide-react';
import TestComp from './TestComp';

export default function Introduction() {
  return (
    <section className="h flex flex-col items-center justify-center text-center">
      <div className="text-center mt-12">
  <h1 className="font-title">Hi, I'm Mirac Alakus</h1>
  <div className="text-black font-semibold mt-1 flex justify-center gap-2">
    <h3 className="px-6 py-3 bg-amber-200 rounded-4xl border-2 border-gray-800 ">
      Front-End Developer
    </h3>
    <div className="px-6 py-3 bg-blue-200 rounded-4xl border-2 border-gray-800 ">
      UI & UX Designer
    </div>
    <div className="px-6 py-3 bg-red-200 rounded-4xl border-2 border-gray-800 ">
      Motion Designer
    </div>
  </div>
</div>
      <div className='mt-5'>
        <TestComp/>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}
