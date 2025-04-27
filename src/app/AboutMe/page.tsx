'use client';

import Link from "next/link";
import Resume from "../components/Resume"
import SkillCard from "../components/SkillCard";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AboutPage() {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const resumeSection = document.getElementById("Resume");
      if (resumeSection) {
        const rect = resumeSection.getBoundingClientRect();
        setShowScrollIcon(rect.top > window.innerHeight * .5); // Show until we scroll close to resume
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
      <div className="max-w-5xl mx-auto px-6 xl:py-0 sm:py-10 space-y-20">
        <div className="text-center space-y-4">
          <h1 className="md:text-7xl sm:text-3xl font-title">A Bit About Me</h1>
            <p className="xl:px-20 md:px-2 font-subtitle text-[#222222] dark:text-white">
              I&apos;m a UX/UI designer, front-end developer, and motion enthusiast with a passion for crafting smooth digital experiences. 
              Whether it&apos;s designing intuitive interfaces, bringing characters to life in 3D, or coding responsive layouts, 
              I love blending creativity with technology. I&apos;m always exploring new ways to make ideas feel alive — through smart design, 
              thoughtful interaction, and a touch of motion.
          </p>
        </div>
      <div className=" xl:mb-72 sm:mb-10">
        <SkillCard/>
      </div>

{/* Floating Down Arrow */}
    {showScrollIcon && (
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 animate-bounce">
        <Link href="#Resume" className=" transition-transform ">
          <ChevronDown className=" sm:w-8 sm:h-8 md:w-10 md:h-10 hover:-translate-y-1/6" />
        </Link>
      </div>
    )}

  <div id="Resume">
    <Resume/>
  </div>
    <div className="text-center">
      <p className="text-xl font-subtitle mb-10 font-bold">Currently open for an internship, freelance work and other collaborations</p>     
        <Link
          href="/Contact"
          className="btn font-subtitle"
        >
          Let’s Work Together
        </Link>
      </div>
    </div>
  );
}
  