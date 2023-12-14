import React from 'react';
import { IonSlides, IonSlide, IonText, IonContent, IonPage } from '@ionic/react';
import styles from './NavSlider.module.scss';

interface SlideData {
  image: string;
  text: string;
}

interface NavSliderProps {
  data: SlideData[];
}

export const NavSlider: React.FC<NavSliderProps> = ({ data }) => {
  const sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 400,
  };

  return (
    <IonPage>
      <IonContent>
        <IonSlides options={sliderOptions} className={styles.navSlider}>
          {data.map((item, index) => (
            <IonSlide key={index} className={styles.navSlide}>
              <div className={styles.navSlideContent}>
                <img src={item.image} alt={`Nav Slide ${index + 1}`} className={styles.navSlideImage} />
                <IonText className={styles.navSlideText}>{item.text}</IonText>
              </div>
            </IonSlide>
          ))}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
