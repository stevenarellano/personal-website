import styles from "../../styles/Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <a className={`${styles.navitem} ${styles.logo}`}>logo</a>

            <a className={`${styles.navitem} ${styles.underline}`}>about</a>
            <a className={`${styles.navitem} ${styles.underline}`}>
                experience
            </a>
            <a className={`${styles.navitem} ${styles.underline}`}>portfolio</a>
            <a className={`${styles.navitem} ${styles.underline}`}>contact</a>
            <a className={`${styles.navitem} `}>resume</a>
        </div>
    );
}
