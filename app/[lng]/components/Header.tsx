import React from 'react';
import styles from './Header.module.css';
import {Navigation} from './Navigation';
import {APP_NAME} from '@constants';
import Image from 'next/image';
import logo from '@assets/images/logo.png';

import {I18n} from '@i18n';

export const Header: React.FC<{ i18n: I18n }> = ({i18n}) => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt={`${APP_NAME} Logo`} className={styles.logo}/>
      <Navigation i18n={i18n}/>
    </header>
  );
};
