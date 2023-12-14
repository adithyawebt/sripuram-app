import { IonContent, IonPage } from '@ionic/react';
import './Home.scss';
import { Header } from '../components/Header/Header';
import { ChantCard } from '../components/ChantCard/ChantCard'
import { ExploreCard } from '../components/ExploreCard/ExploreCard';
import { NavSlider } from '../components/NavSlider/NavSlider';
import data from '../components/NavSlider/NavSliderData.json'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        {/* <NavSlider data={ data.slides } /> */}
        <ChantCard />
        <ExploreCard />
        <div className="top-underlay"></div>
        <div className="bottom-underlay"></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
