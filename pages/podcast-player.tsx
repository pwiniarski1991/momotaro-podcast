import type { NextPage } from 'next'
import Head from 'next/head'
import { PlayButton } from '../components/playButton/PlayButton';
import { Player } from '../components/player/Player';
import styles from '../styles/PodcastPlayer.module.css'

const PodcastPlayer: NextPage = () => {
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
        <Player />
        <span className={styles.time}>4:35</span>
        <PlayButton
          subtitle="Next: Sleep Reflection"
          duration="15 minutes"
        />
      </main>
    </div>
  )
}

export default PodcastPlayer
