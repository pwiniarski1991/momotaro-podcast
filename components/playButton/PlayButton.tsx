import React, { FC, useState } from 'react';
import Image from 'next/image';
import styles from './PlayButton.module.css';

interface Props {
  height?: number;
  width?: number;
  subtitle?: string;
  duration?: string;
}

export const PlayButton: FC<Props> = ({ height = 48, width = 48, subtitle, duration }) => {
  const [isPlaying, setPlaying] = useState(false);
  const onClick = (): void => {
    setPlaying(!isPlaying);
  }
  return (
    <button className={styles.playBtn} onClick={onClick}>
      <Image src={isPlaying ? '/pause.svg' : '/playBtn.svg'} alt={isPlaying ? 'Pause button' : 'Play Button'} height={height} width={width} />
      {subtitle || duration ?
        (<div className={styles.right}>
          {subtitle ? <div className={styles.subTitle}>{subtitle}</div> : null}
          {duration ? <span className={styles.duration}>{duration}</span> : null}
        </div>)
        : null}
    </button>
  )
}