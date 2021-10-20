import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Stars.module.css';

interface Props {
  rate?: 1 | 2 | 3 | 4 | 5;
}

export const Stars: FC<Props> = ({ rate = 2 }) => {
  return (
    <div className={styles.stars}>
      {Array(rate).fill(null).map((_, index) => (
        <Image key={index} src='/fullstar.svg' alt="Full star" height={30} width={30} />
      ))}
      {Array(5 - rate).fill(null).map((_, index) => (
        <Image key={index} src='/emptystar.svg' alt="Empty star" height={30} width={30} />
      ))}
    </div>
  )
}