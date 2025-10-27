import React, { useState } from 'react';
import './ConsultationForm.css';

const ConsultationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get the Google Sheets Web App URL from environment or config
      const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

      if (!GOOGLE_SHEETS_URL) {
        throw new Error('Google Sheets URL not configured');
      }

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          timestamp: new Date().toISOString()
        })
      });

      // With no-cors mode, we can't read the response, so assume success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '' });

      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation-overlay" onClick={onClose}>
      <div className="consultation-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="consultation-close" onClick={onClose} aria-label="Close form">
          ×
        </button>

        <div className="consultation-header">
          <h2 className="consultation-title">Free Consultation</h2>
          <p className="consultation-subtitle">
            Have questions about our services? We're here to help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="consultation-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="your@email.com"
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
              required
              className="form-input"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="form-message form-message--success">
              Thank you! We'll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-message form-message--error">
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          <button
            type="submit"
            className="form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Request Consultation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
