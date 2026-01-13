import React from 'react';
import { Helmet } from 'react-helmet-async';
import Spline from '@splinetool/react-spline';
import { products, services } from '../data/mockData';
import { ArrowRight, Shield, Lock, Award, CheckCircle2, Smartphone, Globe, Layout, Palette, TrendingUp, Zap, FileText, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Smartphone,
  Globe,
  Layout,
  Palette,
  TrendingUp,
  Zap,
  FileText,
  Shield,
  Rocket
};

const Home = () => {
  const siteUrl = 'https://www.usafe.in';
  const homepageUrl = `${siteUrl}/`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Urbanesafe LLP",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917696313676",
      "contactType": "Customer Service",
      "email": "admin@usafe.in"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "uSafe",
    "url": siteUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Urbanesafe LLP"
    }
  };

  return (
    <div className="dark-container">
      <Helmet>
        <title>Digital Business Solutions for Modern Businesses | uSafe</title>
        <meta name="description" content="uSafe by Urbanesafe LLP delivers privacy-first digital business solutions and secure digital products for modern startups and enterprises." />
        <meta property="og:title" content="Digital Business Solutions for Modern Businesses | uSafe" />
        <meta property="og:description" content="uSafe by Urbanesafe LLP delivers privacy-first digital business solutions and secure digital products for modern startups and enterprises." />
        <meta property="og:url" content={homepageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="uSafe" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Business Solutions for Modern Businesses | uSafe" />
        <meta name="twitter:description" content="uSafe by Urbanesafe LLP delivers privacy-first digital business solutions and secure digital products for modern startups and enterprises." />
        <link rel="canonical" href={homepageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </Helmet>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="display-huge">
              Digital Business Solutions Built for Privacy, Security, and Scale
            </h1>
            <p className="body-large hero-description">
              uSafe by Urbanesafe LLP delivers privacy-first digital business solutions and secure digital products designed for modern startups and enterprises. Our technology solutions prioritize security, privacy, and scalability without compromising on performance.
            </p>
            <p className="body-large hero-description" style={{ marginTop: '20px' }}>
              From secure authentication apps to cloud backup solutions, we build digital tools that help businesses operate with confidence in an increasingly connected world.
            </p>
            <div className="hero-buttons">
              <Link to="/products/usafe-one" className="btn-primary">
                Explore Products
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Started
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <Shield className="stat-icon" size={24} />
                <div>
                  <div className="stat-number">Security-First</div>
                  <div className="stat-label">Every Solution</div>
                </div>
              </div>
              <div className="stat-item">
                <Award className="stat-icon" size={24} />
                <div>
                  <div className="stat-number">Enterprise-Grade</div>
                  <div className="stat-label">Quality</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="spline-container">
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </div>
        </div>
      </section>

      {/* Secure Digital Products Section */}
      <section className="products-section">
        <div className="section-header">
          <h2 className="display-large">Secure Digital Products for Modern Businesses</h2>
          <p className="body-medium section-description">
            Explore our suite of <Link to="/products" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>privacy-first digital products</Link> designed to protect and empower your business operations.
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.status !== 'live' && (
                <span className="badge-coming-soon">Coming Soon</span>
              )}
              {product.icon ? (
                <img src={product.icon} alt={product.name} className="product-icon" />
              ) : (
                <div className="product-icon-placeholder">
                  <Shield size={40} />
                </div>
              )}
              <h3 className="heading-2">{product.name}</h3>
              <p className="body-medium product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircle2 size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              {product.status === 'live' ? (
                <Link to={`/products/${product.id}`} className="btn-primary btn-small">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              ) : (
                <Link to={`/products/${product.id}`} className="btn-secondary btn-small">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Privacy-First Technology Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="display-large">Privacy-First Technology by Design</h2>
          <p className="body-medium section-description">
            Every solution we build prioritizes privacy and security from the ground up, ensuring your business data remains protected and under your control.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-container">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="heading-3">{service.title}</h3>
                <p className="body-small">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* uSafe Product Ecosystem Section */}
      <section className="trust-section">
        <div className="trust-content">
          <div className="trust-left">
            <h2 className="display-medium">uSafe Product Ecosystem</h2>
            <p className="body-large" style={{ marginTop: '20px', marginBottom: '20px' }}>
              Our <Link to="/products" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>secure digital products</Link> include <Link to="/products/usafe-one" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>privacy-first authentication apps</Link>, encrypted messaging, secure cloud backup, and business tools designed for modern enterprises.
            </p>
            <h2 className="display-medium" style={{ marginTop: '40px' }}>Why Businesses Choose uSafe</h2>
            <p className="body-large">
              At Urbanesafe LLP, we prioritize security and privacy in every solution we build. Our mission is to provide secure, reliable digital solutions that help small businesses and startups grow with confidence.
            </p>
            <div className="trust-features">
              <div className="trust-feature">
                <Lock className="trust-icon" size={24} />
                <div>
                  <h4 className="heading-3">Security-First Approach</h4>
                  <p className="body-small">Every application and service is built with security as the foundation</p>
                </div>
              </div>
              <div className="trust-feature">
                <Shield className="trust-icon" size={24} />
                <div>
                  <h4 className="heading-3">Privacy Focused</h4>
                  <p className="body-small">Your data stays yours. No tracking, no ads, no compromises</p>
                </div>
              </div>
              <div className="trust-feature">
                <Award className="trust-icon" size={24} />
                <div>
                  <h4 className="heading-3">Enterprise Quality</h4>
                  <p className="body-small">Professional-grade solutions suitable for businesses of all sizes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="trust-right">
            <div className="trust-image-container">
              <div className="trust-badge">
                <Shield size={80} />
                <p className="body-large">Trusted by Businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built by Urbanesafe LLP Section */}
      <section className="products-detail-section">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <h2 className="display-medium">Built by Urbanesafe LLP</h2>
            <p className="body-large product-detail-description">
              Urbanesafe LLP specializes in building privacy-first digital business solutions and secure technology products. Our team combines expertise in security, privacy engineering, and business technology to deliver solutions that scale with your business.
            </p>
            <p className="body-large product-detail-description">
              Whether you're a startup looking for secure authentication tools or an enterprise needing privacy-focused cloud solutions, we build digital products that protect your data while enabling growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="display-large">Ready to Get Started?</h2>
          <p className="body-large">
            Let's discuss how uSafe can help secure and grow your business
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Contact Us
              <ArrowRight size={20} />
            </Link>
            <a href="mailto:admin@usafe.in" className="btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;