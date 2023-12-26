import { IonCard, IonThumbnail } from '@ionic/react';

import styles from './ExploreCard.module.scss';

import ExploreImage from '../../assets/icons/Group 7.svg'
import ExplorePlayIcon from '../../assets/icons/play-filled.svg'

export const ExploreCard = () => {
  return (
    <div className={styles.exploreCardContainer}>
      <IonCard className={styles.exploreCard}>
        <div className={styles.exploreText}>
          <span className={styles.exploreTitle}>Explore Temple</span>
          <span className={styles.exploreSubtitle}>Discover The Essence of a Journey of Spiritual Awakening.</span>
          <button className={styles.exploreButton}>
            <IonThumbnail className={styles.explorePlayicon}><img src={ExplorePlayIcon} alt="play button" /></IonThumbnail>
            <span className={styles.explorePlayText}>Watch live</span>
          </button>
        </div>
        <IonThumbnail className={styles.exploreImage}><img src={ExploreImage} alt="temple image" /></IonThumbnail>
      </IonCard>
    </div>
  )
}