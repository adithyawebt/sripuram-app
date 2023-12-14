import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonThumbnail, IonImg } from '@ionic/react';
import ExploreImage from '../../assets/icons/Group 7.svg'
import ExplorePlayIcon from '../../assets/icons/play-filled.svg'
import styles from './ExploreCard.module.scss';

export const ExploreCard = () => {
  return (
    <IonCard className={styles.exploreCard}>
      <div className={styles.exploreText}>
        <IonCardHeader className={styles.exploreHeader}>
          <IonCardTitle className={styles.exploreTitle}>Explore Temple</IonCardTitle>
          <IonCardSubtitle className={styles.exploreSubtitle}>Discover The Essence of a Journey of Spiritual Awakening.</IonCardSubtitle>
          <button className={styles.exploreButton}>
            <IonThumbnail className={styles.explorePlayicon}><img src={ExplorePlayIcon} alt="play button" /></IonThumbnail>
            <span className={styles.explorePlayText}>Watch live</span>
          </button>
        </IonCardHeader>
      </div>
      <IonThumbnail className={styles.exploreImage}><img src={ExploreImage} alt="temple image" /></IonThumbnail>
    </IonCard>
  )
}