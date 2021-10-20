import React, { FC } from 'react';
import styles from './Card.module.css';

interface Props {
  id: string;
  label?: string;
  title: string;
  postedAgo: string;
}

export const Card: FC<Props> = ({ id, label, title, postedAgo }) => {
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