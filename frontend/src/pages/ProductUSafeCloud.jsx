import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';

const ProductUSafeCloud = () => {
  const siteUrl = 'https://www.usafe.in';
  const pageUrl = `${siteUrl}/products/usafe-cloud`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "uSafe Cloud",
    "applicationCategory": "StorageApplication",
    "description": "Secure Cloud Backup and Easy Data Recovery. Privacy-focused cloud backup and restore solution designed to protect important files without compromising user control.",
    "publisher": {
      "@type": "Organization",
      "name": "Urbanesafe LLP",
      "email": "admin@usafe.in",
      "telephone": "+917696313676"
    },
    "url": pageUrl
  };

  return (
    <div className="dark-container">
      <Helmet>
        <title>uSafe Cloud: Secure Cloud Backup Service | uSafe</title>
        <meta name="description" content="uSafe Cloud: Privacy-focused cloud backup and restore solution. Secure storage, easy recovery, privacy-first infrastructure. Join the waitlist." />
        <meta property="og:title" content="uSafe Cloud: Secure Cloud Backup Service" />
        <meta property="og:description" content="Privacy-focused cloud backup and restore solution designed to protect important files without compromising user control." />
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
              <Cloud size={60} />
            </div>
          </div>
          <h1 className="display-large">uSafe Cloud: Secure Cloud Backup and Easy Data Recovery</h1>
          <p className="body-large">
            uSafe Cloud is a privacy-focused cloud backup and restore solution designed to protect important files without compromising user control.
          </p>
          <div className="hero-buttons" style={{ marginTop: '32px' }}>
            <Link to="/contact" className="btn-primary">
              Join the uSafe Cloud Waitlist
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Secure Storage */}
      <section className="products-detail-section">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <h2 className="display-medium">Secure Storage You Can Trust</h2>
            <p className="body-large product-detail-description">
              uSafe Cloud ensures data protection through encryption and privacy-first infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="products-section">
        <div className="section-header">
          <h2 className="display-medium">Core Capabilities</h2>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon-placeholder">
              <Cloud size={40} />
            </div>
            <h3 className="heading-2">Cloud Backup</h3>
            <p className="body-medium product-description">
              Automatically backup your important files to secure cloud storage.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="heading-2">Secure Storage</h3>
            <p className="body-medium product-description">
              Your files are encrypted and stored securely with privacy-first infrastructure.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="heading-2">Privacy-First Infrastructure</h3>
            <p className="body-medium product-description">
              Built with privacy as the foundation, ensuring your data remains yours.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <Cloud size={40} />
            </div>
            <h3 className="heading-2">Easy Restore</h3>
            <p className="body-medium product-description">
              Quickly restore your files whenever you need them, with simple and intuitive tools.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is uSafe Cloud For */}
      <section className="products-detail-section">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <h2 className="display-medium">Who Is uSafe Cloud For?</h2>
            <ul className="product-features-list">
              <li><CheckCircle2 size={20} /> <span>Individuals safeguarding personal files</span></li>
              <li><CheckCircle2 size={20} /> <span>Businesses protecting operational data</span></li>
              <li><CheckCircle2 size={20} /> <span>Teams needing reliable backups</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="display-large">Join the uSafe Cloud Waitlist</h2>
          <p className="body-large">
            Be the first to know when uSafe Cloud launches
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Join the uSafe Cloud Waitlist
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductUSafeCloud;
