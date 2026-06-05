import { socialLinks } from '../data';

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400 font-mono">
          &copy; {new Date().getFullYear()} Lee Wen Yeong
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
              aria-label={link.label}
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
