import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      document.querySelectorAll('.fade-in').forEach(element => {
        element.classList.add('visible');
      });
      return;
    }

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));

    // Hide scroll indicator after scrolling
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const handleScroll = () => {
      if (scrollIndicator) {
        if (window.pageYOffset > 100) {
          scrollIndicator.style.opacity = '0';
          scrollIndicator.style.pointerEvents = 'none';
        } else {
          scrollIndicator.style.opacity = '1';
          scrollIndicator.style.pointerEvents = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      fadeElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        {/* Geometric line art decoration */}
        <div className="hero__lines" aria-hidden="true">
          <div className="hero__line hero__line--h1"></div>
          <div className="hero__line hero__line--h2"></div>
          <div className="hero__line hero__line--h3"></div>
          <div className="hero__line hero__line--v1"></div>
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            ALL THE SERVICES YOU NEED.<br />
            NO INTERNET REQUIRED.
          </h1>
          <p className="hero__subtitle">
            Reclaim your digital sovereignty through self-hosted freedom.
          </p>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-indicator__line"></div>
          <span className="scroll-indicator__text">Scroll</span>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="philosophy">
        <div className="container">
          <div className="philosophy__content fade-in">
            {/* Geometric frame decoration */}
            <div className="philosophy__frame" aria-hidden="true"></div>

            <p className="philosophy__opening">
              In an age of constant connectivity, true independence means choosing when—and if—to connect.
            </p>

            <p className="philosophy__text">
              We help individuals and organizations achieve complete digital autonomy through carefully crafted self-hosted solutions. No cloud dependencies. No proprietary shackles. No surveillance capitalism.
            </p>

            <p className="philosophy__closing">
              Your data. Your infrastructure. Your rules.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider fade-in">
        <div className="divider__line">
          <div className="divider__dot"></div>
        </div>
      </div>

      {/* PRINCIPLES SECTION */}
      <section className="principles">
        <div className="container">
          <div className="principles__list">
            <article className="principle fade-in">
              <h2 className="principle__title">ABSOLUTE PRIVACY</h2>
              <p className="principle__description">
                Your information never leaves your control. No third-party servers, no data mining, no compromises.
              </p>
            </article>

            <article className="principle fade-in">
              <h2 className="principle__title">INTERNET OPTIONAL</h2>
              <p className="principle__description">
                Access your entire digital ecosystem offline. Connectivity becomes a choice, not a requirement.
              </p>
            </article>

            <article className="principle fade-in">
              <h2 className="principle__title">OPEN SOURCE FOUNDATION</h2>
              <p className="principle__description">
                Built on transparent, auditable technology. No black boxes, no hidden agendas.
              </p>
            </article>

            <article className="principle fade-in">
              <h2 className="principle__title">SOVEREIGN INFRASTRUCTURE</h2>
              <p className="principle__description">
                Own your digital life completely. From email to file storage, every service runs on your terms.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="vision">
        {/* Elaborate geometric frame */}
        <div className="vision__frame" aria-hidden="true">
          <div className="vision__frame-br"></div>
        </div>

        <div className="container">
          <div className="vision__content fade-in">
            <p className="vision__text">
              Imagine waking up knowing every digital interaction is truly private. Your emails, documents, photos, and communications exist entirely within your domain. Internet outages don't halt your productivity. Corporate policy changes don't affect your access. Data breaches don't compromise your security.
            </p>

            <p className="vision__text">
              This isn't a distant utopia. This is digital sovereignty. This is freedom.
            </p>

            <p className="vision__tagline">
              All the services you need.<br />No internet required.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="container">
          <div className="cta__content fade-in">
            <div className="cta__lines" aria-hidden="true">
              <div className="cta__line"></div>
              <div className="cta__line"></div>
            </div>

            <h2 className="cta__title">Begin Your Journey to Digital Independence</h2>

            <Link to="/services" className="cta__button" aria-label="Start your transformation">
              Start Your Transformation
            </Link>

            <div className="cta__lines cta__lines-bottom" aria-hidden="true">
              <div className="cta__line"></div>
              <div className="cta__line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MYSTERIOUS BUTTON */}
      <section className="mystery-section">
        <div className="container">
          <a href="/van-gogh" className="mystery-button" aria-label="Discover something beautiful">
            <div className="mystery-button__ring mystery-button__ring--outer"></div>
            <div className="mystery-button__ring mystery-button__ring--middle"></div>
            <div className="mystery-button__ring mystery-button__ring--inner"></div>
            <div className="mystery-button__core">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 8 6 8 12C8 16 10 18 12 18C14 18 16 16 16 12C16 6 12 2 12 2Z" fill="currentColor" opacity="0.6" />
                <circle cx="12" cy="14" r="3" fill="currentColor" />
                <path d="M12 18C12 18 10 19 10 21C10 22 11 23 12 23C13 23 14 22 14 21C14 19 12 18 12 18Z" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
