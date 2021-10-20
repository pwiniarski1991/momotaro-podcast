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
}

export const SessionItem: FC<Props> = ({ src = '/play.png', alt = 'Play button', height = 54, width = 54, info, title }) => {
  return (
    <li className={styles.session}>
      <button className={styles.iconBtn}>
        <Image src={src} alt={alt} height={height} width={width} />
      </button>
      <div className={styles.sessionInfo}>
        {title}
        <span className={styles.sessionExtra}>{info}</span>
      </div>
    </li>
  )
}
