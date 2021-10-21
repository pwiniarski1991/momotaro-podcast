import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import React, { Reducer, useEffect, useReducer } from 'react';
import { Story } from '../components/story/Story';
import { Stars } from '../components/stars/Stars';
import styles from '../styles/Details.module.css'
import { SwitchButton } from '../components/switchButton/SwitchButton';
import { SessionItem } from '../components/sessionItem/SessionItem';
import { Comment } from '../components/comment/Comment';
import { DetailsState, IAction } from '../types/reducer';
import { detailsReducer } from '../reducers/details';
import { fetchData } from '../utils/fetchData';

const INITIAL_STATE = {
  data: { story: null, info: { text: '', fileSize: '' }, sessionItems: [], comments: [] },
  error: { message: '' },
  loading: false
};

const Details: NextPage = () => {
  const [{ data, error, loading }, dispatch] = useReducer<Reducer<DetailsState, IAction>>(detailsReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
    fetchData('details')
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
        <title>Momotaro details</title>
        <meta name="description" content="Momotaro details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h6 className={styles.heading6}>Welness</h6>
      <h2 className={styles.heading2}>Sleep With Me Bedtime Stories</h2>

      {data?.story ? <Story
        author={data.story.author}
        label={data.story.label}
        description={data.story.description}
      /> : null}
      {data?.info ? <SwitchButton
        text={data?.info.text}
        fileSize={data.info.fileSize}
      /> : null}
      <section className={styles.sessions}>
        <h6 className={styles.sessionHeading}>4 Sessions</h6>
        <ul className={styles.sessionsList}>
          {data?.sessionItems.map(sessionItem => (
            <SessionItem
              key={sessionItem.id}
              title={sessionItem.title}
              info={sessionItem.info}
              isLocked={sessionItem.isLocked}
            />
          ))}
        </ul>
      </section>
      <section className={styles.rate}>
        <h3 className={styles.heading4}>Rate & review</h3>
        <span>Share your experience to help others</span>
        <Stars />
      </section>
      <section>
        <div className={styles.average}>
          <span className={styles.rating}>4.7</span>
          <Image src='/fullstar.svg' alt="Full star" height={30} width={30} />
          <span className={styles.numOfReviews}>(28 Reviews)</span>
        </div>
        <div className={styles.comments}>
          {data?.comments.map(comment => (
            <Comment
              key={comment.id}
              author={comment.author}
              rateNumber={comment.rateNumber}
              content={comment.content}
            />
          ))}
          {/* <Comment
            author={{ name: 'Marie Smith', published: '1 mo ago' }}
            rateNumber={5.0}
            content="👍 I try other meditation podcasts and always come back to this. Beautifully arranged and spoken. It got me there."
          />
          <Comment
            author={{ name: 'Jackie Snow', src: '/jack.png', alt: 'Jack Snow', published: '1 mo ago' }}
            rateNumber={5.0}
            content="I use this most every morning to get me moving with whatever may be on my mind that needs attention 🤩"
          /> */}
        </div>
      </section>
    </div>
  )
}

export default Details
