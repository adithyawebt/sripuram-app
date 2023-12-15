import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import styles from './TrendingPlaceHolder.module.scss'

import BackIcon from '../../assets/icons/arrow-back-outline.svg'

export const TrendingPlaceHolder = () => {
    const history = useHistory();

    const handleBackIconClick = () => {
        history.push('/home')
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.navBackIcon} onClick={handleBackIconClick}>
                    <IonIcon icon={BackIcon}></IonIcon>
                </div>
                <div className={styles.topTrendUnderlay}></div>
                <div className={styles.bottomTrendUnderlay}></div>
            </IonContent>
        </IonPage>
    )
}
