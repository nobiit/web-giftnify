'use client';
import React from 'react';
import {GameCardProps} from '@types';
import styles from './GameCard.module.css';

export const GameCard: React.FC<GameCardProps> = (
  {
    title,
    imageSrc,
    onPlay,
    onCreate,
  }) => {
  return (
    <article className={styles.gameCard}>
      <div className={styles.imageWrapper}>
        <img
          src={imageSrc}
          alt={title}
          className={styles.gameImage}
          loading="lazy"
        />
      </div>
      <h3 className={styles.gameTitle}>{title}</h3>
      <div className={styles.buttonGroup}>
        <button
          onClick={onPlay}
          className={styles.tryButton}
          aria-label={`Try ${title}`}
        >
          Try it
        </button>
        <button
          onClick={onCreate}
          className={styles.createButton}
          aria-label={`Create ${title}`}
        >
          Create game
        </button>
      </div>
    </article>
  );
};
