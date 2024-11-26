import React from 'react';
import styles from './Statistic.module.css';
import {StatisticCard} from './StatisticCard';
import {STATISTICS_ITEMS} from '@constants';

export const Statistic: React.FC = () => {
  return (
    <div className={styles.statisticsContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31bccfca413fd0d9ca409824e885290fb27eddd597ab7138b142f33be9f5c21f?placeholderIfAbsent=true&apiKey=fd4d96ef7e2e4aa89ceee6b9e8be3d04"
        alt="Statistics illustration"
        className={styles.statisticsImage}
      />
      {STATISTICS_ITEMS.map((item, index) => (
        <StatisticCard key={index} {...item} />
      ))}
    </div>
  );
};
