import { ExperienceInfo } from '../../context';
import styles from '/styles/modules/experience.module.scss';
import { useToggleModal } from './useToggleModal';
import { ExperienceModal } from './ExperienceModal';


type ExperienceProps = {
    info: ExperienceInfo;
    cardId?: number;
    bR?: boolean;
    bB?: boolean;
};

const Card0 = ({ info, bR = false, bB = false }: ExperienceProps) => {
    const { company, logo, current } = info;
    const { active, toggleModal } = useToggleModal();
    const experienceClasses = [styles.card0, bR && styles.bR, bB && styles.bB].join(' ');


    return (
        <div onClick={toggleModal} className={experienceClasses}>

            <div className={styles.info}>
                no more
            </div>

        </div>
    );
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
            </div>
            <ExperienceModal info={info} active={active} toggleModal={toggleModal} />
        </div>
    );
};



const Experience: React.FC<ExperienceProps> = ({ info, bR = false, bB = false, cardId }) => {
    const cards = [
        <Card0 key={0} info={info} bR={bR} bB={bB} />,
        <Card1 key={1} info={info} bR={bR} bB={bB} />,
    ];

    return (
        cards[cardId || 0]
    );
};

export default Experience;