import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Interests from './components/CoreInterest';
import Mentors from './components/Mentors';
import Research from './components/Research';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Blog from './components/Blog';
import TopBar from './components/TopBar';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // hash routing keeps GitHub Pages from 404ing on /blog/<slug>
  if (hash.startsWith('#/blog'))
    return (
      <>
        <TopBar />
        <Blog path={hash} />
      </>
    );

  return (
    <>
      <TopBar />
      <Hero />
      <Interests />
      <Mentors />
      <Research />
      <Internships />
      <Projects />
    </>
  );
}
