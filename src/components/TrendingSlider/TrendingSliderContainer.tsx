import { IonCard, IonThumbnail } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useHistory } from 'react-router-dom';

import styles from './TrendingSliderContainer.module.scss';

import TrendingImage1 from '../../assets/icons/chakras.svg';
import TrendingImage2 from '../../assets/icons/meditation.svg';
import TrendingImage3 from '../../assets/icons/Namaste.svg'

export const TrendingSliderContainer = () => {
    const history = useHistory();
    const sliderData = [
        {
            subtitle: 'Lorem ipsum dolor sit',
            image: TrendingImage1,
            path: '/trending'
        },
        {
            subtitle: 'amet consectetur adipisicing elit',
            image: TrendingImage2,
            path: '/trending'
        },
        {
            subtitle: 'Ipsam deleniti magnam enim',
            image: TrendingImage3,
            path: '/trending'
        }
    ]

    const handleSlideClick = (path: string) => {
        history.push(path);
    };

    return (
        <div className={styles.trendingSliderContainer}>
            <div className={styles.trendingText}>
                <span className={styles.trendingHeader}>Trending Collection</span>
                <span className={styles.trendingAll}>See All</span>
            </div>
            <div className={styles.trendingSlider}>
                {sliderData.map((data) => {
                    return <div className={styles.trendingCardHolder}>
                        <IonCard className={styles.trendingSwipeCard} onClick={() => handleSlideClick(data.path)}>
                            <div className={styles.trendingCardBadge}>NEW</div>
                            <IonThumbnail className={styles.trendingImage}><img src={data.image} alt="" /></IonThumbnail>
                            <div className={styles.trendingSubtitle}>{data.subtitle}</div>
                        </IonCard>
                    </div>
                })}
            </div>
        </div>
    )
}
