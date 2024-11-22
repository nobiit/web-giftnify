import React from 'react';
import {fallbackLng, languages} from '@i18n/settings';
import {useTranslation} from '@i18n';

export default async function Page({params}: {
  params: {
    lng: string;
  };
}) {
  let {lng} = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const {t} = await useTranslation(lng);

  return (
    <main>
    </main>
  );
};
