import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.scss';
import { Header } from '../components/Header/Header';
import { ChantCard } from '../components/ChantCard/ChantCard'
import { ExploreCard } from '../components/ExploreCard/ExploreCard';
import { NavSlider } from '../components/NavSlider/NavSlider';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        {/* <NavSlider data={SlideData} /> */}
        <ChantCard />
        <ExploreCard />
        <div className="top-underlay"></div>
        <div className="bottom-underlay"></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
