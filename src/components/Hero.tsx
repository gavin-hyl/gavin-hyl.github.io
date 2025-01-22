import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-5xl px-4 space-y-8 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 animate-fade-in">
            Welcome to My Universe
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-delay">
            Full-Stack Developer • Tech Enthusiast • Problem Solver
          </p>
          <div className="flex justify-center gap-6 animate-fade-in-delay-2">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:your@email.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <ArrowDown className="absolute bottom-8 animate-bounce w-8 h-8" />
    </div>
  );
}