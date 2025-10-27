import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import { servicesData } from '../data/services';
import './Services.css';

const Services = () => {
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

    return () => {
      fadeElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="services-page">
      {/* ABSTRACT LINE ART */}
      <div className="line-art" aria-hidden="true">
        <svg width="300" height="600" viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg">
          <line className="line" x1="150" y1="0" x2="150" y2="600" stroke="#000" strokeWidth="1" />
          <line className="line" x1="0" y1="100" x2="130" y2="100" stroke="#000" strokeWidth="1" />
          <line className="line" x1="170" y1="100" x2="300" y2="100" stroke="#000" strokeWidth="1" />
          <line className="line" x1="0" y1="250" x2="120" y2="250" stroke="#000" strokeWidth="1" />
          <line className="line" x1="180" y1="250" x2="300" y2="250" stroke="#000" strokeWidth="1" />
          <line className="line" x1="0" y1="400" x2="110" y2="400" stroke="#000" strokeWidth="1" />
          <line className="line" x1="190" y1="400" x2="300" y2="400" stroke="#000" strokeWidth="1" />
          <line className="line" x1="50" y1="50" x2="50" y2="150" stroke="#000" strokeWidth="1" />
          <line className="line" x1="250" y1="200" x2="250" y2="300" stroke="#000" strokeWidth="1" />
          <line className="line" x1="50" y1="350" x2="50" y2="450" stroke="#000" strokeWidth="1" />
          <line className="line" x1="250" y1="500" x2="250" y2="580" stroke="#000" strokeWidth="1" />
          <polyline className="line" points="20,20 20,60 40,60" fill="none" stroke="#000" strokeWidth="1" />
          <polyline className="line" points="280,180 280,220 260,220" fill="none" stroke="#000" strokeWidth="1" />
          <polyline className="line" points="30,320 30,360 50,360" fill="none" stroke="#000" strokeWidth="1" />
          <polyline className="line" points="270,460 270,500 250,500" fill="none" stroke="#000" strokeWidth="1" />
          <circle className="line" cx="150" cy="100" r="2" fill="#000" />
          <circle className="line" cx="150" cy="250" r="2" fill="#000" />
          <circle className="line" cx="150" cy="400" r="2" fill="#000" />
        </svg>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">Digital Sovereignty</div>
            <Link to="/" className="header__back">← Back to Home</Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              Your Complete Digital Ecosystem
            </h1>
            <p className="hero__subtitle">
              Every service you need for true digital independence, self-hosted and under your control.
            </p>

            <div className="hero__lines" aria-hidden="true">
              <div className="hero__line"></div>
              <div className="hero__line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <div className="container">
          <div className="services__intro fade-in">
            <p className="services__intro-text">
              Browse our curated selection of self-hosted services. Each solution has been chosen for its security, reliability, and commitment to user freedom.
            </p>
          </div>

          {/* Services Grid - Using reusable ServiceCard component */}
          <div className="services__grid">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                technologies={service.technologies}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider fade-in">
        <div className="divider__line">
          <div className="divider__dot"></div>
        </div>
      </div>

      {/* ART SECTION */}
      <section className="art-section">
        <div className="container">
          <div className="art-section__content">
            <div className="art-section__gif">
              <img src="/assets/animation art GIF by sahlooter.gif" alt="Abstract animation art" className="art-gif" />
            </div>
            <div className="art-section__text">
              <p className="art-text">
                Beyond technology lies <em>artistry</em>. Each service we provide is crafted with the same care
                a painter gives to their canvas—deliberate, thoughtful, alive with purpose.
              </p>
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

export default Services;
