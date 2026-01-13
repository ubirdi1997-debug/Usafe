import React from 'react';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/mockData';
import { CheckCircle2, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const siteUrl = 'https://usafe.in';
  return (
    <div className="dark-container">
      <Helmet>
        <title>uSafe Product Ecosystem - Security-First Applications | uSafe</title>
        <meta name="description" content="Explore the uSafe product ecosystem - a comprehensive suite of security-first applications including authenticator apps, cloud storage, business tools, and communication platforms." />
        <meta property="og:title" content="uSafe Product Ecosystem - Security-First Applications" />
        <meta property="og:description" content="Explore the uSafe product ecosystem - a comprehensive suite of security-first applications designed to protect and empower your digital life." />
        <meta property="og:url" content={`${siteUrl}/products`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteUrl}/products`} />
      </Helmet>
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

              <div className="product-actions">
                {product.status === 'live' && (
                  <button className="btn-primary">
                    <Download size={20} />
                    Download App
                  </button>
                )}
                <Link to={`/products/${product.id}`} className="btn-secondary">
                  Learn More
                  <ArrowRight size={20} />
                </Link>
              </div>
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