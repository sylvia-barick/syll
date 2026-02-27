import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import aegisImage from '../media/aegis.jpeg';
import comicImage from '../media/comic.jpeg';
import convergeImage from '../media/converge.jpeg';
import nexusImage from '../media/nexusshield.jpeg';
import mindpalImage from '../media/mindpal.jpg';
import xencruitImage from '../media/xencruit.png';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: StaticImageData;
  imageStyle?: React.CSSProperties;
}

const ProjectsShowcase = () => {
  const [showAll, setShowAll] = React.useState(false);

  const projects: Project[] = [
    {
      title: 'AEGIS Smart Protocol',
      description:
        'AEGIS automates disaster response using AI and blockchain for rapid detection, verified decisions, transparent fund disbursement, and real-time dashboards—eliminating delays, reducing fraud, and ensuring accountable, life-saving emergency relief.',
      tech: [
        'Solidity',
        'HTML',
        'React',
        'Node.js',
        'JavaScript',
        'Flask',
        'Python',
        'Web3',
        'Blockchain',
        'Tailwind CSS',
      ],
      github: 'https://github.com/debojyoti10CC/Aegis-front',
      live: 'https://aegis-front.vercel.app/',
      image: aegisImage,
      imageStyle: { border: '3px solid black' },
    },
    {
      title: 'Mindpal',
      description:
        'Mindpal is an AI-powered VR therapy platform combining immersive environments, audio therapy, real-time monitoring, and intelligent stimulation to improve mental health, reduce stress, and enhance neurological well-being.',
      tech: ['VR', 'AI/ML', 'React', 'Node.js', 'Express', 'MongoDB', 'Web APIs'],
      github: 'https://github.com/sylvia-barick/mindpal222',
      live: 'https://mindpal222.vercel.app/',
      image: mindpalImage,
      imageStyle: { border: '3px solid black' },

    },
    {
      title: 'Xencruit',
      description:
        'Recruitix is a deterministic AI assessment and proctoring platform delivering reproducible, explainable grading through semantic similarity scoring, behavioral simulation, and parameterized integrity monitoring, ensuring transparent, fair, and auditable remote evaluations.',
      tech: ['React', 'TypeScript', 'Vite', 'Firebase', 'Firestore', 'Shadcn UI', 'Framer Motion', 'Event-Driven Scoring'],
      github: 'https://github.com/debojyoti10CC/recruitx',
      live: 'https://openlayers.org/bench/',
      image: xencruitImage,
      imageStyle: { border: '3px solid black' }
    },
    // Placeholder projects to be filled with user data
    {
      title: 'IEM ComicVerse',
      description: 'IEM ComicVerse is a vibrant full-stack event website powering Eastern India’s largest pop-culture convention, featuring interactive schedules, funky animations, a playful chatbot, real-time CMS updates, and smooth production deployment experience.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
      github: 'https://github.com/sylvia-barick',
      live: 'https://iemcomicverse.in/',
      image: comicImage,
      imageStyle: { border: '3px solid black' },
    },
    {
      title: 'Nexus Shield',
      description: 'Nexus-Shield is an AI-driven, blockchain-anchored contract lifecycle management platform enabling secure, transparent, and auditable cross-border contracts through legal intelligence, immutable versioning, and verifiable approvals.',
      tech: ['Next.js', 'React', 'Stellar Blockchain', 'Freighter', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/sylvia-barick/stellar_cipher',
      live: 'https://stellar-fz6e.vercel.app/',
      image: nexusImage,
      imageStyle: { border: '3px solid black' },
    },
    {
      title: 'Converge',
      description: 'CONVERGE 2026 is a three-day hybrid technical and creative fest by IEEE CS IEM, featuring workshops, competitions, coding contests, talent showcases, games carnival, and networking opportunities for students.',
      tech: ['TypeScript', 'Vite', 'React', 'Tailwind CSS', 'ESLint', 'firebase'],
      github: 'https://github.com/sylvia-barick/converge',
      live: 'https://www.converge.website/',
      image: convergeImage,
      imageStyle: { border: '3px solid black' },
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="relative w-full py-16 p-8 bg-white dark:bg-black">
      {/* Grid background */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="max-w-full mx-auto px-5 relative z-10">
        <div
          className="w-full bg-bg border-4 border-black dark:bg-darkBg
                            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                            transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-300 p-6 mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-black text-black text-center dark:text-darkText">
            Projects I&#39;ve Worked On 🚀
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-bg p-6 rounded-lg transform transition-transform hover:scale-105 dark:bg-darkBg"
              style={{
                border: '3px solid black',
                boxShadow: '8px 8px 0px 0px #000000',
              }}
            >
              <div
                className="relative mb-4 overflow-hidden rounded-lg h-48 w-full"
                style={
                  project.imageStyle ? project.imageStyle : {}
                }
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  width={600}
                  height={400}
                />
              </div>

              <h3 className="text-2xl font-bold mb-2 transform">{project.title}</h3>

              <p className="text-text dark:text-darkText mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-semibold bg-yellow-300 dark:text-black"
                    style={{
                      border: '2px solid black',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-black font-bold transform transition-transform hover:-translate-y-1 hover:shadow-lg dark:text-black"
                  style={{
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px 0px #000000',
                  }}
                >
                  <Github size={20} />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-400 text-black font-bold transform transition-transform hover:-translate-y-1 hover:shadow-lg dark:text-black"
                  style={{
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px 0px #000000',
                  }}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-pink-500 text-white font-black text-xl hover:bg-pink-600 transition-all transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
              style={{
                border: '4px solid black',
                boxShadow: '8px 8px 0px 0px #000000',
              }}
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
