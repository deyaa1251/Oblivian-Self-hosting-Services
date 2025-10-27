import React, { useState } from 'react';
import { footerConfig } from '../data/footerConfig';
import ConsultationForm from './ConsultationForm';
import './Footer.css';

const Footer = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">{footerConfig.tagline}</p>

          <a href={`mailto:${footerConfig.email}`} className="footer__email link-underline">
            {footerConfig.email}
          </a>

          {/* Free Consultation Button */}
          <button
            onClick={() => setShowConsultationForm(true)}
            className="consultation-button"
          >
            Free Consultation
          </button>

          {/* Display additional footer links if configured */}
          {footerConfig.links && footerConfig.links.length > 0 && (
            <div className="footer__links">
              {footerConfig.links.map((link, index) => (
                <a key={index} href={link.url} className="footer__link">
                  {link.text}
                </a>
              ))}
            </div>
          )}

          {/* Display social links if configured */}
          {footerConfig.socialLinks && Object.keys(footerConfig.socialLinks).length > 0 && (
            <div className="footer__social">
              {Object.entries(footerConfig.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                >
                  {platform}
                </a>
              ))}
            </div>
          )}

          <p className="footer__copyright">
            &copy; {footerConfig.copyrightYear} {footerConfig.copyrightText}
          </p>

          {/* Geometric signature mark */}
          <div className="footer__mark" aria-hidden="true"></div>
        </div>
      </div>
    </footer>

    {/* Consultation Form Modal */}
    {showConsultationForm && (
      <ConsultationForm onClose={() => setShowConsultationForm(false)} />
    )}
    </>
  );
};

export default Footer;
