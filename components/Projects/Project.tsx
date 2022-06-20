const Project = ({ templateArea, tools = [""], title = "", blurp = "", description = "", github = "", website = "", backgroundColor, logo }: any) => {

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

    const backdropStyles = {
        backgroundImage: `url(${logo})`,
        backgroundColor: `${backgroundColor}`,
    }

    return (
        <div
            style={{
                gridArea: templateArea,
                ...backdropStyles
            }}
            className='flex flex-col justify-end project-backdrop'>
            <div className="project-text relative justify-end flex p-8 flex-col">
                <p className="text-xl">{getToolsString(tools)}</p>
                <p className="text-header-adj font-secondary font-bold pb-2">{title}</p>
                <p className="text-3xl ">{blurp}</p>
                <p className="w-3/5 text-lg pb-2">{description}</p>
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