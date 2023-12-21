import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { IonIcon } from '@ionic/react';

import styles from './Header.module.scss';

import BellIcon from '../../assets/icons/bell.svg';
import BackIcon from '../../assets/icons/arrow-back-outline.svg';

interface HeaderProps {
    greeting: string;
}

export const Header = (props: HeaderProps) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const history = useHistory();

    const handleBackIconClick = () => {
        history.push('/');
    };

    const notifCount = 29;

    return (
        <div className={styles.headerContainer}>
            {isHomePage ? (
                <>
                    <span className={styles.greeting}>{props.greeting}</span>
                    <div className={styles.iconContainer}>
                        <div className={styles.notificationBadge}>
                            <span className={styles.notificationCount}>{notifCount}</span>
                        </div>
                        <IonIcon icon={BellIcon}></IonIcon>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.backIcon} onClick={handleBackIconClick}>
                        <IonIcon icon={BackIcon}></IonIcon>
                    </div>
                    <span className={styles.greeting}>{props.greeting}</span>
                    <div className={styles.iconContainer}>
                        <div className={styles.notificationBadge}>
                            <span className={styles.notificationCount}>{notifCount}</span>
                        </div>
                        <IonIcon icon={BellIcon}></IonIcon>
                    </div>
                </>
            )}
        </div>
    );
};
