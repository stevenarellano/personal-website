import { useState } from 'react';
import { ExperienceInfo } from '../../context';

export type ResponsibilityProps = {
    i: number;
    content: string;
};

const Responsibility = ({ i, content }: ResponsibilityProps) => {
    return (
        <div>
            <div className="responsibility-title">{i + 1}</div>
            <div className="responsibility-content">{content}</div>
        </div>
    );
};

const Experience = ({ info }: { info: ExperienceInfo; }) => {
    const { company, subtitle, logo, current, website, role, when, location, responsibilities } = info;

    const [active, setActive] = useState(false);
    function toggleModal() { setActive(!active); }

    return (
        <>
            <div onClick={toggleModal} className='experience'>
                <img alt='logo' src={logo} />
                <div className='e-info'>
                    <div className='e-title'>{company}</div>
                    {current && <div className='e-current'>[current]</div>}
                </div>
            </div>
            <div
                onClick={toggleModal}
                className={`overlay`}
                style={{ display: active ? "flex" : "none" }}
            />
            <div
                className={`experience-modal`}
                style={{ display: active ? "flex" : "none" }}
            >
                <div className='experience-modal-header'>
                    <div>
                        <a
                            href={website}
                            target="_blank"
                            style={{ visibility: website ? "visible" : "hidden" }}
                            className="experience-modal-website"
                        >
                            [website]
                        </a>
                        <button onClick={toggleModal}>X</button>
                    </div>
                    <div id='modal-company-info'>
                        <div className='flex flex-col' id='MCI-left'>
                            <span>{role}</span>
                            <div>
                                {company}
                                {subtitle && <span className='ml-2 text-xs'>({subtitle})</span>}
                            </div>
                        </div>
                        <div className='flex flex-col items-end' id='MCI-right'>
                            <span className="lowercase">{when}</span>
                            <span className="uppercase">{location}</span>
                        </div>
                    </div>
                </div>
                <div id='experience-modal-resp' className='flex flex-col flex-grow mt-4'>
                    <div className='flex justify-center items-center'>RESPONSIBILITIES</div>
                    <div className='responsibility-row flex flex-1'>
                        {responsibilities.map((content, i) => <Responsibility content={content} i={i} />)}
                    </div>
                </div>

            </div>

        </>

    );
};



export default Experience;;