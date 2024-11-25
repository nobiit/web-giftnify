import React from 'react';
import {SOCIAL_LINKS} from '@constants';
import styles from './SocialLinks.module.css';

export const SocialLinks: React.FC = () => {
  return (
    <nav className={styles.socialLinks} aria-label="Social media links">
      <h2 className={styles.title}>Connect with us</h2>
      <div className={styles.linkContainer}>
        {SOCIAL_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.alt}
          >
            <img
              src={link.imageSrc}
              alt={link.alt}
              className={styles.icon}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </nav>
  );
};
