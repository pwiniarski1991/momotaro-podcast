import React, { FC } from 'react';
import Image from 'next/image';
import styles from './SessionItem.module.css';

interface Props {
  src?: string;
  alt?: string;
  height?: number;
  width?: number;
  info: string;
  title: string;
  isLocked?: boolean;
}

export const SessionItem: FC<Props> = ({ src = '/play.png', alt = 'Play button', height = 54, width = 54, info, title, isLocked = false }) => {
  const icon = isLocked ? '/lock.png' : src;
  return (
    <li className={styles.session}>
      <button className={styles.iconBtn}>
        <Image src={icon} alt={alt} height={height} width={width} />
      </button>
      <div className={styles.sessionInfo}>
        {title}
        <span className={styles.sessionExtra}>{info}</span>
      </div>
    </li>
  )
}
