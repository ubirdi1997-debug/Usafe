import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Lock, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

const ProductUSafeOne = () => {
  const siteUrl = 'https://www.usafe.in';
  const pageUrl = `${siteUrl}/products/usafe-one`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "uSafe One",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "iOS, Android",
    "description": "All-in-One Privacy-First Security App for Modern Users. Unified privacy and security application with 2FA authenticator, backup codes, secured notes, business calculator, and QR code scanner.",
    "publisher": {
      "@type": "Organization",
      "name": "Urbanesafe LLP",
      "email": "admin@usafe.in",
      "telephone": "+917696313676"
    },
    "url": pageUrl,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="dark-container">
      <Helmet>
        <title>uSafe One: Privacy-First Security App | uSafe</title>
        <meta name="description" content="uSafe One: All-in-One Privacy-First Security App with 2FA authenticator, backup codes, secured notes, and business tools. No tracking, no ads, privacy-first." />
        <meta property="og:title" content="uSafe One: Privacy-First Security App" />
        <meta property="og:description" content="Unified privacy and security application designed to simplify how individuals and businesses protect their digital lives." />
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
              <Shield size={60} />
            </div>
          </div>
          <h1 className="display-large">uSafe One: All-in-One Privacy-First Security App for Modern Users</h1>
          <p className="body-large">
            uSafe One is a unified privacy and security application designed to simplify how individuals and businesses protect their digital lives. Instead of relying on multiple disconnected apps, uSafe One brings essential security and productivity tools into a single, secure platform.
          </p>
          <p className="body-large" style={{ marginTop: '20px' }}>
            Built with a privacy-first philosophy, uSafe One does not track users, does not display ads, and does not monetize personal data. Every feature is designed to work securely, efficiently, and transparently.
          </p>
          <div className="hero-buttons" style={{ marginTop: '32px' }}>
            <button className="btn-primary">
              <Download size={20} />
              Download uSafe One
            </button>
            <Link to="/contact" className="btn-secondary">
              Contact uSafe for Business Use
            </Link>
          </div>
        </div>
      </section>

      {/* Why uSafe One Exists */}
      <section className="products-detail-section">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <h2 className="display-medium">Why uSafe One Exists</h2>
            <p className="body-large product-detail-description">
              Modern users depend on dozens of applications for authentication, notes, utilities, and daily business tasks. This fragmentation increases security risks and reduces control over personal data.
            </p>
            <p className="body-large product-detail-description">
              uSafe One solves this problem by:
            </p>
            <ul className="product-features-list">
              <li><CheckCircle2 size={20} /> <span>Reducing dependency on multiple third-party apps</span></li>
              <li><CheckCircle2 size={20} /> <span>Keeping sensitive data consolidated and protected</span></li>
              <li><CheckCircle2 size={20} /> <span>Offering essential tools without unnecessary permissions</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="products-section">
        <div className="section-header">
          <h2 className="display-medium">Core Features of uSafe One</h2>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon-placeholder">
              <Shield size={40} />
            </div>
            <h3 className="heading-2">Authenticator (2FA)</h3>
            <p className="body-medium product-description">
              uSafe One includes a secure two-factor authentication system that works offline and does not rely on cloud syncing by default. This ensures authentication codes remain under user control.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <Lock size={40} />
            </div>
            <h3 className="heading-2">Backup Codes</h3>
            <p className="body-medium product-description">
              Backup codes provide a secure fallback mechanism for account recovery. uSafe One allows users to store backup codes safely without exposing them to external services.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <Lock size={40} />
            </div>
            <h3 className="heading-2">Secured Notes</h3>
            <p className="body-medium product-description">
              Secured Notes allow users to store sensitive information such as credentials, recovery details, or private notes in an encrypted format.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <Shield size={40} />
            </div>
            <h3 className="heading-2">Business Calculator</h3>
            <p className="body-medium product-description">
              A lightweight calculator built directly into uSafe One to support daily business and productivity tasks.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <Shield size={40} />
            </div>
            <h3 className="heading-2">QR Code Scanner</h3>
            <p className="body-medium product-description">
              The QR code scanner enables users to scan codes safely without hidden tracking or data logging.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy-First by Design */}
      <section className="trust-section">
        <div className="trust-content">
          <div className="trust-left">
            <h2 className="display-medium">Privacy-First by Design</h2>
            <ul className="product-features-list" style={{ marginTop: '32px' }}>
              <li><CheckCircle2 size={20} /> <span>No ads</span></li>
              <li><CheckCircle2 size={20} /> <span>No tracking</span></li>
              <li><CheckCircle2 size={20} /> <span>No behavioral profiling</span></li>
              <li><CheckCircle2 size={20} /> <span>No data resale</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="products-detail-section">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <h2 className="display-medium">Who Should Use uSafe One?</h2>
            <ul className="product-features-list">
              <li><CheckCircle2 size={20} /> <span>Privacy-conscious individuals</span></li>
              <li><CheckCircle2 size={20} /> <span>Startup founders</span></li>
              <li><CheckCircle2 size={20} /> <span>Small business owners</span></li>
              <li><CheckCircle2 size={20} /> <span>Professionals managing sensitive data</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="display-large">Get Started with uSafe One</h2>
          <p className="body-large">
            Download uSafe One today and take control of your digital security
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              <Download size={20} />
              Download uSafe One
            </button>
            <Link to="/contact" className="btn-secondary">
              Contact uSafe for Business Use
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductUSafeOne;
