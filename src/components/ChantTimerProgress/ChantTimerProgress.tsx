import { useState, useEffect, CSSProperties } from 'react';
import styles from './ChantTimerProgress.module.scss';

export const ChantTimerProgress = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lastTap, setLastTap] = useState(0);
    const [rotateDegree, setRotateDegree] = useState<number>(0);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setTimer(0);
    };

    const handleTap = () => {
        const now = new Date().getTime();
        const DOUBLE_TAP_DELAY = 300;

        if (now - lastTap < DOUBLE_TAP_DELAY) {
            handleDoubleTap();
        } else {
            setLastTap(now);
            if (isRunning) {
                stopTimer();
            } else {
                startTimer();
            }
        }
    };

    const handleDoubleTap = () => {
        resetTimer();
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        const newRotateDegree = (timer / 300) * 180 - 24; // Adjust as needed
        setRotateDegree(newRotateDegree);
    }, [timer]);

    const progressBarStyle: CSSProperties = {
        transform: `rotate(calc( 180deg * ${rotateDegree}/ 100))`
    }

    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressBarWrapper}>
                <div className={styles.progressCircle}>
                    <div className={styles.progressFill} style={progressBarStyle} ></div>
                </div>
            </div>
            <div className={styles.progressTimerWrapper}>
                <div
                    className={styles.progressTimer}
                    onClick={handleTap}
                    onDoubleClick={handleDoubleTap}
                >
                    <span className={styles.progressChantName}>Chant Name</span>
                    <span className={styles.progressChantTime}>{formatTime(timer)}</span>
                </div>
            </div>
        </div>
    );
};
