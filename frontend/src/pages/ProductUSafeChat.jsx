import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const ProductUSafeChat = () => {
  const siteUrl = 'https://www.usafe.in';
  const pageUrl = `${siteUrl}/products/usafe-chat`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "uSafe Chat",
    "applicationCategory": "CommunicationApplication",
    "description": "Encrypted Messaging Built for Privacy-First Communication. End-to-end encrypted messaging platform designed for individuals and organizations that value private, distraction-free communication.",
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
        <title>uSafe Chat: Encrypted Messaging App | uSafe</title>
        <meta name="description" content="uSafe Chat: Encrypted messaging platform built for privacy-first communication. End-to-end encryption, no ads, no tracking. Coming soon." />
        <meta property="og:title" content="uSafe Chat: Encrypted Messaging App" />
        <meta property="og:description" content="Encrypted messaging platform designed for individuals and organizations that value private, distraction-free communication." />
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
              <MessageCircle size={60} />
            </div>
          </div>
          <h1 className="display-large">uSafe Chat: Encrypted Messaging Built for Privacy-First Communication</h1>
          <p className="body-large">
            uSafe Chat is an upcoming encrypted messaging platform designed for individuals and organizations that value private, distraction-free communication.
          </p>
          <div className="hero-buttons" style={{ marginTop: '32px' }}>
            <Link to="/contact" className="btn-primary">
              Get Updates on uSafe Chat
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Private Communication */}
      <section className="products-detail-section">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <h2 className="display-medium">Private Communication Without Compromise</h2>
            <p className="body-large product-detail-description">
              uSafe Chat eliminates surveillance-based messaging by providing secure communication without ads, trackers, or profiling.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="products-section">
        <div className="section-header">
          <h2 className="display-medium">Key Features</h2>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon-placeholder">
              <MessageCircle size={40} />
            </div>
            <h3 className="heading-2">End-to-End Encryption</h3>
            <p className="body-medium product-description">
              All messages are encrypted end-to-end, ensuring only you and your recipients can read them.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="heading-2">No Ads</h3>
            <p className="body-medium product-description">
              uSafe Chat is ad-free, providing a distraction-free communication experience.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="heading-2">No Tracking</h3>
            <p className="body-medium product-description">
              We do not track your conversations, contacts, or behavior.
            </p>
          </div>

          <div className="product-card">
            <div className="product-icon-placeholder">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="heading-2">Privacy-First Architecture</h3>
            <p className="body-medium product-description">
              Built from the ground up with privacy as the foundation, not an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Individuals and Teams */}
      <section className="products-detail-section">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <h2 className="display-medium">Built for Individuals and Teams</h2>
            <p className="body-large product-detail-description">
              uSafe Chat supports private conversations, team communication, and sensitive discussions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="display-large">Stay Updated on uSafe Chat</h2>
          <p className="body-large">
            Be the first to know when uSafe Chat launches
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Get Updates on uSafe Chat
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductUSafeChat;
