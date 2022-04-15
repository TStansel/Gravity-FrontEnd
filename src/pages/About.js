import React from 'react'
import { Card, CardActions, CardContent, CardMedia, useTheme } from '@mui/material'
import { Typography, Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import history from '../assets/history.svg'
import CallToAction from '../components/CallToAction'
import { useEffect } from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import cory from '../assets/coryanderson.jpg'
import thomas from '../assets/thomasstansel.jpg'
import justin from '../assets/justinhill.jpg'
import dell from '../assets/dellwijesundra.jpg'
import mason from '../assets/masonspong.jpg'
import miranda from '../assets/mirandamorris.jpg'
import mary from '../assets/marythompson.jpg'

const data = [
  {
    name: "Cory Anderson",
    linkedin: "https://www.linkedin.com/in/cory-b-anderson/",
    role: "Product Manager",
    photo: cory,
    github: null
  },
  {
    name: "Dell Wijesundra",
    linkedin: "https://www.linkedin.com/in/dallana-wijesundera/",
    role: "Product Manager",
    photo: dell,
    github: null
  },
  {
    name: "Miranda Morris",
    linkedin: "https://www.linkedin.com/in/miranda-morris-962003178/",
    role: "UX Designer",
    photo: miranda,
    github: null
  },
  {
    name: "Mary Thompson",
    linkedin: "https://www.linkedin.com/in/mary-thompson-8365981b7/",
    role: "UX Designer",
    photo: mary,
    github: null
  },
  {
    name: "Justin Hill",
    linkedin: "https://www.linkedin.com/in/justinhill426/",
    role: "Software Engineer",
    photo: justin,
    github: "https://github.com/justin-hill426"
  },
  {
    name: "Thomas Stansel",
    linkedin: "https://www.linkedin.com/in/thomas-stansel/",
    role: "Software Engineer",
    photo: thomas,
    github: "https://github.com/TStansel"
  },
  {
    name: "Mason Spong",
    linkedin: "https://www.linkedin.com/in/mason-spong-2b1527179/",
    role: "Software Engineer",
    photo: mason,
    github: "https://github.com/mason-spong"
  }
]


const About = (props) => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grid container direction="column">
      <Grid 
        item
        sx={{
          marginTop: matchesMD ? "1em" : "2em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
          }
        }}
      >
        <Typography 
          align="center"
          variant="h2"
        >
          About Us
        </Typography>
      </Grid>
      <Grid 
        item
        container
        justifyContent="center"
        sx={{
          marginTop: "3em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
          } 
        }}
      >
        <Typography 
          variant="h4"
          align="center"
          sx={{
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "1.5rem",
            maxWidth: "50em",
            lineHeight: 1.4
          }}
        >
          Automated answers for redundant questions powered by artificial intelligence
        </Typography>
      </Grid>
      <Grid
        item
        container
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
          }
        }}
        style={{ marginTop: "10em", marginBottom: "10em" }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent="space-between"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Founded in 2021, Gravity was the result of frustrated students finishing internships at large tech companies such as Microsoft, Apple, Snap, and CapitalOne. Onboarding is hard, but what is harder is trying to find information in a new ecosystem you are not use to. Compound that with the fact that the internships were remote, so they couldn't just nudge their manager and what do you get? Tons of wasted time spent googling and searching different company knowledge bases only to wind up empty handed.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Within the BYU Sandbox Product Accelerator environment, we set out to find a solution to helpless searches for information within the enterprise. After speaking with over 50 product managers, software engineers, and more, we came to understand that the problem was much deeper than expected. Information is extremely hard to keep updated and centralized on one platform as a company scales to thousands of employees. Because humans have an inherit biased to ask questions instead of searching for answers (while it may sound lazy, we all do it), We started asking ourselves why there wasn't just a website where all your knowledge bases could feed into? We set out to build that website.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                While integrating with Google Drive, Notion, and other knowledge bases was a good start, we still did not build the bridge from the question asked to the answer provider. To do so, we built an integration with Slack to create an automated channel for the back and forth flow of questions and answers. Now, if you as a question in Slack that has already been answered once before anywhere across the business, we can provide an answer in seconds! Pretty cool right?
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                The story continues and we are still moving strong. We would love to share our product with you, so please request a demo if you would like some more information!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
          }
        }}
        style={{ marginBottom: "15em" }}
      >
      {/* Team Block */}

        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>

        <Grid item>
          <Grid
            item
            container
            justifyContent="center"
            sx={{
              paddingLeft: "5em",
              paddingRight: "5em",
              [theme.breakpoints.down("sm")]: {
                paddingLeft: "1.5em",
                paddingRight: "1.5em"
              }
            }}
            spacing={4}
          >
            {data.map((profile) => (
              <Grid item>
                <Card
                  sx={{
                    minWidth: "15em",
                    maxWidth: "20em",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={profile.photo}
                    alt="This guy"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      align="center"
                      variant="h5"
                    >
                      {profile.name}
                    </Typography>
                    <Typography
                      align="center"
                      variant="body2"
                      color="#EA4335"
                    >
                      {profile.role}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid 
                      container
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Grid item component="a" href={profile.linkedin} rel="noopener noreferrer" target="_blank">
                        <LinkedInIcon fontSize="large" style={{
                          color: "#0E76A8",
                        }}/>
                      </Grid>
                      <Grid item component="a" href={profile.github} rel="noopener noreferrer" target="_blank">
                        {profile.github &&
                          <GitHubIcon fontSize="large" style={{
                            color: "#6e5494",
                          }}/>
                        }
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}

export default About