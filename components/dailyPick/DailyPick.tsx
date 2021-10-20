import React, { FC } from 'react';
import Image from 'next/image';
import styles from './DailyPick.module.css';

interface Props {
  name: string;
  heading2: string;
  description: string;
  src: string;
  alt: string;
  btnLabel: string;
  height?: number;
  width?: number;
}

export const DailyPick: FC<Props> = ({ name, heading2, description, src, alt, width = 15, height = 12, btnLabel }) => {
  return (
    <div className={styles.daily_pick}>
      <div className={styles.bgImages}>
      </div>
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <h2 className={styles.heading2}>{heading2}</h2>
        <p className={styles.description}>
          {description}
        </p>

        <button className={styles.startBtn}>
          <Image src={src} alt={alt} width={width} height={height} />
          <span className={styles.arrowBtn}>{btnLabel}</span>
        </button>
      </div>
    </div>
  )
}