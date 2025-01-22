import React from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Projects />
      <Blog />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;