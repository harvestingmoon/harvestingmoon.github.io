import ThemeToggle from './ThemeToggle';

// always-visible controls, so writing/dark mode never need a scroll to the top
export default function TopBar() {
  return (
    <div className="top-bar">
      <a href="#/blog">writing</a>
      <ThemeToggle />
    </div>
  );
}
