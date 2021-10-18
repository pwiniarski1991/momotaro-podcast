import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Details.module.css'

const Details: NextPage = () => {
  console.log('styles: ', styles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Momotaro details</title>
        <meta name="description" content="Momotaro details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h6 className={styles.heading6}>Welness</h6>
      <h2 className={styles.heading2}>Sleep With Me Bedtime Stories</h2>

      <section className={styles.first}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image src="/avatar.png" alt="Avatar" className={styles.avatar} height={40} width={40} />
            <div className={styles.author}>By Joseph Frank</div>
          </div>
          <button className={styles.followBtn}>Follow</button>
        </div>
        <Image src="/image.png" alt="Swinging woman" className={styles.image} height={173} width={319} />
        <p className={styles.authorText}>
          Train your mind for a happier, healthier life by learning the fundamentals of mediation and mindfullness.
        </p>
      </section>
      <div className={styles.offline}>
        <div className={styles.left}>
          <span>Offline download</span>
          <div>100mb</div>
        </div>
        <input type="checkbox" name="switch" id="switch" />
        <label className={styles.switchLabel} htmlFor="switch"></label>
      </div>
      <section className={styles.sessions}>
        <h6 className={styles.sessionHeading}>4 Sessions</h6>
        <ul className={styles.sessionsList}>
          <li className={styles.session}>
            <button className={styles.iconBtn}>
              <Image src="/play.png" alt="Play button" height={54} width={54} />
            </button>
            <div className={styles.sessionInfo}>
              Train Whistle At Night
              <span className={styles.sessionExtra}>15 mins • Free</span>
            </div>
          </li>
          <li className={styles.session}>
            <button className={styles.iconBtn}>
              <Image src="/play.png" alt="Play button" height={54} width={54} />
            </button>
            <div className={styles.sessionInfo}>
              The Twilight Zone
              <span className={styles.sessionExtra}>30 mins • Free</span>
            </div>
          </li>
          <li className={styles.session}>
            <button className={styles.iconBtn}>
              <Image src="/lock.png" alt="Lock button" height={54} width={54} />
            </button>
            <div className={styles.sessionInfo}>
              Train Whistle At Night
              <span className={styles.sessionExtra}>Locked</span>
            </div>
          </li>
          <li className={styles.session}>
            <button className={styles.iconBtn}>
              <Image src="/lock.png" alt="Lock button" height={54} width={54} />
            </button>
            <div className={styles.sessionInfo}>
              The Twilight Zone
              <span className={styles.sessionExtra}>Locked</span>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.rate}>
        <h3 className={styles.heading4}>Rate & review</h3>
        <span>Share your experience to help others</span>
        <div className={styles.stars}>
          <Image src='/fullstar.svg' alt="Full star" height={30} width={30} />
          <Image src='/fullstar.svg' alt="Full star" height={30} width={30} />
          <Image src='/fullstar.svg' alt="Full star" height={30} width={30} />
          <Image src='/emptystar.svg' alt="Empty star" height={30} width={30} />
          <Image src='/emptystar.svg' alt="Empty star" height={30} width={30} />
        </div>
      </section>
      <section>
        <div className={styles.average}>
          <span className={styles.rating}>4.7</span>
          <Image src='/fullstar.svg' alt="Full star" height={30} width={30} />
          <span className={styles.numOfReviews}>(28 Reviews)</span>
        </div>
        <div className={styles.comments}>
          <div className={styles.comment}>
            <Image src='/marie.png' alt="Marie Smith" height={38} width={38} />
            <div className={styles.description}>
              <div className={styles.top}>
                <div className={styles.info}>
                  <div>Marie Smith</div>
                  <span>1 mo ago</span>
                </div>
                <div className={styles.label}>
                  <Image src='/fullstar.svg' alt="Full star" height={30} width={30} /><span className={styles.rateNumber}>5.0</span>
                </div>
              </div>
              <div className={styles.post}>
                👍 I try other meditation podcasts and always come back to this. Beautifully arranged and spoken. It got me there.
              </div>
            </div>
          </div>
          <div className={styles.comment}>
            <Image src='/jack.png' alt="Jack Snow" height={38} width={38} />
            <div className={styles.description}>
              <div className={styles.top}>
                <div className={styles.info}>
                  <div>Jack Snow</div>
                  <span>1 mo ago</span>
                </div>
                <div className={styles.label}>
                  <Image src='/fullstar.svg' alt="Full star" height={30} width={30} /><span className={styles.rateNumber}>5.0</span>
                </div>
              </div>
              <div className={styles.post}>
                I use this most every morning to get me moving with whatever may be on my mind that needs attention 🤩
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Details
