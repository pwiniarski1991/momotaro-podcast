import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Player.module.css'

const Player: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Momotaro player</title>
        <meta name="description" content="Momotaro player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.topCircle}></div>
      <div className={styles.triangle}></div>
      <div className={styles.bottomCircle}></div>
      <div className={styles.shape}></div>

      <main className={styles.main}>
        <h2 className={styles.heading2}>Welcome to Night<br />Vale Story</h2>
        <div className={styles.ring}>
          <div className={styles.outer}></div>
          <div className={styles.inner}></div>
          <button className={styles.playerAction}>
            <div className={styles.pauseBtn}>
              <Image src='/pause.png' alt="Pause" width={22} height={29} />
            </div>
          </button>
        </div>
        <button className={styles.playBtn}>
          <Image src='/playBtn.svg' alt="Player Button" height={48} width={48} />
          <div className={styles.right}>
            <div className={styles.subTitle}>Next: Sleep Reflection</div>
            <span>15 minutes</span>
          </div>
        </button>
      </main>
    </div>
  )
}

export default Player
