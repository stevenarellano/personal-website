'use client';

import Layout from '../src/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import EDUCATION_DATA from '../src/data/education';
import EXPERIENCE_DATA from '../src/data/experiences';
import TALK_DATA from '../src/data/talks';
import ARTIFACT_DATA from '../src/data/artifacts';

import { EducationInfo, ExperienceInfo, TalkInfo, ArtifactInfo } from '../src/types';

const theme = {
  typography: {
    primary: {
      fontSize: '0.9rem',
      lineHeight: 1.1,
      color: 'text.primary',
    },
    secondary: {
      fontSize: '0.8rem',
      lineHeight: 1.1,
      color: 'text.secondary',
    }
  }
};

export default function Home() {
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
            <TabsTrigger value="artifacts">artifacts</TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-auto">
            <TabsContent value="experience" className="h-full overflow-auto">
              <Box display="flex" flexDirection="column" gap={0}>
                {EXPERIENCE_DATA.map((exp: ExperienceInfo, index) => (
                  <Card key={index} sx={{ backgroundColor: 'transparent', boxShadow: 'none', pb: 1 }}>
                    <CardHeader
                      title={`${exp.role}, ${exp.company}`}
                      titleTypographyProps={{ sx: theme.typography.primary }}
                      subheader={
                        <Typography sx={{ ...theme.typography.secondary, mt: 0 }}>
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
                    titleTypographyProps={{ sx: theme.typography.primary }}
                    subheader={
                      <>
                        <Typography sx={{ ...theme.typography.secondary, mt: 0, mb: 0.1 }}>
                          {edu.degree} • {edu.when}
                        </Typography>
                      </>
                    }
                    sx={{ p: 0.5 }}
                  />
                  <CardContent sx={{ p: 0.5, pt: 0, backgroundColor: 'transparent' }}>
                    <Typography sx={{ ...theme.typography.primary, mb: 0.25 }}>relevant courses:</Typography>
                    <Box component="ul" sx={{ pl: 3, m: 0, listStyle: 'disc' }}>
                      {edu.relevantCourses.map((course, i) => (
                        <Box component="li" key={i}>
                          <Typography sx={{ ...theme.typography.secondary, mt: 0 }}>
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
                    <Typography sx={{ ...theme.typography.primary, mb: 0.2 }}>
                      {talk.title}
                      {' '}
                      (
                      {talk.venue}
                      )
                    </Typography>
                    <Typography sx={{ ...theme.typography.secondary, mt: 0 }}>
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

            <TabsContent value="artifacts" className="h-full overflow-auto pb-4">
              {ARTIFACT_DATA.length === 0 ? (
                <Typography color="text.secondary" sx={{ textTransform: 'lowercase' }}>
                  no artifacts for now...
                </Typography>
              ) : (
                <Box display="flex" flexDirection="column" gap={0}>
                  {ARTIFACT_DATA.map((artifact: ArtifactInfo, index) => (
                    <Card key={index} sx={{ backgroundColor: 'transparent', boxShadow: 'none', pb: 1 }}>
                      <CardHeader
                        title={`${artifact.title}`}
                        titleTypographyProps={{ sx: theme.typography.primary }}
                        subheader={
                          <Typography sx={{ ...theme.typography.secondary, mt: 0 }}>
                            {artifact.description}
                            {' • '}
                            <Link href={artifact.url} target="_blank" rel="noopener noreferrer" underline="hover">
                              {artifact.type === 'github' ? 'github' : artifact.type === 'blog' ? 'blog' : 'link'}
                            </Link>
                          </Typography>
                        }
                        sx={{ p: 0 }}
                      />
                    </Card>
                  ))}
                </Box>
              )}
            </TabsContent>

          </div>
        </Tabs>
      </Box>
    </Layout>
  );
}
