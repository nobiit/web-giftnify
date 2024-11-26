import React from 'react';
import styles from './Hero.module.css';
import {I18n, i18nWithNs} from '@i18n';
import {Statistic} from './Statistic';
import Image from 'next/image';
import bg from '@assets/images/hero-bg.png';

export const Hero: React.FC<{ i18n: I18n }> = async ({i18n}) => {
  const {t} = await i18nWithNs(i18n, 'hero');

  return (
    <section className={styles.heroSection}>
      <Image
        src={bg}
        alt="Hero Background"
        className={styles.heroBackground}
      />
      <main className={styles.heroContent}>
        <h1 className={styles.mainTitle}>{t('title')}</h1>
        <h2 className={styles.subTitle}>{t('subtitle')}</h2>
        <Statistic i18n={i18n}/>
      </main>
    </section>
  );
};
