import React from 'react';
import styles from './Partner.module.css';
import {PartnerItem} from '@types';
import Image from 'next/image';

export const PartnerCard: React.FC<PartnerItem> = ({name, image}) => {
  return (
    <article className={styles.partnerCard}>
      {/*<Image*/}
      {/*  src={image}*/}
      {/*  alt={name}*/}
      {/*  className={styles.partnerLogo}*/}
      {/*/>*/}
    </article>
  );
};
