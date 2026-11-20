import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Interests from './components/CoreInterest';
import Mentors from './components/Mentors';
import Research from './components/Research';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Blog from './components/Blog';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // hash routing keeps GitHub Pages from 404ing on /blog/<slug>
  if (hash.startsWith('#/blog')) return <Blog path={hash} />;

  return (
    <>
      <Hero />
      <Interests />
      <Mentors />
      <Research />
      <Internships />
      <Projects />
    </>
  );
}
