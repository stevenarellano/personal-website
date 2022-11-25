import { useState } from 'react';
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

    return (
        <>
            <div onClick={() => toggleActive()} className="m-experience">
                <span className="m-e-company">{company}</span>
                <img className="m-e-thumbnail" src={logo} />
            </div>;
            <div
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
                    {responsibilities.map((content, i) => <MobileResponsibility i={i} content={content} />)}
                </div>
            </div>
        </>
    );


};

const MobileExperiences = () => {
    const [active, setActive] = useState(false);

    function toggleIndex() { setActive(!active); }


    return (
        <div className="mobile-page spacer-top">
            <div className="mobile-header">
                <span className="m-section-title">EXPERIENCES</span>
            </div>
            {experienceData.map((experience, index) => <MobileExperience info={experience} key={index} />)}
        </div>
    );
};

export default MobileExperiences;