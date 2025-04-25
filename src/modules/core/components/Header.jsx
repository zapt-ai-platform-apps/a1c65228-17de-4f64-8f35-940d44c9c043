import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Logo from './Logo';

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Validator Ide', path: '/validator' },
    { name: 'Panduan Bisnis', path: '/guide' },
    { name: 'Tips & Trik', path: '/tips' },
    { name: 'Template', path: '/templates' },
    { name: 'Riset Pasar', path: '/market-research' },
    { name: 'Generator RBX76S', path: '/generator' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${scrolled ? 'bg-white nav-shadow' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  isActive ? 'navbar-link-active' : 'navbar-link'
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="md:hidden text-dark-500 p-2 cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-3 py-3">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  className={({ isActive }) => 
                    isActive ? 'navbar-link-active pl-2 border-l-4 border-primary-500' : 'navbar-link pl-2'
                  }
                  onClick={() => setMobileMenuOpen(false)}
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}