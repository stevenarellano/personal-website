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

export type ExperienceModalProps = {
    info: ExperienceInfo;
    active: boolean;
    toggleModal: () => void;
};

const ExperienceModal = ({ info, active, toggleModal }: ExperienceModalProps) => {
    const { company, subtitle, logo, current, website, role, when, location, responsibilities } = info;

    return (
        <>
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

export { ExperienceModal };