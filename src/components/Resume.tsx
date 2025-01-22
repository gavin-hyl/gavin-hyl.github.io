import React from 'react';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';

export function Resume() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="resume">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-400">
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
                <h4 className="font-bold">Senior Developer</h4>
                <p className="text-gray-400">Tech Corp • 2020 - Present</p>
                <p className="mt-2">Led development of multiple high-impact projects...</p>
              </div>
              {/* Add more experience items */}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-400">
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
                <h4 className="font-bold">Master's in Computer Science</h4>
                <p className="text-gray-400">Tech University • 2018 - 2020</p>
                <p className="mt-2">Specialized in AI and Machine Learning</p>
              </div>
              {/* Add more education items */}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}