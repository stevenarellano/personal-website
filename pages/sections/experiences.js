import styles from "../../styles/sections/Experiences.module.scss";

export default function Experiences() {
    return (
        <div className="sectionContainer">
            <div className="sectionHeader">
                <h4 className="padRight">
                    <div>03.</div> Experiences
                </h4>

                <hr />
            </div>
            <div className={styles.cv}>
                <div className={styles.experiences}>
                    <div className={` underline`}>UChicago</div>
                    <div className={` underline`}>UChicago</div>
                    <div className={` underline`}>UChicago</div>
                    <div className={` underline`}>UChicago</div>
                    <div className={` underline`}>UChicago</div>
                </div>
                <div className={styles.exp}>
                    <div>
                        <span>Role</span> @ Place
                    </div>
                    <div>Jun 2019 - Jan 2020</div>
                    <li>helo</li>
                    <li>helo</li>
                    <li>helo</li>
                </div>
            </div>
        </div>
    );
}
