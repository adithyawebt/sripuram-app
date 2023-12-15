import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonThumbnail, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';

import styles from './ChantCard.module.scss';
import ChantImage from '../../assets/icons/Namaste.svg';
import ChantPlayIcon from '../../assets/icons/play-outlined-alt.svg';

export const ChantCard = () => {
  const history = useHistory() ;

  const handleChantClick = () => {
    history.push('/chant');
  }

  return (
    <IonCard className={styles.chantCard}>
      <IonThumbnail className={styles.chantImage}><img src={ChantImage} alt="" /></IonThumbnail>
      <div className={styles.chantText}>
        <IonCardHeader className={styles.chantHeader}>
          <IonCardTitle className={styles.chantTitle}>Today's Chant</IonCardTitle>
          <IonCardSubtitle className={styles.chantSubtitle}>A daily chant for focused mindfullness and positive intention.</IonCardSubtitle>
          <button className={styles.chantButton} onClick={handleChantClick}>
          <IonThumbnail className={styles.chantPlayicon}><img src={ChantPlayIcon} alt="play button" /></IonThumbnail>
            <span className={styles.chantPlayText}>Start Today's Chant</span>
          </button>
        </IonCardHeader>
      </div>
    </IonCard>
  )
}
