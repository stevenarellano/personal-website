import { useState } from "react";

const Project = ({ templateArea, tools = [""], title = "", blurp = "", description = "", github = "", website = "", backdrop = "" }: any) => {
    const [hovering, setHovering] = useState(false)

    const getToolsString = (tools: string[] = [""]) => {
        if (tools.length === 0) {
            return '';
        }
        const [firstTool, ...rest] = tools;

        const toolsSeparated = rest.reduce((previousString, currentTool) => {
            return previousString + " / " + currentTool
        }, firstTool);

        return (toolsSeparated === '') ? '' : `[${toolsSeparated}]`;
    }

    const backgroundStyles = hovering ?
        `linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.85),
        rgba(255, 255, 255, 0.85)
    ), url(${backdrop})` :
        `linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
    ), url(${backdrop})`

    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
                gridArea: templateArea,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: 'top center',
                background: backgroundStyles
            }}
            className='flex flex-col justify-end p-8 project-backdrop'>
            <div className="project-text relative flex flex-col w-3/5">
                <p className="text-xl">{getToolsString(tools)}</p>
                <p className="text-6xl font-bold pb-2">{title}</p>
                <p className="text-3xl ">{blurp}</p>
                <p className="text-lg pb-2">{description}</p>
                <div className="flex gap-4">
                    {github && <div style={{ border: '2px solid black', cursor: "pointer", width: "8rem" }}
                        className="project-button text-2xl flex justify-center  py-2 ">
                        <a href={github} target="_blank" rel="noreferrer">Github</a></div>}
                    {website && <div style={{ border: '2px solid black', cursor: "pointer", width: "8rem" }}
                        className="project-button text-2xl flex justify-center  py-2 ">
                        <a href={website} target="_blank" rel="noreferrer">Visit</a></div>}

                </div>
            </div>
        </div>
    )
}

export default Project;