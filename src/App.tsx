import './App.css';

import LineBreak from './LineBreak';
import ExperienceItem from './ExperienceItem';
import ProjectItem from './ProjectItem';
import EducationItem from './EducationItem';
import TalksAndPapersItem from './TalksAndPapersItem';

import EXPERIENCE_DATA from './data/experiences';
import PROJECT_DATA from './data/projects';
import TALK_AND_PAPER_DATA from './data/talksAndPapers';
import EDUCATION_DATA from './data/education';
import LINKS_DATA from './data/links';

const NAV_DATA = [
  { name: 'education', link: '#education' },
  { name: 'experience', link: '#experience' },
  { name: 'talks and papers', link: '#talks-papers' },
  { name: 'projects', link: '#projects' },
];

function App() {
  return (
    <div className="App">
      <section className="profile-header">
        <div className="header-content">
          <div className="text-content">
            <h2 className='header-title'>Hi, I'm Steve</h2>
            <p className="intro">
              <em>passionate about machine learning, high performance computing, and robotics.</em><br />
              <em>curious about neuroscience and innovative urban development.</em><br />
            </p>
            <br />
            <div className="social-links">
              {LINKS_DATA.map((linkInfo, index) => (
                <span key={index}>
                  <a
                    href={linkInfo.link}
                    target={linkInfo.target}
                    rel={linkInfo.rel}
                  >
                    {linkInfo.name}
                  </a>
                  &emsp;
                </span>
              ))}
            </div>
          </div>
          <div className="profile-image-container">
            <img src="assets/me.jpeg" alt="Steve" className="profile-pic" />
          </div>
        </div>
      </section>
      <LineBreak color="#000" />

      <main className="profile-content">
        {/* Navigation Section */}
        <section id="nav">
          <div style={{ justifyContent: 'space-between', display: 'flex' }} className="nav-links">
            {NAV_DATA.map((navItem, index) => (
              <span key={index}>
                <a href={navItem.link}>{navItem.name}</a>
                &emsp;
              </span>
            ))}
          </div>
        </section>
        <LineBreak color="#000" />

        {/* Education Section */}
        <section id="education">
          <h2 className='header-title'>Education</h2>
          <ul>
            {EDUCATION_DATA.map((education, index) => (
              <EducationItem key={index} education={education} last={index === EDUCATION_DATA.length - 1} />
            ))}
          </ul>
        </section>
        <LineBreak color="#000" />

        {/* Experience Section */}
        <section id="experience">
          <h2 className='header-title'>Experience</h2>
          <ul>
            {EXPERIENCE_DATA.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} last={index === EXPERIENCE_DATA.length - 1} />
            ))}
          </ul>
        </section>
        <LineBreak color="#000" />

        {/* Talks and Papers Section */}
        <section id="talks-papers">
          <h2 className='header-title'>Talks and Papers</h2>
          <ul>
            {TALK_AND_PAPER_DATA.map((item, index) => (
              <TalksAndPapersItem key={index} item={item} last={index === TALK_AND_PAPER_DATA.length - 1} />
            ))}
          </ul>
        </section>
        <LineBreak color="#000" />

        {/* Projects Section */}
        <section id="projects">
          <h2 className='header-title'>Projects</h2>
          <ul>
            {PROJECT_DATA.map((project, index) => (
              <ProjectItem key={index} project={project} last={index === PROJECT_DATA.length - 1} />
            ))}
          </ul>
        </section>
      </main>

      <br />
    </div>
  );
}

export default App;
