import styles from "../../styles/Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <a className={`${styles.navitem} ${styles.logo}`}>logo</a>

            <a className={styles.navitem}>about</a>
            <a className={styles.navitem}>experience</a>
            <a className={styles.navitem}>portfolio</a>
            <a className={styles.navitem}>contact</a>
            <a className={styles.navitem}>resume</a>
        </div>
    );
}
