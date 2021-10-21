import type { NextPage } from 'next'
import Head from 'next/head'
import React, { Reducer, useEffect, useReducer } from 'react';
import { PlayButton } from '../components/playButton/PlayButton';
import { Player } from '../components/player/Player';
import { playerReducer } from '../reducers/player';
import styles from '../styles/PodcastPlayer.module.css'
import { IAction, PlayerState } from '../types/reducer';
import { fetchData } from '../utils/fetchData';

const INITIAL_STATE = {
  data: {
    current: { heading: '', time: '' },
    next: { heading: '', duration: '' },
  },
  error: { message: '' },
  loading: false
};

const PodcastPlayer: NextPage = () => {
  const [{ data, error, loading }, dispatch] = useReducer<Reducer<PlayerState, IAction>>(playerReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
    fetchData('player')
      .then(response => {
        dispatch({ type: 'data', payload: response })
      })
      .catch(error => dispatch({ type: 'error', payload: { message: error.message } }))
      .finally(() => dispatch({ type: 'loading', payload: false }));
  }, []);

  if (loading) {
    return <div>Data is loaded..., please wait</div>
  }

  if (error.message) {
    return <div>Data was not fetched properly, error occurs: {error.message}</div>;
  }
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
        <h2 className={styles.heading2}>{data?.current.heading}</h2>
        <Player />
        <span className={styles.time}>{data?.current.time}</span>
        <PlayButton
          subtitle={`Next: ${data?.next.heading} `}
          duration={data?.next.duration}
        />
      </main>
    </div>
  )
}

export default PodcastPlayer
