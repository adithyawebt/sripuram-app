import { IonContent, IonPage } from '@ionic/react';
import styles from './Home.module.scss';
import { Header } from '../components/Header/Header';
import { ChantCard } from '../components/ChantCard/ChantCard'
import { ExploreCard } from '../components/ExploreCard/ExploreCard';
import { NavSlider } from '../components/NavSlider/NavSlider';
import { TrendingSliderContainer } from '../components/TrendingSlider/TrendingSliderContainer'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <NavSlider />
        <ChantCard />
        <TrendingSliderContainer />
        <ExploreCard />
        <div className={styles.topUnderlay}></div>
        <div className={styles.bottomUnderlay}></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
