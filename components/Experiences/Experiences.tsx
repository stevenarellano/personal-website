import styles from '/styles/modules/experience.module.scss';
import { EXPERIENCE_DATA } from '../../context';
import Experience from './Experience';


const ExperienceScreen1 = () => {
    return (
        <div className={styles.experienceScreen}>
            <div className={styles.experienceRow2}>
                <Experience info={EXPERIENCE_DATA[0]} cardId={5} bR bB />
                <Experience info={EXPERIENCE_DATA[1]} cardId={5} bB />
            </div>
            <div className={styles.experienceRow3}>
                <Experience info={EXPERIENCE_DATA[2]} cardId={5} bR />
                <Experience info={EXPERIENCE_DATA[3]} cardId={5} bR />
                <Experience info={EXPERIENCE_DATA[4]} cardId={5} />
            </div>
        </div>
    );
};

const Experiences = () => {
    return (
        <div className={`${styles.experienceContainer} page-container`}>
            <div className={styles.experienceBox} >
                <div>EXPERIENCES</div>
                <ExperienceScreen1 />
            </div>
        </div>
    );
};

export default Experiences;