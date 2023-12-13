import React from 'react';
import { IonSlides, IonSlide, IonText, IonContent, IonPage } from '@ionic/react';
import './NavSlider.scss';

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
        <IonSlides options={sliderOptions} className="NavSlider">
          {data.map((item, index) => (
            <IonSlide key={index} className="NavSlide">
              <div className="NavSlideContent">
                <img src={item.image} alt={`Nav Slide ${index + 1}`} className="NavSlideImage" />
                <IonText className="NavSlideText">{item.text}</IonText>
              </div>
            </IonSlide>
          ))}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
