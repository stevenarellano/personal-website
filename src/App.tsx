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



function App() {
  return (
    <Layout>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Tabs defaultValue="experience" className="h-full flex flex-col">
          <TabsList className="mb-2">
            <TabsTrigger value="experience">experience</TabsTrigger>
            <TabsTrigger value="education">education</TabsTrigger>
            <TabsTrigger value="talks">talks</TabsTrigger>
            <TabsTrigger value="awards">awards</TabsTrigger>
            <TabsTrigger value="projects">projects</TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-auto">
            <TabsContent value="experience" className="h-full overflow-auto">
              <Box display="flex" flexDirection="column" gap={0}>
                {EXPERIENCE_DATA.map((exp: ExperienceInfo, index) => (
                  <Card key={index} sx={{ backgroundColor: 'transparent', boxShadow: 'none', pb: 1 }}>
                    <CardHeader
                      title={`${exp.role}, ${exp.company}`}
                      subheader={
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
                      }
                      sx={{ p: 0 }}
                    />
                  </Card>
                ))}
              </Box>
            </TabsContent>

            <TabsContent value="education" className="h-full overflow-auto pb-4">
              {EDUCATION_DATA && EDUCATION_DATA.map((edu: EducationInfo, index) => (
                <Card key={index} sx={{ backgroundColor: 'transparent', }}>
                  <CardHeader
                    title={edu.institution}
                    subheader={
                      <>
                        <Typography sx={{ mt: 0, color: 'text.secondary', lineHeight: 1.1, mb: 0.1 }}>
                          {edu.degree} • {edu.when}
                        </Typography>

                      </>
                    }
                    sx={{ p: 0.5 }}
                  />
                  <CardContent sx={{ p: 0.5, pt: 0, backgroundColor: 'transparent' }}>
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

            <TabsContent value="talks" className="h-full overflow-auto pb-4">
              {TALK_DATA.map((talk: TalkInfo, index) => (
                <Card key={index} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                  <CardContent sx={{ p: 0.5, pt: 0, backgroundColor: 'transparent' }}>
                    <Typography sx={{ lineHeight: 1.2, mb: 0.2 }}>
                      {talk.title}
                      {' '}
                      (
                      {talk.venue}
                      {' '}
                      {talk.date}
                      )
                    </Typography>
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
            </TabsContent>

            <TabsContent value="awards" className="h-full overflow-auto">
              <Box display="flex" flexDirection="column">
                {AWARD_DATA.map((award: AwardInfo, index) => (
                  <Card key={index} sx={{ backgroundColor: 'transparent', boxShadow: 'none', p: 0.5 }}>
                    <Box display="flex" flexDirection="column" sx={{ p: 0, m: 0 }}>
                      <Box display="flex" alignItems="center" flexWrap="wrap">
                        <Typography
                          sx={{
                            lineHeight: 1.1,
                            fontSize: '1rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                          }}
                          component="span"
                        >
                          {award.item}
                          {award.link && (
                            <Typography
                              component="span"
                              sx={{
                                fontSize: '0.7rem',
                                ml: 0.5,
                                color: 'inherit',
                                display: 'inline',
                                fontWeight: 400,
                              }}
                            >
                              (
                              <Link
                                href={award.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ fontSize: '0.7rem', color: 'inherit', textDecoration: 'underline' }}
                              >
                                more info
                              </Link>
                              )
                            </Typography>
                          )}
                        </Typography>
                        <Typography
                          sx={{
                            ml: 1,
                            color: 'text.secondary',
                            fontSize: '0.95rem',
                            lineHeight: 1.1,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                          component="span"
                        >
                          {award.issuer} — {award.year}
                          {award.extra && ` (${award.extra})`}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          mt: 0.1,
                          color: 'text.secondary',
                          fontSize: '0.95rem',
                          lineHeight: 1.1,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '100%',
                        }}
                        component="span"
                      >
                        {award.description}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </TabsContent>

            <TabsContent value="projects" className="h-full overflow-auto pb-4">
              {PROJECT_DATA.length === 0 && (
                <Typography color="error" sx={{ textTransform: 'lowercase' }}>
                  no project data available
                </Typography>
              )}

              {PROJECT_DATA && PROJECT_DATA.map((proj: ProjectInfo, index) => (
                <Box key={index} sx={{ mb: 1 }}>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "'Times New Roman', Times, serif",
                      textTransform: 'lowercase',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {(proj.title || 'no title').toLowerCase()}
                    {(proj.github || proj.website) && (
                      <>
                        {' ('}
                        {proj.github && (
                          <Link
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            sx={{ fontSize: '0.95em', color: 'inherit', textTransform: 'lowercase' }}
                          >
                            github
                          </Link>
                        )}
                        {proj.github && proj.website && ', '}
                        {proj.website && (
                          <Link
                            href={proj.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            sx={{ fontSize: '0.95em', color: 'inherit', textTransform: 'lowercase' }}
                          >
                            website
                          </Link>
                        )}
                        {')'}
                      </>
                    )}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.98rem',
                      fontFamily: "'Times New Roman', Times, serif",
                      lineHeight: 1.4,
                      mt: 0,
                      mb: 0,
                      whiteSpace: 'pre-line',
                      textTransform: 'lowercase',
                    }}
                  >
                    {(proj.description || 'no description').toLowerCase()}
                  </Typography>
                </Box>
              ))}

            </TabsContent>
          </div>
        </Tabs>
      </Box>
    </Layout>
  );
}

export default App;
