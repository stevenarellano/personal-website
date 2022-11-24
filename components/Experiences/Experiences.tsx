import { experienceData } from '../../context';
import Experience from './Experience';

const Experiences = () => {

    return (
        <div className='experience-container page-container'>
            <div className='experience-box' >
                <div>EXPERIENCES</div>
                <div>
                    {experienceData.map((info) => <Experience info={info} />)}
                </div>


            </div>
        </div>
    );
};

export default Experiences;