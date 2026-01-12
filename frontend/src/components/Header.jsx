import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/legal-services', label: 'Legal Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleLoginClick = () => {
    window.open('https://crm.usafe.in', '_blank');
  };

  return (
    <header className="dark-header">
      <Link to="/" className="logo-container">
        <img 
          src="https://customer-assets.emergentagent.com/job_17c03c47-4240-49cd-8b07-32bdaf64363e/artifacts/9i1wxrfk_urbanesafe_it-removebg-preview.png" 
          alt="uSafe Logo" 
          className="dark-logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="dark-nav desktop-nav">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`dark-nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;