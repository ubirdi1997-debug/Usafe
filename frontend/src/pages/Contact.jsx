import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      return false;
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error('Please enter a subject');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response && error.response.data && error.response.data.detail) {
        toast.error(`Failed to send message: ${error.response.data.detail}`);
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const siteUrl = 'https://usafe.in';
  return (
    <div className="dark-container">
      <Helmet>
        <title>Contact Us - Get In Touch | uSafe</title>
        <meta name="description" content="Have a question or ready to start your project? Contact Urbanesafe LLP through email, WhatsApp, or our contact form. We typically respond within 24 hours." />
        <meta property="og:title" content="Contact Us - Get In Touch | uSafe" />
        <meta property="og:description" content="Have a question or ready to start your project? Contact Urbanesafe LLP through email, WhatsApp, or our contact form." />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteUrl}/contact`} />
      </Helmet>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="display-large">Get In Touch</h1>
          <p className="body-large">
            Have a question or ready to start your project? We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="heading-1">Contact Information</h2>
            <p className="body-medium" style={{marginTop: '20px', marginBottom: '40px'}}>
              Reach out to us through any of these channels
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <Mail className="contact-info-icon" size={24} />
                <div>
                  <h3 className="heading-3">Email</h3>
                  <a href="mailto:admin@usafe.in" className="body-medium contact-link">admin@usafe.in</a>
                </div>
              </div>

              <div className="contact-info-item">
                <Phone className="contact-info-icon" size={24} />
                <div>
                  <h3 className="heading-3">WhatsApp</h3>
                  <a href="https://wa.me/917696313676" target="_blank" rel="noopener noreferrer" className="body-medium contact-link">
                    +91 76963 13676
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <MapPin className="contact-info-icon" size={24} />
                <div>
                  <h3 className="heading-3">Website</h3>
                  <a href="https://usafe.in" target="_blank" rel="noopener noreferrer" className="body-medium contact-link">
                    usafe.in
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-note">
              <p className="body-small">
                We typically respond within 24 hours during business days
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell us more about your project or inquiry..."
                />
              </div>

              <button type="submit" disabled={loading} className="btn-primary btn-submit">
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;