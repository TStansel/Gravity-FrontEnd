import React from 'react'
import { Typography, Grid, Button, Box } from '@mui/material'
import centralizedIcon from '../assets/gravityGradientCentralizedIcon.svg'
import heuristicsIcon from '../assets/gravityGradientHeuristicsIcon.svg'
import integrationsIcon from '../assets/gravityGradientIntegrationsIcon.svg'
import { useMediaQuery, useTheme } from '@mui/material'
import { useEffect } from 'react'

const Services = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid container direction="column">
      {/* Custom Integrations Block */}
      <Typography 
        variant="h3" 
        align="center"
        sx={{
          marginTop: "1em"
        }} 
        gutterBottom
      >
        Custom Integrations
      </Typography>
      <Grid item>
        <Grid 
          container
          justifyContent={matchesMD ? "center" : "space-between"}
          direction={matchesMD ? "column":"row"}
          sx={{
            paddingTop: "3em",
            paddingLeft: "5em",
            paddingRight: "5em",
            [theme.breakpoints.down("sm")]: {
              paddingLeft: "1.5em",
              paddingRight: "1.5em"
            }
          }}
        >  
          <Grid 
            item
            sx={{
              maxWidth: "35em"
            }}
          >
            <Typography 
              variant="subtitle1"
              color="black"
              fontWeight={500}
              sx={{
                fontStyle: "italic",
                marginBottom: "1em"
              }}
            >
              Answering questions where they're asked, when they're asked 
            </Typography>
            <Typography variant='subtitle1'>
              Gravity integrates with top communication platforms like Slack so we can identify redundant questions and answer them for you
            </Typography>
          </Grid>
          <Grid item alignSelf="center">
            <Box
              component="img"
              alt="Company Logos"
              src={integrationsIcon}
              sx={{
                width: "13em",
                marginLeft: "2em",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: 0
                },
              }}
            > 
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Data Centralization Block */}
      <Typography 
        variant="h3" 
        align="center"
        sx={{
          marginTop: "1em"
        }} 
        gutterBottom
      >
        Data Centralization
      </Typography>
      <Grid item>
        <Grid 
          container
          justifyContent={matchesMD ? "center" : "space-between"}
          direction={matchesMD ? "column":"row"}
          sx={{
            paddingTop: "3em",
            paddingLeft: "5em",
            paddingRight: "5em",
            [theme.breakpoints.down("sm")]: {
              paddingLeft: "1.5em",
              paddingRight: "1.5em"
            }
          }}
        >  
          <Grid 
            item
            sx={{
              maxWidth: "35em"
            }}
          >
            <Typography 
              variant="subtitle1"
              color="black"
              fontWeight={500}
              sx={{
                fontStyle: "italic",
                marginBottom: "1em"
              }}
            >
              All the information you need, in one place 
            </Typography>
            <Typography variant='subtitle1'>
              Instead of jumping between your various knowledge bases, edit and deploy information at scale from one platform. We use APIs from Google Drive, Confluence, and more to bring you the information you need to answer questions.
            </Typography>
          </Grid>
          <Grid item alignSelf="center">
            <Box
              component="img"
              alt="Company Logos"
              src={centralizedIcon}
              sx={{
                width: "13em",
                marginLeft: "2em",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: 0
                },
              }}
            > 
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Data Analysis Block */}
      <Typography 
        variant="h3" 
        align="center"
        sx={{
          marginTop: "1em"
        }} 
        gutterBottom
      >
        Data Analysis
      </Typography>
      <Grid item>
        <Grid 
          container
          justifyContent={matchesMD ? "center" : "space-between"}
          direction={matchesMD ? "column":"row"}
          sx={{
            paddingTop: "3em",
            paddingBottom: "3em",
            paddingLeft: "5em",
            paddingRight: "5em",
            [theme.breakpoints.down("sm")]: {
              paddingLeft: "1.5em",
              paddingRight: "1.5em"
            }
          }}
        >  
          <Grid 
            item
            sx={{
              maxWidth: "35em"
            }}
          >
            <Typography 
              variant="subtitle1"
              color="black"
              fontWeight={500}
              sx={{
                fontStyle: "italic",
                marginBottom: "1em"
              }}
            >
              Combining user feedback with machine learning to make your job easier
            </Typography>
            <Typography variant='subtitle1'>
              Gravity will alert you the moment answers have gone out of date, it will surface the most frequently asked questions, and it will even keep a running list of unanswered questions in one central location.
            </Typography>
          </Grid>
          <Grid item alignSelf="center">
            <Box
              component="img"
              alt="Company Logos"
              src={heuristicsIcon}
              sx={{
                width: "13em",
                marginLeft: "2em",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: 0
                },
              }}
            > 
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services