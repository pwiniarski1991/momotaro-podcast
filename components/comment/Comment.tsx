import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Comment.module.css';

interface Props {
  author: {
    name: string;
    published: string;
    height?: number;
    width?: number;
    src?: string;
    alt?: string;
  };
  rateNumber: number,
  content: string;
}

export const Comment: FC<Props> = ({ author, content, rateNumber }) => {
  return (
    <div className={styles.comment}>
      <Image src={author.src || '/marie.png'} alt={author.alt} height={author.height || 38} width={author.width || 38} />
      <div className={styles.description}>
        <div className={styles.top}>
          <div className={styles.info}>
            <div>{author.name}</div>
            <span>{author.published}</span>
          </div>
          <div className={styles.label}>
            <Image src='/fullstar.svg' alt="Full star" height={30} width={30} /><span className={styles.rateNumber}>{rateNumber}</span>
          </div>
        </div>
        <div className={styles.post}>
          {content}
        </div>
      </div>
    </div>
  )
}
