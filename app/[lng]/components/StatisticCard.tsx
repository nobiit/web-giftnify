import React from 'react';
import styles from './Statistic.module.css';
import {StatisticProps} from '@types';

export const StatisticCard: React.FC<StatisticProps> = (
  {
    icon,
    count,
    description,
  }) => {
  return (
    <article className={styles.statisticCard}>
      <img loading="lazy" src={icon} alt="" className={styles.statisticIcon}/>
      <div className={styles.statisticContent}>
        <h3 className={styles.statisticCount}>{count}</h3>
        <p className={styles.statisticDescription}>{description}</p>
      </div>
    </article>
  );
};
