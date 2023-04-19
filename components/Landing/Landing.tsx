import { useEffect, useState } from 'react';
import styles from '/styles/modules/landing.module.scss';
import Image from 'next/image';

const SocialBoxes = () => (
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
);

const LocationBox = () => (
    <div className={styles.locationBox}>
        <div className={styles.locationPin}>
            <Image alt='icon' src='/assets/map-pin.svg' height={20} width={20} />
        </div>
        <div className={styles.locationText}>New York City</div>
        <div className={styles.locationIcon}>
            <Image alt='location' src='/landing/nyc.png' width={200} height={200} />
        </div>
    </div>
);

const SocialsList = () => (
    <div className={styles.socialsList}>
        <div>LINKS</div>
        <a href='https://www.linkedin.com/in/stevenjarellano/' target='_blank' rel="noreferrer">[LINKEDIN]</a>
        <a href='https://github.com/stevenarellano' target='_blank' rel="noreferrer">[GITHUB]</a>
        <a href='https://medium.com/@stevenjarellano' target='_blank' rel="noreferrer">[MEDIUM]</a>
        <a href='https://twitter.com/_stevenarellano' target='_blank' rel="noreferrer">[TWITTER]</a>
    </div>
);


const Landing = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(true);
    }, []);


    return (
        <div className={`${styles.landingContainer} page-container ${active ? styles.showActive : ""}`}>
            <div className={styles.blackOffset} />
            <div className={styles.header}>
                <div>STEVEN ARELLANO.</div>
                <div>buildr</div>
            </div>
            <SocialBoxes />
            <LocationBox />
            <SocialsList />
        </div>
    );
};

export default Landing;;