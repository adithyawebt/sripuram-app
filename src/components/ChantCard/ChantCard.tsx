import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonThumbnail, IonImg } from '@ionic/react';
import ChantImage from '../../assets/icons/Namaste.svg'
import ChantPlayIcon from '../../assets/icons/play-outlined-alt.svg'
import styles from './ChantCard.module.scss';

export const ChantCard = () => {
  return (
    <IonCard className={styles.chantCard}>
      <IonThumbnail className={styles.chantImage}><img src={ChantImage} alt="" /></IonThumbnail>
      <div className={styles.chantText}>
        <IonCardHeader className={styles.chantHeader}>
          <IonCardTitle className={styles.chantTitle}>Today's Chant</IonCardTitle>
          <IonCardSubtitle className={styles.chantSubtitle}>A daily chant for focused mindfullness and positive intention.</IonCardSubtitle>
          <button className={styles.chantButton}>
          <IonThumbnail className={styles.chantPlayicon}><img src={ChantPlayIcon} alt="play button" /></IonThumbnail>
            <span className={styles.chantPlayText}>Start Today's Chant</span>
          </button>
        </IonCardHeader>
      </div>
    </IonCard>
  )
}
