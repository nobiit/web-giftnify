import './global.css';

import {fallbackLng, languages} from '@i18n/settings';
import {useTranslation} from '@i18n';

export async function generateStaticParams() {
  return languages.map((lng) => ({lng}));
}

export async function generateMetadata({params}: {
  params: Promise<{
    lng: string;
  }>;
}) {
  let {lng} = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const {t} = await useTranslation(lng, 'common');
  return {
    title: t('title'),
  };
}

export default async function RootLayout(
  {
    children,
    params,
  }: {
    children: React.ReactNode;
    params: Promise<{
      lng: string;
    }>;
  }) {
  const {lng} = await params;
  return (
    <html lang={lng}>
    <head/>
    <body>
    {children}
    </body>
    </html>
  );
}
