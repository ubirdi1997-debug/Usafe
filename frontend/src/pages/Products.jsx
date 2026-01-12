import React from 'react';
import { products } from '../data/mockData';
import { CheckCircle2, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="dark-container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="display-large">uSafe Product Ecosystem</h1>
          <p className="body-large">
            A comprehensive suite of security-first applications designed to protect and empower your digital life
          </p>
        </div>
      </section>

      {/* Products Detail Section */}
      <section className="products-detail-section">
        {products.map((product, index) => (
          <div key={product.id} className={`product-detail-card ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="product-detail-content">
              {product.status !== 'live' && (
                <span className="badge-coming-soon">{product.status === 'upcoming' ? 'Coming Soon' : 'Planned'}</span>
              )}
              <h2 className="display-medium">{product.name}</h2>
              <p className="body-large product-detail-description">
                {product.description}
              </p>
              
              <div className="product-features-detail">
                <h3 className="heading-3">Key Features</h3>
                <ul className="product-features-list">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.status === 'live' && (
                <div className="product-actions">
                  <button className="btn-primary">
                    <Download size={20} />
                    Download App
                  </button>
                  <button className="btn-secondary">
                    Learn More
                    <ArrowRight size={20} />
                  </button>
                </div>
              )}
            </div>
            
            <div className="product-detail-visual">
              {product.icon ? (
                <img src={product.icon} alt={product.name} className="product-detail-icon" />
              ) : (
                <div className="product-detail-placeholder">
                  <ExternalLink size={80} />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="display-large">Get Early Access</h2>
          <p className="body-large">
            Be the first to know when new products launch
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;