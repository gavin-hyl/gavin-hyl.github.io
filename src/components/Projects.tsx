import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A revolutionary AI-powered platform',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a',
    tags: ['React', 'TypeScript', 'AI'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Project Beta',
    description: 'Blockchain-based secure messaging',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    tags: ['Web3', 'Solidity', 'React'],
    github: '#',
    demo: '#'
  },
  // Add more projects as needed
];

export function Projects() {
  return (
    <section className="py-20 bg-black text-white" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 transition-transform hover:-translate-y-2">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="hover:text-blue-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.demo} className="hover:text-blue-400 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}