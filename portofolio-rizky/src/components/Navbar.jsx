import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter text-emerald-500">
          RIZKY<span className="text-zinc-100">.DEV</span>
        </Link>
        
        {isHome ? (
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
            <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a></li>
          </ul>
        ) : (
          <Link to="/" className="text-sm font-medium text-emerald-500 hover:text-emerald-400">
            &larr; Back to Home
          </Link>
        )}
      </div>
    </nav>
  );
}