import React, { FC } from 'react';
import Image from 'next/image';
import styles from './PlayButton.module.css';

interface Props {
  src?: string;
  alt?: string;
  height?: number;
  width?: number;
  subtitle: string;
  duration: string;
}

export const PlayButton: FC<Props> = ({ src = '/playBtn.svg', alt = "Player Button", height = 48, width = 48, subtitle, duration }) => {
  return (
    <button className={styles.playBtn}>
      <Image src={src} alt={alt} height={height} width={width} />
      <div className={styles.right}>
        <div className={styles.subTitle}>{subtitle}</div>
        <span className={styles.duration}>{duration}</span>
      </div>
    </button>
  )
}