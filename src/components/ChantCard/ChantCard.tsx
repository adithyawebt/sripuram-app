import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonThumbnail, IonImg } from '@ionic/react';
import ChantImage from '../../assets/icons/Namaste.svg'
import './ChantCard.scss';

export const ChantCard = () => {
  return (
    <IonCard className='chantCard'>
      <IonThumbnail className='chantImage'><img src={ChantImage} alt="" /></IonThumbnail>
      <div className='chantText'>
        <IonCardHeader className='chantHeader'>
          <IonCardTitle className='chantTitle'>Today's Chant</IonCardTitle>
          <IonCardSubtitle className='chantSubtitle'>A daily chant for focused mindfullness and positive intention.</IonCardSubtitle>
          <button className='chantButton'></button>
        </IonCardHeader>
      </div>
    </IonCard>
  )
}
