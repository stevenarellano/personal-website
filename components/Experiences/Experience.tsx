import { useEffect, useState } from 'react';
import { ExperienceInfo } from '../../context';
import styles from '/styles/modules/experience.module.scss';

export type ResponsibilityProps = {
    i: number;
    content: string;
};

const Responsibility = ({ i, content }: ResponsibilityProps) => {
    return (
        <div>
            <div className={styles.responsibilityTitle}>{i + 1}</div>
            <div className={styles.responsibilityContent}>{content}</div>
        </div>
    );
};

const Experience = ({ info }: { info: ExperienceInfo; }) => {
    const { company, subtitle, logo, current, website, role, when, location, responsibilities } = info;

    const [active, setActive] = useState(false);
    function toggleModal() { setActive(!active); }
    useEffect(() => {
        if (active) { document.body.style.overflow = "hidden"; }
        if (!active) { document.body.style.overflow = "unset"; }
    }, [active]);


    return (
        <>
            <div onClick={toggleModal} className={styles.experience}>
                <img alt='logo' src={logo} />
                <div className={styles.info}>
                    <div className={styles.title}>{company}</div>
                    {current && <div className={styles.current}>[current]</div>}
                </div>
            </div>
            <div
                onClick={toggleModal}
                className={`overlay`}
                style={{ display: active ? "flex" : "none" }}
            />
            <div
                className={styles.experienceModal}
                style={{ display: active ? "flex" : "none" }}
            >
                <div className={styles.modalHeader}>
                    <div>
                        <a
                            href={website}
                            target="_blank"
                            rel="noreferrer"
                            style={{ visibility: website ? "visible" : "hidden" }}
                            className={styles.modalWebsite}
                        >
                            [website]
                        </a>
                        <button onClick={toggleModal}>X</button>
                    </div>
                    <div className={styles.modalCompanyInfo}>
                        <div className={`${styles.MCILeft} flex flex-col`}>
                            <span>{role}</span>
                            <div>
                                {company}
                                {subtitle && <span className='ml-2 text-xs'>({subtitle})</span>}
                            </div>
                        </div>
                        <div className={`${styles.MCIRight} flex flex-col items-end`}>
                            <span className="lowercase">{when}</span>
                            <span className="uppercase">{location}</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.modalResp} flex flex-col flex-grow mt-4`}>
                    <div className='flex justify-center items-center'>RESPONSIBILITIES</div>
                    <div className={`${styles.responsibilityRow} flex flex-1`}>
                        {responsibilities.map((content, i) => <Responsibility key={i} content={content} i={i} />)}
                    </div>
                </div>

            </div>

        </>

    );
};



export default Experience;;