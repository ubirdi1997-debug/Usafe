import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

const ProductUSafeLegal = () => {
  const siteUrl = 'https://www.usafe.in';
  const pageUrl = `${siteUrl}/products/usafe-legal`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "uSafe Legal",
    "description": "A Digital Platform for Business Legal Services. Platform designed to simplify how businesses access structured legal services through a secure and transparent digital interface.",
    "provider": {
      "@type": "Organization",
      "name": "Urbanesafe LLP",
      "email": "admin@usafe.in",
      "telephone": "+917696313676",
      "url": "https://legal.usafe.in"
    },
    "url": pageUrl,
    "serviceType": "Legal Services"
  };

  return (
    <div className="dark-container">
      <Helmet>
        <title>uSafe Legal: Business Legal Services Platform | uSafe</title>
        <meta name="description" content="uSafe Legal: Digital platform for business legal services. Company registration, compliance, trademark support, and business setup. Visit legal.usafe.in." />
        <meta property="og:title" content="uSafe Legal: Business Legal Services Platform" />
        <meta property="og:description" content="Digital platform designed to simplify how businesses access structured legal services through a secure and transparent interface." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="product-detail-visual" style={{ marginBottom: '40px' }}>
            <div className="product-detail-placeholder" style={{ width: '120px', height: '120px', margin: '0 auto' }}>
              <Briefcase size={60} />
            </div>
          </div>
          <h1 className="display-large">uSafe Legal: A Digital Platform for Business Legal Services</h1>
          <p className="body-large">
            uSafe Legal is an upcoming platform designed to simplify how businesses access structured legal services through a secure and transparent digital interface.
          </p>
          <div className="hero-buttons" style={{ marginTop: '32px' }}>
            <a href="https://legal.usafe.in" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit uSafe Legal Platform
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* What uSafe Legal Provides */}
      <section className="products-detail-section">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <h2 className="display-medium">What uSafe Legal Provides</h2>
            <ul className="product-features-list">
              <li><CheckCircle2 size={20} /> <span>Company Registration Support</span></li>
              <li><CheckCircle2 size={20} /> <span>Compliance & Filings Assistance</span></li>
              <li><CheckCircle2 size={20} /> <span>Trademark Support</span></li>
              <li><CheckCircle2 size={20} /> <span>Business Setup Services</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dedicated Legal Platform */}
      <section className="products-detail-section">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <h2 className="display-medium">Dedicated Legal Platform</h2>
            <p className="body-large product-detail-description">
              This page is a product overview only. Redirect users to the dedicated legal platform for execution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="display-large">Visit uSafe Legal Platform</h2>
          <p className="body-large">
            Access comprehensive legal services through our dedicated platform
          </p>
          <div className="cta-buttons">
            <a href="https://legal.usafe.in" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit uSafe Legal Platform
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductUSafeLegal;
