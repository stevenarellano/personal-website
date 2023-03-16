// components/Welcome.tsx
import { useEffect, useState } from 'react';
import styles from '../styles/modules/welcome.module.scss';

interface WelcomeProps {
    typedText?: string;
    setOpening: (bool: boolean) => void;
}

const LETTER_TYPE_DELAY = 400;

const Welcome: React.FC<WelcomeProps> = ({ typedText = 'welcome!', setOpening }) => {
    const [displayText, setDisplayText] = useState('');
    const [hiddenText, setHiddenText] = useState(typedText);
    const [index, setIndex] = useState(0);

    const [classes, setClasses] = useState(`${styles.animationContainer}`);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index < typedText.length) {
                setDisplayText(displayText + typedText.charAt(index));
                setHiddenText(hiddenText.substring(1));
                setIndex(index + 1);
            } else {
                setClasses(`${styles.animationContainer} animate__animated animate__fadeOutDown`);
                setTimeout(() => {
                    setOpening(false);
                }, 750);
            }
        }, LETTER_TYPE_DELAY);

        return () => {
            clearInterval(intervalId);
        };
    }, [displayText, hiddenText, index, setOpening, typedText]);

    return (
        <div className={styles.container}>
            <div className={classes}>
                <div className={styles.welcome}>{displayText}</div>
                <div className={styles.welcomeCursor} />
                <div className={styles.hiddenText}>{hiddenText}</div>

            </div>
        </div>
    );
};

export default Welcome;