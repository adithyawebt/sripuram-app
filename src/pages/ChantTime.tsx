import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { IonCard, IonContent, IonIcon, IonPage, IonThumbnail } from '@ionic/react'
import { ChantTimerProgress } from '../components/ChantTimerProgress/ChantTimerProgress';

import styles from './ChantTime.module.scss'

import BellIcon from '../assets/icons/bell.svg'
import BackIcon from '../assets/icons/arrow-back-outline.svg'
import SunDownIcon from '../assets/icons/sunrise-1.svg'
import SunNoonIcon from '../assets/icons/sun.svg'
import CheckIcon from '../assets/icons/check-circle-fill.svg'
import PlayIcon from '../assets/icons/play-filled-alt.svg'
import PauseIcon from '../assets/icons/play-pause.svg'
import SunRiseIcon from '../assets/icons/sunrise.svg'
import SunSetIcon from '../assets/icons/sunset.svg'

interface ChantData {
    icon: string;
    name: string;
    duration: string;
}

const chantData: ChantData[] = [
    { icon: SunDownIcon, name: 'Manonmani Devi', duration: '6:00 AM - 6:30 AM' },
    { icon: SunDownIcon, name: 'Ganesha Mantra', duration: '10 AM - 10:30 AM' },
    { icon: SunNoonIcon, name: 'Lakshmi Mantra', duration: '12:00 PM - 12:30 PM' },
    { icon: SunNoonIcon, name: 'Shiva Chant', duration: '3:00 PM - 3:30 PM' },
    { icon: SunDownIcon, name: 'Krishna Kirtan', duration: '6:00 PM - 6:30 PM' },
    { icon: SunDownIcon, name: 'Ram Sloka', duration: '6:00 PM - 6:30 PM' },
];


export const ChantTime = () => {
    const icons = [PlayIcon, PauseIcon, CheckIcon];
    const history = useHistory();
    const [completionIcons, setCompletionIcons] = useState<Array<string>>(Array(chantData.length).fill(icons[0]));

    const handleCompletionIconClick = (index: number) => {
        const newIcons = [...completionIcons];
        newIcons[index] = icons[(icons.indexOf(completionIcons[index]) + 1) % icons.length];
        setCompletionIcons(newIcons);
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
                <div className={styles.chantTimeMainArea}>
                    <div className={styles.progressCirclesContainer}>
                        {...completionIcons.map((icon, index) => (
                            <div key={index} className={styles.radioButton}>
                                <div
                                    className={styles.outerCircle}
                                    onClick={() => handleCompletionIconClick(index)}
                                >
                                    {icon === CheckIcon && <div className={styles.innerCircle} />}
                                </div>
                                <div
                                    className={`${styles.progressSlashLine} ${index === completionIcons.length - 1 ? styles.lastProgressLine : ''
                                        }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.chantTimeCardsContainer}>
                        {chantData.map((chant, index) => (
                            <IonCard key={index} className={styles.chantTimeCards}>
                                <IonThumbnail className={styles.chantTimeIcon}>
                                    <img src={chant.icon} alt="" />
                                </IonThumbnail>
                                <div className={styles.chantTimeTextContainer}>
                                    <span className={styles.chantTimeName}>{chant.name}</span>
                                    <span className={styles.chantTimeDuration}>{chant.duration}</span>
                                </div>
                                <IonThumbnail
                                    className={styles.chantCompletion}
                                    onClick={() => handleCompletionIconClick(index)}
                                >
                                    <img src={completionIcons[index]} alt="play/pause/complete" />
                                </IonThumbnail>
                            </IonCard>
                        ))}
                    </div>
                </div>
                <div className={styles.topUnderlay}></div>
                <div className={styles.bottomUnderlay}></div>
            </IonContent>
        </IonPage>
    );
}
