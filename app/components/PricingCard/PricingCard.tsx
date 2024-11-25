import React from 'react';
import {PricingCardProps} from '@types';
import styles from './PricingCard.module.css';

export const PricingCard: React.FC<PricingCardProps> = ({
                                                          title,
                                                          price,
                                                          features,
                                                          imageSrc,
                                                          freePlayCount,
                                                          isHighlighted,
                                                        }) => {
  return (
    <article
      className={`${styles.pricingCard} ${
        isHighlighted ? styles.highlighted : ''
      }`}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>
          {price}
          <span className={styles.currency}>VND</span>
        </p>
        <p className={styles.freeGames}>
          Free <strong>{freePlayCount}</strong> GAME PLAYS
        </p>
        <img
          src={imageSrc}
          alt=""
          className={styles.decorativeImage}
          loading="lazy"
        />
      </div>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <span className={styles.checkmark}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className={styles.buyButton}>Buy now</button>
    </article>
  );
};
