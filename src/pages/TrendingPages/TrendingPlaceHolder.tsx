import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import styles from './TrendingPlaceHolder.module.scss'

import BackIcon from '../../assets/icons/arrow-back-outline.svg'

export const TrendingPlaceHolder = () => {
    const history = useHistory();

    const handleBackIconClick = () => {
        history.push('/')
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.navBackIcon} onClick={handleBackIconClick}>
                    <IonIcon icon={BackIcon}></IonIcon>
                </div>
                <div className={styles.trendPageHeader}>Trending Topic</div>
                <div className={styles.trendPageText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam autem! Eum, magnam dolorum consequatur earum exercitationem pariatur optio nobis eaque aspernatur illo odio ipsa atque voluptatibus odit quas temporibus.
                </div>
                <div className={styles.topTrendUnderlay}></div>
                <div className={styles.bottomTrendUnderlay}></div>
            </IonContent>
        </IonPage>
    )
}
