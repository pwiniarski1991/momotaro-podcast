import type { NextPage } from 'next'
import Head from 'next/head'
import { DailyPick } from '../components/dailyPick/DailyPick';
import { Card } from '../components/card/Card';
import { Premium } from '../components/premium/Premium';
import styles from '../styles/Home.module.css'
import { Reducer, useEffect, useReducer } from 'react';
import { fetchData } from '../utils/fetchData';
import { mainReducer } from '../reducers/main';
import { IAction, MainState } from '../types/reducer';
import { dailyPick, premium } from '../config/main';

const INITIAL_STATE = {
  data: { dailyPick: null, cards: [], premium: null },
  error: { message: '' },
  loading: false
};

const Home: NextPage = () => {

  const [{ data, error, loading }, dispatch] = useReducer<Reducer<MainState, IAction>>(mainReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
    fetchData()
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
        <title>Homepage</title>
        <meta name="description" content="Homepage generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Podcast</h1>

        {data?.dailyPick ? <DailyPick
          name={data?.dailyPick.name}
          heading={data?.dailyPick.heading}
          description={data?.dailyPick.description}
          src={dailyPick.src}
          alt={dailyPick.alt}
          btnLabel={dailyPick.btnLabel}
        /> : null}

        <h3 className={styles.heading3}>Wellness</h3>

        <div className={styles.grid}>
          {data?.cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              label={card.label}
              title={card.title}
              postedAgo={card.postedAgo}
            />
          ))}

        </div>

        {data?.premium ? <Premium
          title={data?.premium?.title}
          subtitle={data?.premium.subtitle}
          btnLabel={premium.btnLabel}
          src={premium.src}
          alt={premium.alt}
        /> : null}

      </main>

    </div>
  )
}

export default Home
