import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Player.module.css';

interface Props {
  src?: string;
  alt?: string;
  height?: number;
  width?: number;
}

export const Player: FC<Props> = ({ src = '/pause.png', alt = "Pause", height = 29, width = 22 }) => {
  return (
    <div className={styles.ring}>
      <div className={styles.outer}></div>
      <div className={styles.inner}></div>
      <button className={styles.playerAction}>
        <div className={styles.pauseBtn}>
          <Image src={src} alt={alt} width={width} height={height} />
        </div>
      </button>
    </div>
  )
}