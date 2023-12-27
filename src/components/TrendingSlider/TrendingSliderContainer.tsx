import { IonCard, IonThumbnail } from '@ionic/react';
import 'swiper/css';
import { useHistory } from 'react-router-dom';

import styles from './TrendingSliderContainer.module.scss';

import sliderData from '../../JSON/trendingSliderData.json'

export const TrendingSliderContainer = () => {
    const history = useHistory();

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
                {sliderData.map((data, index) => {
                    return <div key={index} className={styles.trendingCardHolder}>
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
