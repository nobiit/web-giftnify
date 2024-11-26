import React from 'react';
import styles from './Statistic.module.css';
import {StatisticCard} from './StatisticCard';
import {STATISTICS_ITEMS} from '@constants';

export const Statistic: React.FC = () => {
  return (
    <div className={styles.statisticsContainer}>
      {STATISTICS_ITEMS.map((item, index) => (
        <StatisticCard key={index} {...item} />
      ))}
    </div>
  );
};
