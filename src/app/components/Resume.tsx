'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-2 space-y-16">

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 id='Resume' className="md:text-7xl sm:text-3xl font-title">Experience & Education</h1>
        <p className="text-lg font-body text-neutral-600 dark:text-neutral-300">
          My background in UX/UI design, front-end development, and motion design.
        </p>
      </div>

      {/* Experience Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Experience</h2>

        {[
          {
            title: 'Internship - Front-End Development - Squadra MLC',
            period: '2023-2024',
            description:
            'During my internship at Squadra MLC, I took full ownership of both the UX/UI design and front-end development for the Powertext Lite project. Working closely with marketing specialists, I translated business needs into intuitive user flows, interactive wireframes, and a clean, user-friendly interface. I developed the front-end using Vue.js, focusing on reusable components and a seamless user experience. This project gave me real-world experience in collaborating with stakeholders and turning ideas into functional, client-ready applications.'
          },
          {
            title: 'Internship - Van de Ven Bouw en Ontwikkeling',
            period: '2018-2019',
            description:
            'During this internship, I supported the construction site manager with daily coordination and site operations, gaining hands-on experience in construction processes, planning, and teamwork on active building projects.'
        },
          {
            title: 'Internship - Forum Architecten & Planners',
            period: '2020',
            description:
            'Due to COVID-19, my activities at Forum Architecten were limited. I mainly worked independently, completing school projects based on existing architectural assignments from the firm.'
          },
          {
            title: 'Internship - Heerkens van Bavel Service & Onderhoud',
            period: '2021',
            description:
            'Here I supported the project manager, helping coordinate with clients and subcontractors, gaining experience in project administration, communication, and construction project management.'
          },
        ].map((item, i) => (
          <Disclosure key={i}>
            {({ open }) => (
              <div>
                <DisclosureButton className="w-full cursor-pointer flex justify-between items-center bg-neutral-100 dark:bg-neutral-800 px-4 py-3 rounded-lg text-left text-lg font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700">
                  <span>{item.title}</span>
                  <ChevronUpIcon
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-4 pt-2 pb-4 text-neutral-600 dark:text-neutral-300 text-sm">
                  <p className="mb-1 italic">{item.period}</p>
                  <p>{item.description}</p>
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>

      {/* Education Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Education</h2>

        {[
          {
            title: 'ROC - Middenkaderfunctionaris Bouw, MBO Niveau 4',
            period: '2017 - 2021',
            description:
            'During this period, I focused on construction details, project management, and technical drawing. I worked with tools like AutoCAD and Revit, and gained hands-on experience through multiple internships in the construction sector.'
          },
          {
            title: 'Fontys - HBO ICT & Media Design, Bachelor',
            period: '2021 - Present',
            description:
            'Throughout my studies in HBO ICT & Media Design, I developed strong skills in UX/UI design, user research methods, and front-end development. I learned to translate user needs into interactive prototypes, perform usability tests, and apply frameworks such as Nielsen Norman heuristics and CMD methods. On the development side, I built responsive applications using HTML, CSS, JavaScript, and frameworks like React and Vue. Projects combined creative concepting with technical execution, giving me a complete view of how design and technology come together to create user-centered digital experiences. Currently in the final phase of my Bachelor program, focusing on UX/UI design and front-end development.'
        },
          {
            title: 'Reducations - Animation Academy',
            period: '2024 - 2025',
            description:
            'During this minor, I focused on 2D and 3D animation, covering key areas like storytelling, character design, rigging, lip-syncing, lighting, and rendering. I worked extensively in Blender and After Effects, learning to bring characters and environments to life through the animation principles. Through practical assignments, I developed a strong foundation in both technical execution and creative visual storytelling.'
          },
        ].map((item, i) => (
          <Disclosure key={i}>
            {({ open }) => (
              <div>
                <DisclosureButton className="w-full cursor-pointer flex justify-between items-center bg-neutral-100 dark:bg-neutral-800 px-4 py-3 rounded-lg text-left text-lg font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700">
                  <span>{item.title}</span>
                  <ChevronUpIcon
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-4 pt-2 pb-4 text-neutral-600 dark:text-neutral-300 text-sm">
                  <p className="mb-1 italic">{item.period}</p>
                  <p>{item.description}</p>
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
{/* Download PDF */}
    <div className='text-center'>
      <Link
        href="/assets/CV_Mirac_Alakus.pdf"
        target="_blank"
        download
        className="btn font-subtitle"
        rel="noopener noreferrer"
      >
        Download CV
        <Download className="w-5 h-5" />
      </Link>
    </div>
  </div>
);
}
