import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './TrendingSliderContainer.module.scss'
import { IonCard } from '@ionic/react';


export const TrendingSliderContainer = () => {
    return (
        <div className={styles.trendingSliderContainer}>
            <div className={styles.trendingText}>
                <span className={styles.trendingHeader}>Trending Collection</span>
                <span className={styles.trendingAll}>See All</span>
            </div>
            <div className={styles.trendingSlider}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <IonCard className={styles.trendingSwipeCard}>
                            <div className={styles.trendingCardBadge}>NEW</div>
                        </IonCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <IonCard className={styles.trendingSwipeCard}>
                            <div className={styles.trendingCardBadge}>NEW</div>
                        </IonCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <IonCard className={styles.trendingSwipeCard}>
                            <div className={styles.trendingCardBadge}>NEW</div>
                        </IonCard>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
