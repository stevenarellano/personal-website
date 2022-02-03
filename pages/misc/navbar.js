import styles from "../../styles/misc/Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <a className={`${styles.navitem} ${styles.logo}`}>logo</a>

            <a className={`${styles.navitem} underline`}>about</a>
            <a className={`${styles.navitem} underline`}>experience</a>
            <a className={`${styles.navitem} underline`}>portfolio</a>
            <a className={`${styles.navitem} underline`}>contact</a>
            <a className={`${styles.navitem} `}>resume</a>
        </div>
    );
}
