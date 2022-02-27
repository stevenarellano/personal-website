import styles from "../../styles/misc/Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <a href="# " className={`${styles.navitem} ${styles.logo}`}>
                <div className={styles.logoCont}>
                    <div className={styles.logoText}>SA</div>
                </div>
            </a>

            <a href="#about" className={`${styles.navitem} underline`}>about</a>
            {/* <a href="#experience" className={`${styles.navitem} underline`}>experience</a> */}
            <a href="#projects" className={`${styles.navitem} underline`}>projects</a>
            <a href="#contact" className={`${styles.navitem} underline`}>contact</a>
            <a
                href="/StevenArellanoCV.pdf"
                download="StevenArellanoCV"
                className={`${styles.navitem} `}
            >
                resume
            </a>
        </div>
    );
}
