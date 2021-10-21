import React, { FC, useState } from 'react';
import Image from 'next/image';
import styles from './Player.module.css';

interface Props {
  src?: string;
  alt?: string;
  height?: number;
  width?: number;
}

export const Player: FC<Props> = ({ src = '/pause.png', alt = "Pause", height = 29, width = 22 }) => {
  const [isPlaying, setPlaying] = useState(false);
  const onClick = (): void => {
    setPlaying(!isPlaying);
  }
  return (
    <div className={styles.ring}>
      <div className={styles.outer}></div>
      <div className={styles.inner}></div>
      <button className={styles.playerAction} onClick={onClick}>
        <div className={styles.pauseBtn}>
          <Image src={isPlaying ? '/pause.png' : '/playBtn.svg'} alt={isPlaying ? 'Pause button' : 'Play Button'} width={width} height={height} />
        </div>
      </button>
    </div>
  )
}