import React from 'react';
import styles from './Statistic.module.css';
import {StatisticProps} from '@types';
import Image from 'next/image';
import left from '@assets/images/statistic-left.png';
import right from '@assets/images/statistic-right.png';

export const StatisticCard: React.FC<StatisticProps> = (
  {
    label,
    description,
  }) => {
  return (
    <article className={styles.statisticCard}>
      <Image src={left} alt="Left" className={styles.statisticIconLeft}/>
      <div className={styles.statisticContent}>
        <h3 className={styles.statisticLabel}>{label}</h3>
        <p className={styles.statisticDescription}>{description}</p>
      </div>
      <Image src={right} alt="Right" className={styles.statisticIconRight}/>
    </article>
  );
};
