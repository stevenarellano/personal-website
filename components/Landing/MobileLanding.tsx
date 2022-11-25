const MobileLanding = () => {
    return (
        <div className="mobile-page">
            <div className="mobile-header py-4">
                <span id="m-landing-subtitle">fullstack developer</span>
                <span id="m-landing-title">Steven Arellano</span>
            </div>

            <div className="m-link-list">
                <div className="m-link-row">
                    <a className="m-link">linkedin</a>
                    <a className="m-link m-filled-link">github</a>
                </div>
                <div className="m-link-row">
                    <a className="text-4xl m-link m-filled-link"></a>
                    <a className="m-link">medium</a>
                </div>
                <div className="m-link-row">
                    <a className="m-link "></a>
                    <a className="m-link m-filled-link"></a>
                </div>
                <div className="m-link-row">
                    <a className="m-link m-filled-link">email</a>
                    <a className="m-link text-4xl">:)</a>
                </div>
            </div>
        </div>
    );
};

export default MobileLanding;