import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import { Story } from '../components/story/Story';
import { Stars } from '../components/stars/Stars';
import styles from '../styles/Details.module.css'
import { SwitchButton } from '../components/switchButton/SwitchButton';
import { SessionItem } from '../components/sessionItem/SessionItem';
import { Comment } from '../components/comment/Comment';


const Details: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Momotaro details</title>
        <meta name="description" content="Momotaro details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h6 className={styles.heading6}>Welness</h6>
      <h2 className={styles.heading2}>Sleep With Me Bedtime Stories</h2>

      <Story
        author="by Joseph Frak"
        label="Follow"
        description=" Train your mind for a happier, healthier life by learning the fundamentals of mediation and mindfullness."
      />
      <SwitchButton
        text="Offline download"
        fileSize="100mb"
      />
      <section className={styles.sessions}>
        <h6 className={styles.sessionHeading}>4 Sessions</h6>
        <ul className={styles.sessionsList}>
          <SessionItem
            title="Train Whistle At Night"
            info="15 mins • Free"
          />
          <SessionItem
            title="The Twilight Zone"
            info="30 mins • Free"
          />
          <SessionItem
            title="Train Whistle At Night"
            info="Locked"
          />
          <SessionItem
            title="The Twilight Zone"
            info="Locked"
          />
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
          <Comment
            author={{ name: 'Marie Smith', published: '1 mo ago' }}
            rateNumber={5.0}
            content="👍 I try other meditation podcasts and always come back to this. Beautifully arranged and spoken. It got me there."
          />
          <Comment
            author={{ name: 'Jackie Snow', src: '/jack.png', alt: 'Jack Snow', published: '1 mo ago' }}
            rateNumber={5.0}
            content="I use this most every morning to get me moving with whatever may be on my mind that needs attention 🤩"
          />
        </div>
      </section>
    </div>
  )
}

export default Details
