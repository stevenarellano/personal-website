import styles from '/styles/modules/landing.module.scss';

const MobileLanding = () => {
    return (
        <div className="mobile-page">
            <div className="mobile-header py-4">
                <span className={styles.mSubtitle}>fullstack developer</span>
                <span className={styles.mTitle}>Steven Arellano</span>
            </div>

            <div className={styles.mLinkList}>
                <div className={styles.mLinkRow}>
                    <a
                        href="https://www.linkedin.com/in/stevenjarellano/"
                        rel="noreferrer"
                        target="_blank">
                        linkedin
                    </a>
                    <a className={styles.mFilledLink}></a>
                </div>
                <div className={styles.mLinkRow}>
                    <a className={`text-4xl ${styles.mFilledLink}`}></a>
                    <a
                        href="https://github.com/stevenarellano"
                        rel="noreferrer"
                        target="_blank">
                        github
                    </a>
                </div>
                <div className={styles.mLinkRow}>
                    <a
                        href="https://medium.com/@stevenjarellano"
                        rel="noreferrer"
                        target="_blank">
                        medium
                    </a>
                    <a className={styles.mFilledLink}></a>
                </div>
                <div className={styles.mLinkRow}>
                    <a className={styles.mFilledLink}></a>
                    <a className="text-4xl">:)</a>
                </div>
            </div>
        </div>
    );
};

export default MobileLanding;