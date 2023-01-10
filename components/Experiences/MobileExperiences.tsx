import { useEffect, useState } from 'react';
import { experienceData, ExperienceInfo } from '../../context';
import { ResponsibilityProps } from './Experience';

import styles from '/styles/modules/experience.module.scss';

const MobileResponsibility = ({ i, content }: ResponsibilityProps) => {
    return (
        <div>
            <span>{i + 1}</span>
            <span>{content}</span>
        </div>
    );
};

const MobileExperience = ({ info }: { info: ExperienceInfo; }) => {
    const { company, subtitle, logo, current, website, role, when, location, responsibilities } = info;
    const [active, setActive] = useState(false);

    function toggleActive() {
        setActive(!active);
    }

    useEffect(() => {
        if (active) { document.body.style.overflow = "hidden"; }
        if (!active) { document.body.style.overflow = "unset"; }
    }, [active]);

    return (
        <>
            <div onClick={() => toggleActive()} className={styles.mExperience}>
                <span className={styles.mCompany}>{company}</span>
                <img alt={company} className={styles.mThumbnail} src={logo} />
            </div>
            <div
                id="overlay"
                onClick={() => toggleActive()}
                style={{ display: active ? "flex" : "none" }}
                className="overlay" />
            <div
                className={styles.mTab}
                style={{ display: active ? "flex" : "none" }}
            >
                <div className={styles.mTopBar}>
                    <span>{role}</span>
                    <span onClick={() => toggleActive()}>X</span>
                </div>
                <div className={styles.mHeader}>
                    {company}
                </div>
                <div className={styles.mSubtitle}>
                    <span>{location}</span>
                    <span>{when}</span>
                </div>
                <div className={styles.mResp}>
                    responsibilities
                </div>
                <div className={styles.mList}>
                    {responsibilities.map((content, i) => <MobileResponsibility key={i} i={i} content={content} />)}
                </div>
            </div>
        </>
    );


};

const MobileExperiences = () => {
    const [active, setActive] = useState(false);
    const [endingIndex, setEndingIndex] = useState(3);


    function toggleIndex() { setActive(!active); }
    function loadMore() { setEndingIndex(Math.min(endingIndex + 3, experienceData.length)); }

    return (
        <div className="mobile-page spacer-top">
            <div className="mobile-header">
                <span className="m-section-title">EXPERIENCES</span>
            </div>
            {experienceData.slice(0, endingIndex).map((experience, index) => <MobileExperience info={experience} key={index} />)}
            <button
                onClick={() => loadMore()}
                style={{ display: endingIndex >= experienceData.length ? "none" : "flex" }}
                className={styles.mLoadButton}
            >
                see more
            </button>
        </div>
    );
};

export default MobileExperiences;