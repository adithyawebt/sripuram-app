import { IonContent, IonIcon, IonPage } from '@ionic/react'
import { useHistory } from 'react-router-dom';
import styles from '../NavSliderPages/NavSliderPages.module.scss'

import { Header } from '../../components/Header/Header';

export const Bhajan = () => {
    const history = useHistory();

    return (
        <IonPage>
            <IonContent fullscreen>
                <Header greeting="" />
                <div className={styles.navPageHeader}>Bhajan</div>
                <div className={styles.navPageText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam autem! Eum, magnam dolorum consequatur earum exercitationem pariatur optio nobis eaque aspernatur illo odio ipsa atque voluptatibus odit quas temporibus.
                </div>
                <div className={`${styles.topNavUnderlay} ${styles.bhajanBG}`}></div>
                <div className={styles.bottomNavUnderlay}></div>
            </IonContent>
        </IonPage>
    )
}
