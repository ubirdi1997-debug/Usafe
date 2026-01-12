import React from 'react';
import { services } from '../data/mockData';
import { ArrowRight, Smartphone, Globe, Layout, Palette, TrendingUp, Zap, FileText, Shield, Rocket, CheckCircle2 } from 'lucide-react';
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

const servicesDetail = {
  'app-dev': {
    benefits: ['Cross-platform development', 'Security-first architecture', 'Scalable backend systems', 'App store optimization'],
    process: ['Discovery & Planning', 'Design & Prototyping', 'Development & Testing', 'Launch & Support']
  },
  'web-dev': {
    benefits: ['Modern tech stack', 'API-first architecture', 'Cloud-native deployment', 'Performance optimized'],
    process: ['Requirements Analysis', 'System Design', 'Development Sprint', 'Quality Assurance']
  },
  'website': {
    benefits: ['Responsive design', 'SEO optimized', 'Fast loading times', 'Security hardened'],
    process: ['Brand Analysis', 'Design Concept', 'Development', 'Launch & Maintenance']
  },
  'branding': {
    benefits: ['Complete brand identity', 'Logo design', 'Brand guidelines', 'Marketing materials'],
    process: ['Brand Discovery', 'Concept Development', 'Design Refinement', 'Delivery']
  },
  'seo': {
    benefits: ['Keyword research', 'On-page optimization', 'Content strategy', 'Analytics & reporting'],
    process: ['SEO Audit', 'Strategy Development', 'Implementation', 'Monitoring']
  },
  'automation': {
    benefits: ['Custom workflow automation', 'Integration solutions', 'Process optimization', 'Time & cost savings'],
    process: ['Process Analysis', 'Solution Design', 'Development', 'Training & Support']
  },
  'company-reg': {
    benefits: ['Complete documentation', 'Fast processing', 'Expert guidance', 'Compliance assured'],
    process: ['Consultation', 'Document Preparation', 'Filing', 'Certificate Delivery']
  },
  'compliance': {
    benefits: ['Timely filings', 'Compliance calendar', 'Expert support', 'Peace of mind'],
    process: ['Compliance Assessment', 'Filing Schedule', 'Regular Updates', 'Annual Review']
  },
  'startup': {
    benefits: ['End-to-end support', 'Business strategy', 'Technical guidance', 'Growth planning'],
    process: ['Initial Consultation', 'Business Setup', 'Technical Development', 'Launch Support']
  }
};

const Services = () => {
  return (
    <div className="dark-container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="display-large">Professional Services</h1>
          <p className="body-large">
            Comprehensive solutions from development to legal compliance - everything your business needs to succeed
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="services-detail-section">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon];
          const details = servicesDetail[service.id];
          
          return (
            <div key={service.id} className="service-detail-card">
              <div className="service-detail-header">
                <div className="service-icon-large">
                  {IconComponent && <IconComponent size={48} />}
                </div>
                <div>
                  <h2 className="heading-1">{service.title}</h2>
                  <p className="body-medium">{service.description}</p>
                </div>
              </div>

              <div className="service-detail-grid">
                <div className="service-detail-column">
                  <h3 className="heading-3">Benefits</h3>
                  <ul className="service-benefits-list">
                    {details?.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-detail-column">
                  <h3 className="heading-3">Our Process</h3>
                  <ol className="service-process-list">
                    {details?.process.map((step, idx) => (
                      <li key={idx}>
                        <span className="process-number">{idx + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="display-large">Ready to Start Your Project?</h2>
          <p className="body-large">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;