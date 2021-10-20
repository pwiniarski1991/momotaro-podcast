import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Premium.module.css';

interface Props {
  title: string;
  subtitle: string;
  btnLabel: string;
  src: string;
  alt: string;
  height?: string;
  width?: string;
}

export const Premium: FC<Props> = ({ title, subtitle, btnLabel, src, alt, height = 60, width = 60 }) => {
  return (
    <div className={styles.premium}>
      <h4 className={styles.heading4}>{title}</h4>
      <div className={styles.subheading}>{subtitle}</div>
      <button className={styles.primaryBtn}>{btnLabel}</button>
      <Image src={src} alt={alt} height={height} width={width} />
    </div>
  )
}