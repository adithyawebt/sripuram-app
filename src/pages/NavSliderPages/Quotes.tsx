import { IonContent, IonIcon, IonPage } from '@ionic/react'
import { Header } from '../../components/Header/Header'

import styles from '../NavSliderPages/NavSliderPages.module.scss'

export const Quotes = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Header greeting="" />
                <div className={styles.navPageHeader}>Quotes</div>
                <div className={styles.navPageText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam autem! Eum, magnam dolorum consequatur earum exercitationem pariatur optio nobis eaque aspernatur illo odio ipsa atque voluptatibus odit quas temporibus.
                </div>
                <div className={`${styles.topNavUnderlay} ${styles.quotesBG}`}></div>
                <div className={styles.bottomNavUnderlay}></div>
            </IonContent>
        </IonPage>
    )
}
