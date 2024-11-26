import React from 'react';
import styles from './Hero.module.css';
import {I18n, i18nWithNs} from '@i18n';
import bg1 from '@assets/images/bg-1.png';
import bg2 from '@assets/images/bg-2.png';
import bg3 from '@assets/images/bg-3.png';
import NextIcon from '@assets/icons/next.svg';
import {Carousel} from './Carousel';

export const Hero: React.FC<{ i18n: I18n }> = async ({i18n}) => {
  const {t} = await i18nWithNs(i18n, 'hero');

  return (
    <section className={styles.hero}>
      <Carousel src={bg1} items={[bg1, bg2, bg3]} alt="Hero Carousel" className={styles.heroBackground}/>
      <div className={styles.overlay}>
        <h1 className={styles.heroTitle}>{t('title')}</h1>
        <button className={styles.ctaButton}>
          {t('button')}
          &nbsp;
          <NextIcon/>
        </button>
      </div>
    </section>
  );
};
