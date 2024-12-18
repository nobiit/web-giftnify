import React from 'react';
import styles from './Home.module.css';
import {Header, Hero, Landing, Partner} from './components';
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

  return (
    <main className={styles.landingPage}>
      <Header i18n={i18n}/>
      <Landing i18n={i18n}/>
      <Hero i18n={i18n}/>
      <Partner/>
    </main>
  );
};
