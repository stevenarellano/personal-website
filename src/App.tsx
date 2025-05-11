import React from 'react';
import Layout from './components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import EDUCATION_DATA from './data/education';
import EXPERIENCE_DATA from './data/experiences';
import PROJECT_DATA from './data/projects';
import TALK_DATA from './data/talks';
import AWARD_DATA from './data/awards';

import { EducationInfo, ExperienceInfo, ProjectInfo, TalkInfo, AwardInfo } from './types';

const logoStyle: React.CSSProperties = {
  width: '32px',
  height: '32px',
  objectFit: 'contain',
  borderRadius: '4px',
  flexShrink: 0,
};

function App() {
  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
        <Tabs defaultValue="experience">
          <TabsList>
            <TabsTrigger value="experience">experience</TabsTrigger>
            <TabsTrigger value="education">education</TabsTrigger>
            <TabsTrigger value="talks">talks</TabsTrigger>
            <TabsTrigger value="awards">awards</TabsTrigger>
            <TabsTrigger value="projects">projects</TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <Typography>experience</Typography>
            <Box display="flex" flexDirection="column" >
              {EXPERIENCE_DATA.map((exp: ExperienceInfo, index) => (
                <Card key={index}>
                  <CardContent sx={{ p: 0.5 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      {exp.logo && (
                        <Box component="img"
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          sx={logoStyle}
                        />
                      )}
                      <Box flexGrow={1}>
                        <Typography sx={{ lineHeight: 1.1, }}>
                          {exp.role} - {exp.company}
                        </Typography>
                        <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1 }}>
                          {exp.location} • {exp.when}
                          {exp.website && (
                            <>
                              {' '}•{' '}
                              <Link href={exp.website} target="_blank" rel="noopener noreferrer" underline="hover">
                                website
                              </Link>
                            </>
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </TabsContent>

          <TabsContent value="education">
            <Typography sx={{ mb: 0.5 }}>education</Typography>
            <Typography variant="caption" sx={{ mb: 0.5, display: 'block', color: 'text.secondary' }}>
              currently studying at the university of chicago</Typography>
            {EDUCATION_DATA.map((edu: EducationInfo, index) => (
              <Card key={index} sx={{ mb: 0.5 }}>
                <CardHeader sx={{ p: 0.5 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={1}>
                    <Box flexGrow={1}>
                      <Typography sx={{ lineHeight: 1.1, mb: 0.1 }}>
                        {edu.institution}
                      </Typography>
                      <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1, mb: 0.1 }}>
                        {edu.degree}
                      </Typography>
                      <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1 }}>
                        {edu.location} — {edu.when}
                        {edu.GPA && ` — gpa: ${edu.GPA}`}
                      </Typography>
                    </Box>
                    {edu.logo && (
                      <Box component="img"
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        sx={logoStyle}
                      />
                    )}
                  </Box>
                </CardHeader>
                <CardContent sx={{ p: 0.5, pt: 0 }}>
                  <Typography sx={{ lineHeight: 1.1, mb: 0.25 }}>relevant courses:</Typography>
                  <Box component="ul" sx={{ pl: 3, m: 0, listStyle: 'disc' }}>
                    {edu.relevantCourses.map((course, i) => (
                      <Box component="li" key={i}>
                        <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1 }}>
                          {course}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="talks">
            <Typography sx={{ mb: 0.5 }}>talks</Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {TALK_DATA.map((talk: TalkInfo, index) => (
                <Card key={index}>
                  <CardHeader sx={{ p: 0.5 }}>
                    <Typography sx={{ lineHeight: 1.1, mb: 0.1 }}>
                      {talk.title}
                    </Typography>
                    <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1 }}>
                      {talk.venue} — {talk.date}
                    </Typography>
                  </CardHeader>
                  <CardContent sx={{ p: 0.5, pt: 0 }}>
                    <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1 }}>
                      {talk.description}
                    </Typography>
                  </CardContent>
                  {talk.link && (
                    <CardFooter sx={{ p: 0.5, pt: 0.25 }}>
                      <Link href={talk.link} target="_blank" rel="noopener noreferrer" underline="hover">
                        <Button variant="text" size="small" sx={{ px: 0.75, py: 0.1 }}>
                          view talk
                        </Button>
                      </Link>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </Box>
          </TabsContent>

          <TabsContent value="awards">
            <Typography sx={{ mb: 0.5 }}>awards & recognitions</Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {AWARD_DATA.map((award: AwardInfo, index) => (
                <Card key={index}>
                  <CardHeader sx={{ p: 0.5 }}>
                    <Typography sx={{ lineHeight: 1.1, mb: 0.1, display: 'flex', alignItems: 'center' }}>
                      {award.item}
                      {award.link && (
                        <Button variant="text" size="small" sx={{ px: 0.5, py: 0, ml: 0.5, minWidth: 'auto' }}>
                          <Link href={award.link} target="_blank" rel="noopener noreferrer" sx={{ fontSize: '0.7rem' }}>
                            more info
                          </Link>
                        </Button>
                      )}
                    </Typography>
                    <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1 }}>
                      {award.issuer} — {award.year}
                      {award.extra && ` (${award.extra})`}
                    </Typography>
                  </CardHeader>
                  <CardContent sx={{ p: 0.5, pt: 0 }}>
                    <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1 }}>
                      {award.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </TabsContent>

          <TabsContent value="projects">
            <Typography sx={{ mb: 0.5 }}>projects</Typography>
            {PROJECT_DATA.length === 0 && <Typography color="error">No project data available</Typography>}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 1.5 }}>
              {PROJECT_DATA && PROJECT_DATA.map((proj: ProjectInfo, index) => {
                return (
                  <Box key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardHeader sx={{ p: 0.75 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={1}>
                          <Box flexGrow={1}>
                            <Typography component="h3" sx={{ lineHeight: 1.2, mb: 0.2, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
                              {proj.title || 'No Title'}
                              {(proj.github || proj.website) && ' ('}
                              {proj.github && (
                                <Link href={proj.github} target="_blank" rel="noopener noreferrer" underline="hover">
                                  github
                                </Link>
                              )}
                              {proj.github && proj.website && ', '}
                              {proj.website && (
                                <Link href={proj.website} target="_blank" rel="noopener noreferrer" underline="hover">
                                  website
                                </Link>
                              )}
                              {(proj.github || proj.website) && ')'}
                            </Typography>
                            <Typography variant="caption" sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1, display: 'block' }}>
                              {proj.blurb || 'No Blurb'}
                            </Typography>
                          </Box>
                          {proj.logo && (
                            <Box component="img"
                              src={proj.logo}
                              alt={`${proj.title || 'Project'} logo`}
                              sx={{ ...logoStyle, width: '40px', height: '40px' }}
                            />
                          )}
                        </Box>
                      </CardHeader>
                      <CardContent sx={{ p: 0.75, pt: 0.5, flexGrow: 1 }}>
                        <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.2 }}>
                          {proj.description || 'No Description'}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                );
              })}
            </Box>
          </TabsContent>
        </Tabs>
      </Box>
    </Layout>
  );
}

export default App;
