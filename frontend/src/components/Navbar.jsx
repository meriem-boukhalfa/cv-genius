import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// ============================================
// CONSTANTS
// ============================================

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com", icon: "🐙" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
];

// ============================================
// NAVBAR COMPONENT
// ============================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-white shadow-sm border-b border-slate-200 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">✨</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                CV Genius
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                Professional ATS Resume Generator
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 rounded-lg hover:bg-blue-50 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Social Links - Desktop */}
            <div className="hidden sm:flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 flex items-center justify-center transition-all duration-200 text-lg"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
              Generate Resume
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in fade-in slide-in-from-top-2 duration-200 border-t border-slate-200 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="px-4 py-3 border-t border-slate-200 flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-center transition-all duration-200"
                  title={link.label}
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <button className="w-full mx-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md">
              Generate Resume
            </button>
          </div>
        )}
      </div>
    </header>
  );
}