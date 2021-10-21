import React, { FC } from 'react';
import { Card as CardProps } from '../../types/index';
import styles from './Card.module.css';

export const Card: FC<CardProps> = ({ id, label, title, postedAgo }) => {
  return (
    <div className={styles.card}>
      <div id={id} className={styles.imgCard}>
        {label ? <div className={styles.label}>{label}</div> : null}
      </div>
      <div className={styles.title}>{title}</div>
      <span className={styles.postedAgo}>{postedAgo}</span>
    </div>
  )
}