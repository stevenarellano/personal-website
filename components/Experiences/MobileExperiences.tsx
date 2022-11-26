import { useEffect, useState } from 'react';
import { experienceData, ExperienceInfo } from '../../context';
import { ResponsibilityProps } from './Experience';

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
            <div onClick={() => toggleActive()} className="m-experience">
                <span className="m-e-company">{company}</span>
                <img alt={company} className="m-e-thumbnail" src={logo} />
            </div>
            <div
                id="overlay"
                onClick={() => toggleActive()}
                style={{ display: active ? "flex" : "none" }}
                className="overlay" />
            <div
                className="m-experience-tab"
                style={{ display: active ? "flex" : "none" }}
            >
                <div className="m-experience-topbar">
                    <span>{role}</span>
                    <span onClick={() => toggleActive()}>X</span>
                </div>
                <div className="m-experience-header">
                    {company}
                </div>
                <div className="m-experience-subtitle">
                    <span>{location}</span>
                    <span>{when}</span>
                </div>
                <div className="m-experience-resp">
                    responsibilities
                </div>
                <div className="m-experience-list">
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
                id="m-e-load-button"
            >
                see more
            </button>
        </div>
    );
};

export default MobileExperiences;