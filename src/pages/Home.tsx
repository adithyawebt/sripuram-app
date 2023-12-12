import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { Header } from '../components/Header/Header';
import { ChantCard } from '../components/ChantCard/ChantCard'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <ChantCard />

        <div className="top-underlay"></div>
        <div className="bottom-underlay"></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
