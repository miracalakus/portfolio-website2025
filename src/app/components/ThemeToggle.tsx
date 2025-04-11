// 'use client';

// import { useEffect, useState } from 'react';
// import confetti from 'canvas-confetti';


// const themes = ['auto', 'light', 'dark', 'party'] as const;
// type Theme = typeof themes[number];

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<Theme>('auto');
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme') as Theme | null;
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const resolved = storedTheme || 'auto';
//     setTheme(resolved);

//     const active = resolved === 'auto'
//       ? prefersDark ? 'dark' : 'light'
//       : resolved;

//     document.documentElement.className = active;

//     // Live system updates
//     const listener = (e: MediaQueryListEvent) => {
//       if (theme === 'auto') {
//         document.documentElement.className = e.matches ? 'dark' : 'light';
//       }
//     };
//     const media = window.matchMedia('(prefers-color-scheme: dark)');
//     media.addEventListener('change', listener);
//     return () => media.removeEventListener('change', listener);
//   }, [theme]);

//   const switchTheme = (newTheme: Theme) => {
//     setTheme(newTheme);
//     setOpen(false);

//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const finalTheme = newTheme === 'auto'
//       ? prefersDark ? 'dark' : 'light'
//       : newTheme;

//     document.documentElement.className = finalTheme;

//     if (newTheme === 'auto') {
//       localStorage.removeItem('theme');
//     } else {
//       localStorage.setItem('theme', newTheme);
//     }

//     if (newTheme === 'party') {
//       confetti({ particleCount: 150, spread: 180, origin: { y: 0.6 } });
//     }
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setOpen(!open)}
//         className="px-3 py-1 rounded bg-[var(--primary)] text-white font-medium hover:opacity-90"
//       >
//         Theme: {theme}
//       </button>
//       {open && (
//         <div className="absolute right-0 mt-2 w-36 rounded bg-white shadow-md z-50 text-black">
//           {themes.map((t) => (
//             <button
//               key={t}
//               onClick={() => switchTheme(t)}
//               className={`block w-full text-left px-4 py-2 hover:bg-gray-200 ${
//                 t === theme ? 'font-bold' : ''
//               }`}
//             >
//               {t === 'party' ? 'Party 🎉' : t.charAt(0).toUpperCase() + t.slice(1)}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
