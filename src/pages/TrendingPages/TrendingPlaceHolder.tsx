import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { Header } from "../../components/Header/Header";

import styles from './TrendingPlaceHolder.module.scss'

import TempleBG from '../../assets/images/temple.jpg'

export const TrendingPlaceHolder = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Header greeting=""/>
                <div className={styles.trendPageHeader}>Trending Topic</div>
                <div className={styles.trendPageText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam autem! Eum, magnam dolorum consequatur earum exercitationem pariatur optio nobis eaque aspernatur illo odio ipsa atque voluptatibus odit quas temporibus.
                </div>
                <div className={styles.topTrendUnderlay}><img src={ TempleBG } alt="" /> </div>
                <div className={styles.bottomTrendUnderlay}></div>
            </IonContent>
        </IonPage>
    )
}
