import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Story.module.css';

interface Image {
  src: string;
  alt: string;
  height: number;
  width: number;
}

interface Props {
  author: string;
  label: string;
  description: string;
  avatar?: Partial<Image>;
  image?: Partial<Image>;
}

export const Story: FC<Props> = ({ author, label, description, avatar = { alt: 'Avatar', height: 40, width: 40 }, image = { alt: 'Swinging woman', height: 173, width: 319 } }) => {
  return (
    <section className={styles.first}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image src={avatar.src || '/avatar.png'} alt={avatar.alt} className={styles.avatar} height={avatar.height} width={avatar.width} />
          <div className={styles.author}>{author}</div>
        </div>
        <button className={styles.followBtn}>{label}</button>
      </div>
      <Image src={image.src || '/image.png'} alt={image.alt} className={styles.image} height={image.height} width={image.width} />
      <p className={styles.authorText}>
        {description}
      </p>
    </section>
  )
}
