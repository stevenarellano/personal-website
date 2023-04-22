import styles from '/styles/modules/experience.module.scss';
import { EXPERIENCE_DATA } from '../../context';
import Experience from './Experience';

const Experiences = () => {
    return (
        <div className={`${styles.experienceContainer} page-container`}>
            <div className={styles.header}>swe</div>
            <div className={styles.experiences}>
                {EXPERIENCE_DATA.map((info, i) => {
                    if (i % 2 === 0) return <Experience key={i} info={info} cardId={1} bR bB />;
                    return <Experience key={i} info={info} cardId={1} bB />;
                })}
            </div>
        </div>
    );
};

export default Experiences;