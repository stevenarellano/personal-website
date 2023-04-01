
import styles from '/styles/modules/navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <a href="#" className={styles.item}>SA</a>
            <a href="#experiences-page" className={styles.item}>experiences</a>
            <a href="#projects-page" className={styles.item}>projects</a>
            <a className={styles.item}></a>
        </div>
    );
};

export default Navbar;
