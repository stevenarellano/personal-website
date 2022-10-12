export type ExperienceProps = {
    name: string,
    link: string,
    current: boolean;
};

const Experience = ({ name, link, current = false }: ExperienceProps) => {

    return (
        <>
            <div className='experience'>
                <img alt='dao' src={link} />
                <div className='company-title'>{name}</div>
                {current && <div className='company-current'>[current]</div>}
            </div>
            <div className='overlay' />
            <div className='experience-modal'>
                <div className='experience-modal-header'>
                    <div>
                        <a>[website]</a>
                        <button>X</button>
                    </div>
                    <div id='modal-company-info'>
                        <div className='flex flex-col' id='MCI-left'>
                            <span>software engineer</span>
                            <div>
                                SEI LABS
                                <span className='ml-2 text-xs'>(series a crypto startup)</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-end' id='MCI-right'>
                            <span>april 2022 - july 2022</span>
                            <span>SAN FRANCISCO, CA</span>
                        </div>
                    </div>
                </div>
                <div id='experience-modal-resp' className='flex flex-col'>
                    <div className='flex justify-center items-center'>RESPONSIBILITIES</div>
                    
                </div>

            </div>

        </>

    );
};

export default Experience;;