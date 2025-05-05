import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import { Box, Typography, Divider, List, Button } from '@mui/material';
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
  { name: 'EDUCATION', link: '#education' },
  { name: 'EXPERIENCE', link: '#experience' },
  { name: 'TALKS', link: '#talks' },
  { name: 'AWARDS', link: '#awards' },
  { name: 'PROJECTS', link: '#projects' },
];

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navElement = document.getElementById('nav');
      const navRect = navElement?.getBoundingClientRect();

      if (navRect && navRect.top > 0) {
        setActiveSection('');
        return;
      }

      const sections = NAV_DATA.map(item => item.link.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <Layout
      title="Hi, I'm Steve"
      intro="(formatting/styles got messed up once & haven't fix...)"
      // passionate about machine learning, high performance computing, and robotics. curious about neuroscience and innovative urban development.
      showProfileImage
    >
      {/* Navigation Section */}
      <Box
        component="section"
        id="nav"
        sx={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
          zIndex: 1000,
          py: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            overflowX: 'auto',
            justifyContent: 'space-around',
            alignItems: 'center',
            pt: activeSection ? 1 : 0,
          }}
        >
          {NAV_DATA.map((navItem) => (
            <Box
              key={navItem.name}
              sx={{
                textAlign: 'center',
                minWidth: 'fit-content',
                px: 1
              }}
            >
              <Button
                variant={activeSection === navItem.link.substring(1) ? "contained" : "text"}
                sx={{
                  py: 1,
                  px: 2,
                  backgroundColor: activeSection === navItem.link.substring(1) ? '#e0e0e0' : 'transparent',
                  color: activeSection === navItem.link.substring(1) ? '#000' : '#000',
                  '&:hover': {
                    backgroundColor: activeSection === navItem.link.substring(1) ? '#e0e0e0' : '#eee',
                  }
                }}
                onClick={() => {
                  document.getElementById(navItem.link.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {navItem.name}
              </Button>
            </Box>
          ))}
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 0
        }}>
          <Divider sx={{
            mt: activeSection ? 1 : 4,
            mb: activeSection ? 0 : 4,
            transition: 'margin 0.2s ease-in-out',
            padding: 0
          }} />
        </Box>
      </Box>

      {/* Education Section */}
      <Box
        component="section"
        id="education"
      >
        <Typography
          variant="h2"
          component="h2"
        >
          EDUCATION
        </Typography>
        <List sx={{ pl: 0 }}>
          {EDUCATION_DATA.map((education, index) => (
            <EducationItem key={index} education={education} last={index === EDUCATION_DATA.length - 1} />
          ))}
        </List>
      </Box>
      <Divider />

      {/* Experience Section */}
      <Box
        component="section"
        id="experience"
      >
        <Typography
          variant="h2"
          component="h2"
        >
          EXPERIENCE
        </Typography>
        <List sx={{ pl: 0 }}>
          {EXPERIENCE_DATA.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} last={index === EXPERIENCE_DATA.length - 1} />
          ))}
        </List>
      </Box>
      <Divider />

      {/* Talks Section */}
      <Box
        component="section"
        id="talks"
      >
        <Typography
          variant="h2"
          component="h2"
        >
          TALKS
        </Typography>
        <List sx={{ pl: 0 }}>
          {TALK_DATA.map((item, index) => (
            <TalksItem key={index} item={item} last={index === TALK_DATA.length - 1} />
          ))}
        </List>
      </Box>
      <Divider />

      {/* Awards Section */}
      <Box
        component="section"
        id="awards"
      >
        <Typography
          variant="h2"
          component="h2"

        >
          AWARDS
        </Typography>
        <List sx={{ pl: 0 }}>
          {AWARD_DATA.map((award, index) => (
            <AwardItem key={index} award={award} last={index === AWARD_DATA.length - 1} />
          ))}
        </List>
      </Box>
      <Divider />

      {/* Projects Section */}
      <Box
        component="section"
        id="projects"
      >
        <Typography
          variant="h2"
          component="h2"

        >
          PROJECTS
        </Typography>
        <List sx={{ pl: 0 }}>
          {PROJECT_DATA.map((project, index) => (
            <ProjectItem key={index} project={project} last={index === PROJECT_DATA.length - 1} />
          ))}
        </List>
      </Box>
    </Layout>

  );
}

export default App;
