import React from 'react';
import {NAV_ITEMS} from '@constants';
import styles from './Navigation.module.css';
import {I18n, i18nWithNs} from '@i18n';

export const Navigation: React.FC<{ i18n: I18n }> = async ({i18n}) => {
  const {t} = await i18nWithNs(i18n, 'nav');

  return (
    <nav className={styles.navigation}>
      {NAV_ITEMS.map((item) => (
        <a key={item.href} href={item.href} className={styles.navLink}>
          {t(item.label)}
        </a>
      ))}
    </nav>
  );
};
