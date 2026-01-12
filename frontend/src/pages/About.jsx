import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Target, Award, Users, Zap, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const siteUrl = 'https://usafe.in';
  return (
    <div className="dark-container">
      <Helmet>
        <title>About Us - Urbanesafe LLP | uSafe</title>
        <meta name="description" content="Learn about Urbanesafe LLP - building secure, reliable digital solutions for small businesses, startups, and professionals. Security-first approach, trust, and quality excellence." />
        <meta property="og:title" content="About Us - Urbanesafe LLP | uSafe" />
        <meta property="og:description" content="Learn about Urbanesafe LLP - building secure, reliable digital solutions for small businesses, startups, and professionals." />
        <meta property="og:url" content={`${siteUrl}/about`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteUrl}/about`} />
      </Helmet>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="display-large">About Urbanesafe LLP</h1>
          <p className="body-large">
            Building secure, reliable digital solutions for small businesses, startups, and professionals
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="display-medium">Our Mission</h2>
            <p className="body-large">
              At Urbanesafe LLP, our mission is simple: to provide security-first digital solutions that help businesses grow with confidence. We believe that security and privacy should be the foundation of every digital product, not an afterthought.
            </p>
            <p className="body-large">
              We focus on serving small businesses, startups, and professionals who need reliable, secure, and affordable digital solutions without compromising on quality.
            </p>
          </div>
          <div className="mission-visual">
            <div className="mission-icon-grid">
              <div className="mission-icon-item">
                <Shield size={60} />
              </div>
              <div className="mission-icon-item">
                <Lock size={60} />
              </div>
              <div className="mission-icon-item">
                <Zap size={60} />
              </div>
              <div className="mission-icon-item">
                <Award size={60} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2 className="display-medium">Our Core Values</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <Shield className="value-icon" size={40} />
            <h3 className="heading-2">Security First</h3>
            <p className="body-medium">
              Every solution we build starts with security as the foundation. We never compromise on protecting your data and privacy.
            </p>
          </div>
          <div className="value-card">
            <Target className="value-icon" size={40} />
            <h3 className="heading-2">Trust & Transparency</h3>
            <p className="body-medium">
              We believe in honest communication, transparent pricing, and building long-term relationships with our clients.
            </p>
          </div>
          <div className="value-card">
            <Award className="value-icon" size={40} />
            <h3 className="heading-2">Quality Excellence</h3>
            <p className="body-medium">
              We deliver enterprise-grade quality solutions that are reliable, scalable, and built to last.
            </p>
          </div>
          <div className="value-card">
            <Users className="value-icon" size={40} />
            <h3 className="heading-2">Customer Focused</h3>
            <p className="body-medium">
              Your success is our success. We work closely with you to understand your needs and deliver solutions that work.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="what-we-do-content">
          <h2 className="display-medium">What We Do</h2>
          <div className="what-we-do-grid">
            <div className="what-we-do-column">
              <h3 className="heading-2">Products</h3>
              <p className="body-medium">
                We build security-first applications under the uSafe brand, including authenticator apps, cloud storage, business tools, and communication platforms.
              </p>
              <ul className="what-list">
                <li>uSafe One - Security & Authenticator App</li>
                <li>uSafe Cloud - Secure Cloud Storage</li>
                <li>uSafe Tools - Business & Marketing Tools</li>
                <li>uSafe Chat - Encrypted Messaging</li>
                <li>uSafe Legal - Legal Services Platform</li>
              </ul>
            </div>
            <div className="what-we-do-column">
              <h3 className="heading-2">Services</h3>
              <p className="body-medium">
                We offer comprehensive services from app development to legal compliance, helping businesses succeed in the digital world.
              </p>
              <ul className="what-list">
                <li>Mobile & Web App Development</li>
                <li>Website Design & Development</li>
                <li>Branding & Digital Marketing</li>
                <li>SEO & Business Tools</li>
                <li>Company Registration & Legal Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="display-large">Let's Work Together</h2>
          <p className="body-large">
            Ready to build something amazing? Get in touch with us today
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

export default About;