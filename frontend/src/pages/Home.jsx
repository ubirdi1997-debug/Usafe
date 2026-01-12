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
  const siteUrl = 'https://usafe.in';
  return (
    <div className="dark-container">
      <Helmet>
        <title>uSafe - Secure Digital Solutions for Modern Businesses | Urbanesafe LLP</title>
        <meta name="description" content="Urbanesafe LLP builds security-first applications, websites, and provides comprehensive marketing and legal services for small businesses, startups, and professionals." />
        <meta property="og:title" content="uSafe - Secure Digital Solutions for Modern Businesses" />
        <meta property="og:description" content="Urbanesafe LLP builds security-first applications, websites, and provides comprehensive marketing and legal services for small businesses, startups, and professionals." />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="uSafe" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="uSafe - Secure Digital Solutions for Modern Businesses" />
        <meta name="twitter:description" content="Urbanesafe LLP builds security-first applications, websites, and provides comprehensive marketing and legal services." />
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="display-huge">
              Secure Digital Solutions for Modern Businesses
            </h1>
            <p className="body-large hero-description">
              Urbanesafe LLP builds security-first applications, websites, and provides comprehensive marketing and legal services for small businesses, startups, and professionals.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn-primary">
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

      {/* Products Ecosystem Section */}
      <section className="products-section">
        <div className="section-header">
          <h2 className="display-large">uSafe Ecosystem</h2>
          <p className="body-medium section-description">
            A comprehensive suite of security-first applications and services designed for modern businesses
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
              {product.status === 'live' && (
                <button className="btn-primary btn-small">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="display-large">Professional Services</h2>
          <p className="body-medium section-description">
            Comprehensive solutions from development to legal compliance
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

      {/* Trust Section */}
      <section className="trust-section">
        <div className="trust-content">
          <div className="trust-left">
            <h2 className="display-medium">Built on Trust, Security, and Reliability</h2>
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