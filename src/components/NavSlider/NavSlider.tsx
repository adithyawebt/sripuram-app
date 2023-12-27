import { IonThumbnail } from '@ionic/react';
import { useHistory } from 'react-router-dom';

import styles from './NavSlider.module.scss'

import navSliderData from '../../JSON/NavSliderData.json'

export const NavSlider = () => {
    const history = useHistory();

    const handleSlideClick = (path: string) => {
        history.push(path);
    };

    return (
        <div className={styles.navSliderContainer}>
            {navSliderData.map((data, index) => {
                return <div key={index} className={styles.navSlidePiece} onClick={() => handleSlideClick(data.path)}>
                    <IonThumbnail className={styles.navSlidePieceImage}><img src={data.image} alt=" nav slider image" /></IonThumbnail>
                    <div className={styles.navSlidePieceTitle}>{data.title}</div>
                </div>
            })}
        </div>
    )
}
