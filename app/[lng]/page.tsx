import React from 'react';
import {GameCard} from '@components/GameCard';
import {PricingCard} from '@components/PricingCard';
import {ContactForm} from '@components/ContactForm';
import {SocialLinks} from '@components/SocialLinks';
import {COMPANY_INFO, GAMES, PRICING_PLANS} from '@constants';
import styles from './Home.module.css';
import {Header, Hero} from './components';
import {fallbackLng, languages} from '@i18n/settings';
import {useTranslation} from '@i18n';

export default async function Page({params}: {
  params: Promise<{
    lng: string;
  }>;
}) {
  let {lng} = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const i18n = await useTranslation(lng);

  const handleGamePlay = (gameTitle: string) => {
    console.log(`Playing ${gameTitle}`);
  };

  const handleGameCreate = (gameTitle: string) => {
    console.log(`Creating ${gameTitle}`);
  };

  return (
    <main className={styles.landingPage}>
      <Header i18n={i18n}/>
      <Hero i18n={i18n}/>

      <section className={styles.games} id="create">
        <h2 className={styles.sectionTitle}>Create your game</h2>
        <p className={styles.sectionSubtitle}>
          Diverse game library, flexible choices
        </p>
        <div className={styles.gameGrid}>
          {GAMES.map((game) => (
            <GameCard
              key={game.title}
              {...game}
              // onPlay={() => handleGamePlay(game.title)}
              // onCreate={() => handleGameCreate(game.title)}
            />
          ))}
        </div>
      </section>

      <section className={styles.pricing} id="pricing">
        <h2 className={styles.sectionTitle}>Choose your suitable package</h2>
        <div className={styles.pricingGrid}>
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard
              key={plan.title}
              {...plan}
              isHighlighted={index === 2}
            />
          ))}
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <h2 className={styles.sectionTitle}>Need more information?</h2>
        <p className={styles.sectionSubtitle}>
          Connect with us for inquiries or additional offers
        </p>
        <div className={styles.contactContent}>
          <ContactForm/>
          <img
            src="/contact-illustration.png"
            alt="Contact illustration"
            className={styles.contactImage}
            loading="lazy"
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.companyInfo}>
            <img
              src="/logo-white.png"
              alt="Bitcover logo"
              className={styles.footerLogo}
            />
            <h2 className={styles.companyName}>{COMPANY_INFO.name}</h2>
            <address className={styles.address}>{COMPANY_INFO.address}</address>
            <p className={styles.contact}>Phone: {COMPANY_INFO.phone}</p>
            <p className={styles.contact}>Email: {COMPANY_INFO.email}</p>
            <p className={styles.registrationInfo}>
              {COMPANY_INFO.registrationInfo}
            </p>
          </div>
          <SocialLinks/>
        </div>
        <div className={styles.copyright}>Bitcover Copyright 2024</div>
      </footer>
    </main>
  );
};
