import './App.css';
import Layout from './components/layout/Layout';
import LineBreak from './components/common/LineBreak';
import ExperienceItem from './components/profile/ExperienceItem';
import ProjectItem from './components/profile/ProjectItem';
import EducationItem from './components/profile/EducationItem';
import TalksItem from './components/profile/TalksItem';
import AwardItem from './components/profile/AwardItem';

import EXPERIENCE_DATA from './data/experiences';
import PROJECT_DATA from './data/projects';
import TALK_DATA from './data/talks';
import EDUCATION_DATA from './data/education';
import AWARD_DATA from './data/awards';

const NAV_DATA = [
  { name: 'education', link: '#education' },
  { name: 'experience', link: '#experience' },
  { name: 'talks', link: '#talks' },
  { name: 'awards', link: '#awards' },
  { name: 'projects', link: '#projects' },
  { name: 'blog', link: '/blog' },
];

function App() {
  return (
    <Layout
      title="Hi, I'm Steve"
      intro="passionate about machine learning, high performance computing, and robotics. curious about neuroscience and innovative urban development."
      showProfileImage
    >
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

      {/* Talks Section */}
      <section id="talks">
        <h2 className='header-title'>Talks</h2>
        <ul>
          {TALK_DATA.map((item, index) => (
            <TalksItem key={index} item={item} last={index === TALK_DATA.length - 1} />
          ))}
        </ul>
      </section>
      <LineBreak color="#000" />

      {/* Awards Section */}
      <section id="awards">
        <h2 className='header-title'>Awards</h2>
        <ul>
          {AWARD_DATA.map((award, index) => (
            <AwardItem key={index} award={award} last={index === AWARD_DATA.length - 1} />
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
    </Layout>
  );
}

export default App;
