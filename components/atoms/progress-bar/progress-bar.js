import { useEffect, useState } from 'react';
import styles from './progress-bar.module.css'

export default function ProgressBar({maxPercent=''}){
    const [width, setWidth] = useState(0);
    const [percentage,setPercentage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prevPercentage => {
                const newPercentage = prevPercentage + 1;
                return newPercentage <= maxPercent ? newPercentage : maxPercent;
            });
        }, 100);

        // Stop the interval when maximum percentage is reached
        if (percentage >= maxPercent) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [maxPercent]);

    useEffect(() => {
        setWidth(percentage); 
    }, [percentage]);

    return(
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={{ width: `${width}%` }}></div>
        </div>
    )
}


