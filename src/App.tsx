import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { ChantTime } from './pages/ChantTime';
import { Bhajan } from './pages/NavSliderPages/Bhajan';
import { Mantra } from './pages/NavSliderPages/Mantra';
import { Meditation } from './pages/NavSliderPages/Meditation';
import { Quotes } from './pages/NavSliderPages/Quotes';
import { Temple } from './pages/NavSliderPages/Temple';
import { TrendingPlaceHolder } from './pages/TrendingPages/TrendingPlaceHolder';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet placeholder={undefined}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chant">
          <ChantTime />
        </Route>
        <Route exact path="/temple">
          <Temple />
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route exact path="/meditation">
          <Meditation />
        </Route>
        <Route exact path="/mantra">
          <Mantra />
        </Route>
        <Route exact path="/bhajan">
          <Bhajan />
        </Route>
        <Route exact path="/trending">
          <TrendingPlaceHolder />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
