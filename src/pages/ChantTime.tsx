import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { IonCard, IonContent, IonIcon, IonPage, IonThumbnail } from '@ionic/react'
import { ChantTimerProgress } from '../components/ChantTimerProgress/ChantTimerProgress';

import styles from './ChantTime.module.scss'

import BellIcon from '../assets/icons/bell.svg'
import BackIcon from '../assets/icons/arrow-back-outline.svg'
import SunDownIcon from '../assets/icons/sunrise-1.svg'
import SunRiseIcon from '../assets/icons/sunrise.svg'
import SunNoonIcon from '../assets/icons/sun.svg'
import CheckIcon from '../assets/icons/check-circle-fill.svg'
import PlayIcon from '../assets/icons/play-outlined-alt.svg'
import PauseIcon from '../assets/icons/play-pause.svg'
import SunSetIcon from '../assets/icons/sunset.svg'

export const ChantTime = () => {
    const icons = [PlayIcon, PauseIcon, CheckIcon];
    const history = useHistory();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCompletionIconClick = () => {
        const newIndex = (currentIndex + 1) % icons.length;
        setCurrentIndex(newIndex);
    };

    const handleBackIconClick = () => {
        history.push('/');
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.chantTimeHeader}>
                    <div className={styles.chantBackIcon} onClick={handleBackIconClick}>
                        <IonIcon icon={BackIcon}></IonIcon>
                    </div>
                    <span className={styles.chantTimeHeaderGreeting}>Chant Time</span>
                    <div className={styles.chantHeaderIcon}>
                        <IonIcon icon={BellIcon}></IonIcon>
                    </div>
                </div>
                <ChantTimerProgress />
                <div className={styles.sunTiming}>
                    <div className={styles.sunTime}>
                        <div className={styles.sunTimeIconHolder}>
                            <IonThumbnail>
                                <img src={SunRiseIcon} alt="" />
                            </IonThumbnail>
                        </div>
                        <div className={styles.sunTimeTextHolder}>
                            <span className={styles.sunTimeText}>Start By</span>
                            <span className={styles.sunTimeTime}>6:00 AM</span>
                        </div>
                    </div>
                    <div className={styles.sunTime}>
                        <div className={styles.sunTimeTextHolder}>
                            <span className={styles.sunTimeText}>End By</span>
                            <span className={styles.sunTimeTime}>6:30 PM</span>
                        </div>
                        <div className={styles.sunTimeIconHolder}>
                            <IonThumbnail>
                                <img src={SunSetIcon} alt="" />
                            </IonThumbnail>
                        </div>
                    </div>
                </div>
                <IonCard className={styles.chantTimeCards}>
                    <IonThumbnail className={styles.chantTimeIcon}><img src={SunDownIcon} alt="" /></IonThumbnail>
                    <div className={styles.chantTimeTextContainer}>
                        <span className={styles.chantTimeName}>Manonmani Devi</span>
                        <span className={styles.chantTimeDuration}>6:00 AM - 6:30 AM</span>
                    </div>
                    <IonThumbnail className={styles.chantCompletion} onClick={handleCompletionIconClick}><img src={icons[currentIndex]} alt="play/pause/complete" /></IonThumbnail>
                </IonCard>
                <IonCard className={styles.chantTimeCards}>
                    <IonThumbnail className={styles.chantTimeIcon}><img src={SunDownIcon} alt="" /></IonThumbnail>
                    <div className={styles.chantTimeTextContainer}>
                        <span className={styles.chantTimeName}>Ganesha Mantra</span>
                        <span className={styles.chantTimeDuration}>10 AM - 10:30 AM</span>
                    </div>
                    <IonThumbnail className={styles.chantCompletion} onClick={handleCompletionIconClick}><img src={icons[currentIndex]} alt="play/pause/complete" /></IonThumbnail>
                </IonCard>
                <IonCard className={styles.chantTimeCards}>
                    <IonThumbnail className={styles.chantTimeIcon}><img src={SunNoonIcon} alt="" /></IonThumbnail>
                    <div className={styles.chantTimeTextContainer}>
                        <span className={styles.chantTimeName}>Lakshmi Mantra</span>
                        <span className={styles.chantTimeDuration}>12:00 PM - 12:30 PM</span>
                    </div>
                    <IonThumbnail className={styles.chantCompletion} onClick={handleCompletionIconClick}><img src={icons[currentIndex]} alt="play/pause/complete" /></IonThumbnail>
                </IonCard>
                <IonCard className={styles.chantTimeCards}>
                    <IonThumbnail className={styles.chantTimeIcon}><img src={SunNoonIcon} alt="" /></IonThumbnail>
                    <div className={styles.chantTimeTextContainer}>
                        <span className={styles.chantTimeName}>Shiva Chant</span>
                        <span className={styles.chantTimeDuration}>3:00 PM - 3:30 PM</span>
                    </div>
                    <IonThumbnail className={styles.chantCompletion} onClick={handleCompletionIconClick}><img src={icons[currentIndex]} alt="play/pause/complete" /></IonThumbnail>
                </IonCard>
                <IonCard className={styles.chantTimeCards}>
                    <IonThumbnail className={styles.chantTimeIcon}><img src={SunDownIcon} alt="" /></IonThumbnail>
                    <div className={styles.chantTimeTextContainer}>
                        <span className={styles.chantTimeName}>Krishna Kirtan</span>
                        <span className={styles.chantTimeDuration}>6:00 PM - 6:30 PM</span>
                    </div>
                    <IonThumbnail className={styles.chantCompletion} onClick={handleCompletionIconClick}><img src={icons[currentIndex]} alt="play/pause/complete" /></IonThumbnail>
                </IonCard>
                <div className={styles.topUnderlay}></div>
                <div className={styles.bottomUnderlay}></div>
            </IonContent>
        </IonPage>
    )
}
