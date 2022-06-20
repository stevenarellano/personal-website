const Experience = ({ backgroundColor, logo, company, location, start, end, role, responsibilities }: any) => {

    const responsibilitesList = responsibilities.map((ele: string, ind: number) => {
        return (
            <li key={ind} className="w-4/5 font-secondary text-xl">
                {ele}
            </li>)
    })

    const backdropStyles = {
        backgroundImage: `url(${logo})`,
        backgroundColor: `${backgroundColor}`,
    }

    return (
        <div
            style={{ ...backdropStyles }}
            className="experience-backdrop">
            <div style={{ width: "100%", height: "100%" }} className="experience-text" >
                <div style={{ width: "100%" }} className="flex justify-between">
                    <p className="text-header-adj pb-1 font-secondary font-bold">{company}</p>
                    <div className="company-demographic flex flex-col" >
                        <p style={{ width: "100%" }} className="text-3xl  text-right">{location}</p>
                        <p style={{ width: "100%" }} className="text-lg font-secondary text-right">{start} - {end}</p>
                    </div>
                </div>
                <p className="font-secondary text-3xl">{role}</p>
                <div className="mt-auto"></div>
                <p className="text-2xl pt-4 font-bold font-secondary">Responsibilities</p>
                <ul>
                    {responsibilitesList}
                </ul>
            </div >
        </div >
    )
}

export default Experience