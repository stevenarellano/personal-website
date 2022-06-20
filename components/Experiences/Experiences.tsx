import { experienceData } from "../../context";
import SectionHeader from "../Ui/SectionHeader";
import Experience from "./Experience";

const Experiences = () => {
    return (
        <div className="section-container">
            <SectionHeader title='EXPERIENCE' />
            <div className="experiences">
                {experienceData.map(({ backgroundColor, logo, responsibilities, end, start, location, role, company }, ind) => {
                    return (
                        <Experience
                            key={ind}
                            backgroundColor={backgroundColor}
                            logo={logo}
                            responsibilities={responsibilities}
                            start={start}
                            end={end}
                            location={location}
                            role={role}
                            company={company} />
                    )
                })}
            </div>
        </div>)
}

export default Experiences