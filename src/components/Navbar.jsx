
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[70px]">
        <a
          href="/"
          className="font-bold text-xl flex items-center gap-2 text-sky-600"
        >
          <img src="https://internshala.com//static/images/common/new_internshala_logo.svg" alt="Internshala" className="h-7" />
        </a>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#internships" className="hover:text-sky-600">
            Internships
          </a>
          <a href="#courses" className="hover:text-sky-600">
            Courses
          </a>
          <a href="#jobs" className="hover:text-sky-600">
            Jobs
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t px-4 py-2 space-y-2">
          <a
            href="#internships"
            className="block hover:text-sky-600"
            onClick={() => setIsOpen(false)}
          >
            Internships
          </a>
          <a
            href="#courses"
            className="block hover:text-sky-600"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </a>
          <a
            href="#jobs"
            className="block hover:text-sky-600"
            onClick={() => setIsOpen(false)}
          >
            Jobs
          </a>
        </div>
      )}
    </nav>
  );
}