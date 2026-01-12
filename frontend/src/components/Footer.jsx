import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_17c03c47-4240-49cd-8b07-32bdaf64363e/artifacts/9i1wxrfk_urbanesafe_it-removebg-preview.png" 
              alt="uSafe Logo" 
              className="footer-logo"
            />
            <p className="footer-description">
              Urbanesafe LLP builds secure apps, websites, and provides marketing and legal services for small businesses, startups, and professionals.
            </p>
            <div className="footer-contact">
              <a href="mailto:admin@usafe.in" className="footer-contact-link">
                <Mail size={16} />
                admin@usafe.in
              </a>
              <a href="https://usafe.in" className="footer-contact-link" target="_blank" rel="noopener noreferrer">
                <Globe size={16} />
                usafe.in
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3 className="footer-heading">Products</h3>
            <ul className="footer-links">
              <li><Link to="/products#usafe-one">uSafe One</Link></li>
              <li><Link to="/products#usafe-cloud">uSafe Cloud</Link></li>
              <li><Link to="/products#usafe-tools">uSafe Tools</Link></li>
              <li><Link to="/products#usafe-chat">uSafe Chat</Link></li>
              <li><Link to="/products#usafe-legal">uSafe Legal</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services#app-dev">Mobile App Development</Link></li>
              <li><Link to="/services#web-dev">Web Development</Link></li>
              <li><Link to="/services#website">Website Design</Link></li>
              <li><Link to="/services#seo">SEO & Marketing</Link></li>
              <li><Link to="/legal-services">Legal Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Urbanesafe LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;