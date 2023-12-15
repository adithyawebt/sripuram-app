import { IonContent, IonIcon, IonPage } from '@ionic/react'
import { useHistory } from 'react-router-dom';
import styles from '../NavSliderPages/NavSliderPages.module.scss'
import BackIcon from '../../assets/icons/arrow-back-outline.svg'

export const Quotes = () => {
    const history = useHistory();

    const handleBackIconClick = () => {
        history.push('/home');
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.navBackIcon} onClick={handleBackIconClick}>
                    <IonIcon icon={BackIcon}></IonIcon>
                </div>
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
