import { useEffect, useState } from 'react';
import styles from '/styles/modules/landing.module.scss';

const Landing = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(true);
    }, []);


    return (
        <div className={`${styles.landingContainer} page-container ${active ? styles.showActive : ""}`}>
            <div className={styles.blackOffset} />
            <div className={styles.header}>
                <h1>STEVEN ARELLANO.</h1>
                <h3>buildr</h3>
            </div>
            <div className={styles.socialBoxes}>
                <a
                    href='https://www.linkedin.com/in/stevenjarellano/'
                    target='_blank'
                    rel="noreferrer"
                    className={[styles.socialContent, styles.bL, styles.bT, styles.bR].join(' ')}>
                    linkedin
                </a>
                <a className={styles.socialHidden} />
                <a className={styles.socialHidden} />
                <a className={styles.socialFilled} />
                <a
                    href='https://github.com/stevenarellano'
                    target='_blank'
                    rel="noreferrer"
                    className={[styles.socialContent, styles.bT, styles.bR].join(' ')}>
                    github
                </a>
                <a className={styles.socialHidden} />
                <a
                    href='https://medium.com/@stevenjarellano'
                    target='_blank'
                    rel="noreferrer"
                    className={[styles.socialContent, styles.bT, styles.bB, styles.bL, styles.bR].join(' ')}>
                    medium
                </a>
                <a
                    href='https://twitter.com/_stevenarellano'
                    target='_blank'
                    rel="noreferrer"
                    className={[styles.socialContent, styles.bT, styles.bB, styles.bR].join(' ')}>
                    twitter
                </a>
                <a className={styles.socialFilled} />
            </div>
        </div>
    );
};

export default Landing;