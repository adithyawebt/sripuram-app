import { useHistory } from 'react-router-dom';

import styles from './NavSlider.module.scss'

import BhajanImage from '../../assets/images/bhajan.jpg';
import MeditationImage from '../../assets/images/meditation.jpg';
import TempleImage from '../../assets/images/temple-main.jpg';
import MantraImage from '../../assets/images/mantra.jpg'
import QuotesImage from '../../assets/images/quotes.jpg'
import { IonThumbnail } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const NavSlider = () => {
    const history = useHistory();
    const navSliderData = [
        {
            image: TempleImage,
            title: 'Temple',
            path: '/temple',
        },
        {
            image: BhajanImage,
            title: 'Bhajan',
            path: '/bhajan',
        },
        {
            image: MeditationImage,
            title: 'Meditation',
            path: '/meditation',
        },
        {
            image: MantraImage,
            title: 'Mantra',
            path: '/mantra',
        },
        {
            image: QuotesImage,
            title: 'Quotes',
            path: '/quotes',
        },
    ]

    const handleSlideClick = (path: string) => {
        history.push(path);
    };

    return (
        <div className={styles.navSliderContainer}>
            {navSliderData.map((data) => {
                return <div className={styles.navSlidePiece} onClick={() => handleSlideClick(data.path)}>
                    <IonThumbnail className={styles.navSlidePieceImage}><img src={data.image} alt=" nav slider image" /></IonThumbnail>
                    <div className={styles.navSlidePieceTitle}>{data.title}</div>
                </div>
            })}
        </div>
    )
}
