import styles from './Header.module.scss'
import { IonIcon } from '@ionic/react';

import BellIcon from '../../assets/icons/bell.svg'

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <span className={styles.greeting}>Om Namo Narayani</span>
            <div className={styles.iconContainer}>
                <IonIcon icon={BellIcon}></IonIcon>
            </div>
        </div>
    )
}

