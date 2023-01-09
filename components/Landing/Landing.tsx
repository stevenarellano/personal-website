import styles from '/styles/modules/landing.module.scss';

const Landing = () => {
    return (
        <div className={`${styles.landingContainer} page-container`}>
            <div className={styles.blackOffset} />
            <div className={styles.header}>
                <h1>STEVEN ARELLANO.</h1>
                <h3>fullstack developer</h3>
            </div>
            <div className={styles.socialBoxes}>
                <a
                    href='https://www.linkedin.com/in/stevenjarellano/'
                    target='_blank'
                    rel="noreferrer"
                    className={`${styles.socialBox} ${styles.socialContent}`}>
                    linkedin
                </a>
                <a className={`${styles.socialBox} ${styles.socialHidden}`} />
                <a className={`${styles.socialBox} ${styles.socialHidden}`} />
                <a className={`${styles.socialBox} ${styles.socialFilled}`} />
                <a
                    href='https://github.com/stevenarellano'
                    target='_blank'
                    rel="noreferrer"
                    className={`${styles.socialBox} ${styles.socialContent}`}>
                    github
                </a>
                <a className={`${styles.socialBox} ${styles.socialHidden}`} />
                <a
                    href='https://medium.com/@stevenjarellano'
                    target='_blank'
                    rel="noreferrer"
                    className={`${styles.socialBox} ${styles.socialContent}`}>
                    medium
                </a>
                <a className={`${styles.socialBox} ${styles.socialContent}`} />
                <a className={`${styles.socialBox} ${styles.socialFilled}`} />
            </div>
        </div>
    );
};

export default Landing;