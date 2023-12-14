import { IonContent, IonPage } from '@ionic/react';
import styles from './Home.module.scss';
import { Header } from '../components/Header/Header';
import { ChantCard } from '../components/ChantCard/ChantCard'
import { ExploreCard } from '../components/ExploreCard/ExploreCard';
import { NavSlider } from '../components/NavSlider/NavSlider';
import data from '../components/NavSlider/NavSliderData.json'
import { TrendingSliderContainer } from '../components/TrendingSlider/TrendingSliderContainer'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        {/* <NavSlider data={ data.slides } /> */}
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
