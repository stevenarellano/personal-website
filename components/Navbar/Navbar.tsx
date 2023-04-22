
import { useRecoilState } from 'recoil';
import styles from '/styles/modules/navbar.module.scss';
import { pageState } from '../../context';

const Navbar = () => {
    const [page, setPage] = useRecoilState(pageState);

    return (
        <div className={styles.navbarContainer}>
            <a
                onClick={() => setPage('LANDING')}
                style={{ fontWeight: page === "LANDING" ? 'bold' : undefined }}
                className={styles.item}>
                SA
            </a>
            <a
                onClick={() => setPage('EXPERIENCES')}
                style={{ fontWeight: page === "EXPERIENCES" ? 'bold' : undefined }}
                className={styles.item}>
                EXPERIENCES
            </a>
            <a
                style={{ fontWeight: page === "PROJECTS" ? 'bold' : undefined }}
                onClick={() => setPage('PROJECTS')}
                className={styles.item}>
                PROJECTS
            </a>
        </div>
    );
};

export default Navbar;
