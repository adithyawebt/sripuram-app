import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonThumbnail, IonImg } from '@ionic/react';
import ExploreImage from '../../assets/icons/Group 7.svg'
import './ExploreCard.scss';

export const ExploreCard = () => {
  return (
    <IonCard className='exploreCard'>
      <div className='exploreText'>
        <IonCardHeader className='exploreHeader'>
          <IonCardTitle className='exploreTitle'>Explore Temple</IonCardTitle>
          <IonCardSubtitle className='exploreSubtitle'>Discover The Essence of a Journey of Spiritual Awakening.</IonCardSubtitle>
          <button className='exploreButton'></button>
        </IonCardHeader>
      </div>
      <IonThumbnail className='exploreImage'><img src={ExploreImage} alt="" /></IonThumbnail>
    </IonCard>
  )
}