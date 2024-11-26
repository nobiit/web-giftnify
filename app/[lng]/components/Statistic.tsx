import React from 'react';
import styles from './Statistic.module.css';
import {StatisticCard} from './StatisticCard';
import {STATISTIC_ITEMS} from '@constants';
import {I18n, i18nWithNs} from '@i18n';

export const Statistic: React.FC<{ i18n: I18n }> = async ({i18n}) => {
  const {t} = await i18nWithNs(i18n, 'hero');

  return (
    <div className={styles.statisticsContainer}>
      {STATISTIC_ITEMS.map(({label, description}, index) => (
        <StatisticCard key={index} label={t(label)} description={t(description)}/>
      ))}
    </div>
  );
};
