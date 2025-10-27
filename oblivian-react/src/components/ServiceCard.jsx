import React from 'react';
import './ServiceCard.css';

/**
 * Reusable ServiceCard component
 *
 * @param {Object} props
 * @param {string} props.title - Service title
 * @param {string} props.description - Service description
 * @param {string} props.technologies - Technologies used (e.g., "Nextcloud • Seafile")
 * @param {string} props.link - Link to service details (default: "#")
 * @param {Function} props.onClick - Optional click handler
 * @param {string} props.className - Additional CSS classes
 */
const ServiceCard = ({
  title,
  description,
  technologies,
  link = "#",
  onClick,
  className = ""
}) => {
  return (
    <a
      href={link}
      className={`service-box fade-in ${className}`}
      onClick={onClick}
      aria-label={`${title} service details`}
    >
      <div className="service-box__content">
        <h2 className="service-box__title">{title}</h2>
        <p className="service-box__description">
          {description}
        </p>
      </div>
      <span className="service-box__tech">{technologies}</span>
    </a>
  );
};

export default ServiceCard;
