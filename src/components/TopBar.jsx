import ThemeToggle from './ThemeToggle';

// always-visible controls: back link on the left, dark mode on the right
export default function TopBar({ path }) {
  const back = path.startsWith('#/blog/')
    ? { label: '← writing', href: '#/blog' }
    : path.startsWith('#/blog')
      ? { label: '← home', href: '#/' }
      : { label: 'writing', href: '#/blog' };

  return (
    <div className="top-bar">
      <a href={back.href}>{back.label}</a>
      <ThemeToggle />
    </div>
  );
}
