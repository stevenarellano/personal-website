const Landing = () => {

    return (
        <div className='landing-container page-container'>
            <div id='black-offset' />
            <div id='landing-header'>
                <h1>STEVEN ARELLANO.</h1>
                <h3>fullstack developer</h3>
            </div>
            <div id='social-boxes'>
                <a
                    href='https://www.linkedin.com/in/stevenjarellano/'
                    target='_blank'
                    rel="noreferrer"
                    className='social-box social-content'>
                    linkedin
                </a>
                <a className='social-box social-hidden' />
                <a className='social-box social-hidden' />
                <a className='social-box social-filled' />
                <a
                    href='https://github.com/stevenarellano'
                    target='_blank'
                    rel="noreferrer"
                    className='social-box social-content'>
                    github
                </a>
                <a className='social-box social-hidden' />
                <a
                    href='https://medium.com/@stevenjarellano'
                    target='_blank'
                    rel="noreferrer"
                    className='social-box social-content'>
                    medium
                </a>
                <a
                    href=''
                    target='_blank'
                    rel="noreferrer"
                    className='social-box social-content'>
                    email
                </a>
                <a className='social-box social-filled' />
            </div>
        </div>
    );
};

export default Landing;