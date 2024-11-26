import React from 'react';
import styles from './Hero.module.css';
import {PartnerCard} from './PartnerCard';
import {PARTNER_ITEMS} from '../../constants/partners';

export const Partner: React.FC = () => {
  return (
    <section className={styles.partnersSection}>
      {'<'}
      <div className={styles.partnersGrid}>
        {PARTNER_ITEMS.map((item, i) => (
          <PartnerCard key={i} {...item} />
        ))}
      </div>
      {'>'}
    </section>
  );
};
