import styles from '/styles/modules/experience.module.scss';

import { experienceData } from '../../context';
import Experience from './Experience';

const Experiences = () => {
    return (
        <div className={`${styles.experienceContainer} page-container`}>
            <div className={styles.experienceBox} >
                <div>EXPERIENCES</div>
                <div>
                    {experienceData.map((info, i) => <Experience key={i} info={info} />)}
                </div>


            </div>
        </div>
    );
};

export default Experiences;