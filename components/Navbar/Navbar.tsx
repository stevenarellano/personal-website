
import styles from '/styles/modules/navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <a href="#" className={styles.item}>SA</a>
            <a href="#experiences-page" className={styles.item}>experience</a>
            <a href="#projects-page" className={styles.item}>projects</a>
            <a className={styles.item}></a>
            {/* <a className={styles.item}>buy me coffee</a> */}
        </div>
    );
};

export default Navbar;
