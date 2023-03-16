import { ExperienceInfo } from '../../context';
import styles from '/styles/modules/experience.module.scss';
import { useToggleModal } from './useToggleModal';
import { ExperienceModal } from './ExperienceModal';


type ExperienceProps = {
    info: ExperienceInfo;
    bR?: boolean;
    bB?: boolean;
};

const Card1 = ({ info, bR = false, bB = false }: ExperienceProps) => {
    const { company, logo, current } = info;
    const { active, toggleModal } = useToggleModal();
    const experienceClasses = [styles.card1, bR && styles.bR, bB && styles.bB].join(' ');


    return (
        <div onClick={toggleModal} className={experienceClasses}>
            <img alt='logo' src={logo} />
            <div className={styles.info}>
                <div className={styles.title}>{company}</div>
                {current && <div className={styles.current}>[current]</div>}
            </div>
            <ExperienceModal info={info} active={active} toggleModal={toggleModal} />
        </div>
    );
};

const Card2 = ({ info, bR = false, bB = false }: ExperienceProps) => {
    const { company, logo, current } = info;
    const { active, toggleModal } = useToggleModal();
    const experienceClasses = [styles.card2, bR && styles.bR, bB && styles.bB].join(' ');

    return (
        <div onClick={toggleModal} className={experienceClasses}>
            {current && <div className={styles.current}>[current]</div>}
            <div className={styles.title}>{company}</div>
            <img alt='logo' src={logo} />
            <ExperienceModal info={info} active={active} toggleModal={toggleModal} />
        </div>
    );
};



const Experience: React.FC<ExperienceProps> = ({ info, bR = false, bB = false }) => {
    return (
        <Card1 info={info} bR={bR} bB={bB} />
    );
};

export default Experience;;