import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, CheckCircle2, ArrowRight, ExternalLink, Building2, FileCheck, Briefcase, Scale } from 'lucide-react';

const legalServices = [
  {
    id: 'company-registration',
    icon: Building2,
    title: 'Company Registration',
    description: 'Register your company with complete documentation and expert guidance',
    features: [
      'Private Limited Company',
      'LLP Registration',
      'One Person Company',
      'Partnership Firm',
      'Sole Proprietorship'
    ],
    pricing: 'Starting from ₹6,999'
  },
  {
    id: 'compliance',
    icon: FileCheck,
    title: 'Compliance & Filings',
    description: 'Stay compliant with timely filings and expert support',
    features: [
      'Annual ROC Filings',
      'GST Registration & Returns',
      'Income Tax Returns',
      'TDS Returns',
      'Compliance Calendar'
    ],
    pricing: 'Custom packages available'
  },
  {
    id: 'trademark',
    icon: Shield,
    title: 'Trademark & IP',
    description: 'Protect your brand with trademark registration and IP services',
    features: [
      'Trademark Search',
      'Trademark Registration',
      'Copyright Registration',
      'Patent Filing',
      'IP Consultation'
    ],
    pricing: 'Starting from ₹4,999'
  },
  {
    id: 'business-licenses',
    icon: FileText,
    title: 'Business Licenses',
    description: 'Obtain necessary licenses and permits for your business',
    features: [
      'FSSAI License',
      'Import Export Code',
      'MSME Registration',
      'Professional Tax',
      'Shop & Establishment'
    ],
    pricing: 'Starting from ₹2,999'
  },
  {
    id: 'legal-agreements',
    icon: Briefcase,
    title: 'Legal Agreements',
    description: 'Professional legal documentation for your business needs',
    features: [
      'Partnership Deeds',
      'NDA Agreements',
      'Employment Contracts',
      'Vendor Agreements',
      'Service Agreements'
    ],
    pricing: 'Starting from ₹1,999'
  },
  {
    id: 'legal-consultation',
    icon: Scale,
    title: 'Legal Consultation',
    description: 'Expert legal advice for startups and small businesses',
    features: [
      'Business Structure Advice',
      'Compliance Planning',
      'Contract Review',
      'Dispute Resolution',
      'Regulatory Guidance'
    ],
    pricing: 'Starting from ₹999/hour'
  }
];

const LegalServices = () => {
  const siteUrl = 'https://usafe.in';
  return (
    <div className="dark-container">
      <Helmet>
        <title>uSafe Legal Services - Company Registration & Compliance | uSafe</title>
        <meta name="description" content="Complete legal support for startups and small businesses - company registration, compliance filings, trademark & IP, business licenses, legal agreements, and consultation services." />
        <meta property="og:title" content="uSafe Legal Services - Company Registration & Compliance" />
        <meta property="og:description" content="Complete legal support for startups and small businesses - from company registration to ongoing compliance." />
        <meta property="og:url" content={`${siteUrl}/legal-services`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteUrl}/legal-services`} />
      </Helmet>
      {/* Hero Section */}
      <section className="page-hero legal-hero">
        <div className="page-hero-content">
          <h1 className="display-large">uSafe Legal Services</h1>
          <p className="body-large">
            Complete legal support for startups and small businesses - from company registration to ongoing compliance
          </p>
          <div className="hero-buttons" style={{marginTop: '32px'}}>
            <a href="https://legal.usafe.in" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit Legal Portal
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <h2 className="display-medium">Why Choose uSafe Legal?</h2>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <Shield className="why-icon" size={32} />
              <h3 className="heading-3">Expert Guidance</h3>
              <p className="body-small">Professional legal experts with years of experience</p>
            </div>
            <div className="why-choose-item">
              <CheckCircle2 className="why-icon" size={32} />
              <h3 className="heading-3">Fast Processing</h3>
              <p className="body-small">Quick turnaround times without compromising quality</p>
            </div>
            <div className="why-choose-item">
              <FileCheck className="why-icon" size={32} />
              <h3 className="heading-3">Complete Support</h3>
              <p className="body-small">End-to-end assistance from filing to approval</p>
            </div>
            <div className="why-choose-item">
              <Scale className="why-icon" size={32} />
              <h3 className="heading-3">Transparent Pricing</h3>
              <p className="body-small">No hidden charges, clear pricing upfront</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="legal-services-section">
        <div className="section-header">
          <h2 className="display-medium">Our Legal Services</h2>
          <p className="body-medium section-description">
            Comprehensive legal solutions tailored for your business needs
          </p>
        </div>
        <div className="legal-services-grid">
          {legalServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="legal-service-card">
                <div className="legal-service-icon">
                  <IconComponent size={40} />
                </div>
                <h3 className="heading-2">{service.title}</h3>
                <p className="body-medium">{service.description}</p>
                <ul className="legal-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="legal-pricing">
                  <span className="pricing-label">Pricing:</span>
                  <span className="pricing-value">{service.pricing}</span>
                </div>
                <a href="https://legal.usafe.in" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-small">
                  Get Started
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2 className="display-medium">How It Works</h2>
        </div>
        <div className="how-it-works-grid">
          <div className="how-step">
            <div className="step-number">1</div>
            <h3 className="heading-3">Choose Service</h3>
            <p className="body-small">Select the legal service you need from our comprehensive list</p>
          </div>
          <div className="how-step">
            <div className="step-number">2</div>
            <h3 className="heading-3">Submit Details</h3>
            <p className="body-small">Fill out a simple form with your business information</p>
          </div>
          <div className="how-step">
            <div className="step-number">3</div>
            <h3 className="heading-3">Expert Review</h3>
            <p className="body-small">Our legal experts review and process your application</p>
          </div>
          <div className="how-step">
            <div className="step-number">4</div>
            <h3 className="heading-3">Get Certified</h3>
            <p className="body-small">Receive your registration certificates and documents</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="display-large">Ready to Get Started?</h2>
          <p className="body-large">
            Visit our legal services portal to begin your registration process
          </p>
          <div className="cta-buttons">
            <a href="https://legal.usafe.in" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit Legal Portal
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalServices;