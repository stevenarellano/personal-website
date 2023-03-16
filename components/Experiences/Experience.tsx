import { ExperienceInfo } from '../../context';
import styles from '/styles/modules/experience.module.scss';
import { useToggleModal } from './useToggleModal';
import { ExperienceModal } from './ExperienceModal';


type ExperienceProps = {
    info: ExperienceInfo;
    bR?: boolean;
    bB?: boolean;
};

const Experience: React.FC<ExperienceProps> = ({ info, bR = false, bB = false }) => {
    const { company, logo, current } = info;
    const { active, toggleModal } = useToggleModal();

    const experienceClasses = [styles.experience, bR && styles.bR, bB && styles.bB].join(' ');

    return (
        <div onClick={toggleModal} className={experienceClasses}>
            <ExperienceModal info={info} active={active} toggleModal={toggleModal} />
            <img alt='logo' src={logo} />
            <div className={styles.info}>
                <div className={styles.title}>{company}</div>
                {current && <div className={styles.current}>[current]</div>}
            </div>
        </div>

    );
};

export default Experience;;