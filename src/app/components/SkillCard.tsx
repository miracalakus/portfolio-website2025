export default function SkillCard(){
    return(

    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">

      {/* Front-end Development */}
  <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl shadow-sm space-y-4">
    <h3 className="text-xl font-semibold">Front-end Development</h3>
    <ul className="space-y-1 text-base list-disc list-inside">
      <li>React(Next.js)</li>
      <li>React Native</li>
      <li>Vue.js</li>
      <li>Tailwind</li>
      <li>Sanity CMS</li>
    </ul>
  </div>

  {/* UX/UI Design */}
  <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl shadow-sm space-y-4">
    <h3 className="text-xl font-semibold">UX/UI Design</h3>
    <ul className="space-y-1 text-base list-disc list-inside">
      <li>Figma & Adobe XD</li>
      <li>Adobe Photoshop & Illustrator</li>
      <li>Usability Heuristics by NNG</li>
      <li>CMD Methods</li>
      <li>Wireframing & Prototyping </li>
    </ul>
  </div>

  {/* Motion & 3D */}
  <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl shadow-sm space-y-4">
    <h3 className="text-xl font-semibold">Motion Design</h3>
    <ul className="space-y-1 text-base list-disc list-inside">
      <li>Blender</li>
      <li>After Effects</li>
    </ul>
  </div>
</div>
    )
}
