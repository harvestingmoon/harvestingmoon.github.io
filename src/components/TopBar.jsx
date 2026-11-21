import ThemeToggle from './ThemeToggle';

// back link on the left inside the blog, dark mode on the right everywhere.
// The home page uses the contact row's `writing` link instead, so no link here.
export default function TopBar({ path }) {
  const back = path.startsWith('#/blog/')
    ? { label: '← writing', href: '#/blog' }
    : path.startsWith('#/blog')
      ? { label: '← home', href: '#/' }
      : null;

  return (
    <div className="top-bar">
      {back && <a href={back.href}>{back.label}</a>}
      <ThemeToggle />
    </div>
  );
}
