import React from 'react'
import { Typography, Grid, Box, IconButton } from '@mui/material'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Hidden } from '@mui/material'
import integrationAnimation from '../animations/integrationAnimation/data'

import forwardArrow from '../assets/forwardArrow.svg'
import backArrow from '../assets/backArrow.svg'
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagement from '../assets/increaseEngagement.svg'

import CallToAction from '../components/CallToAction'

const MobileApps = (props) => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Grid container direction="column">
      <Grid 
        item 
        container 
        direction="row" 
        justifyContent={matchesMD ? "center" : undefined} 
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
      >
        <Hidden mdDown>
          <Grid 
            item
            sx={{
              marginTop: "0.5em",
              marginRight: "1em",
              marginLeft: "-3.5em"
            }}
          >
            <IconButton
              component={Link}
              to="/customsoftware"
              onClick={() => props.setSelectedIndex(1)}
              sx={{
                backgroundColor: "transparent"
              }}
            >
              <Box
                component="img"
                alt="Back to Custom Software Development"
                src={backArrow}
              >
              </Box>
            </IconButton>
          </Grid>
        </Hidden>
        <Grid 
          item 
          container 
          direction="column"
          sx={{
            maxWidth: "40em"
          }}
        >
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Mobile Apps allow you to take your tools on the go.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Convenience. Connection.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid 
            item
            sx={{
              marginTop: "0.5em"
            }}
          >
            <IconButton
              component={Link}
              to="/websites"
              onClick={() => props.setSelectedIndex(3)}
              sx={{
                backgroundColor: "transparent"
              }}
            >
              <Box
                component="img"
                alt="Forward to next websites page"
                src={forwardArrow}
              >
              </Box> 
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid 
        item 
        container 
        direction={matchesSM ? "column" : "row"}
        sx={{
          marginTop: "15em",
          marginBottom: "15em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesSM ? "center" : undefined} variant='body1' paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one 
              convenient place.
            </Typography>
            <Typography align={matchesSM ? "center" : undefined} variant='body1' paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{maxWidth: "20em"}}/>
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesSM ? "center" : 'right'} variant="h4" gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesSM ? "center" : 'right'} variant='body1' paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography align={matchesSM ? "center" : 'right'} variant='body1' paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Icons grid */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          marginBottom: "15em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align='center' variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid 
          item 
          container 
          direction="column" 
          alignItems="center" 
          md
          sx={{
            marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0
          }}
        >
          <Grid item>
            <Typography align='center' variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img src={access} alt="extend the access" style={{maxWidth: '28em'}} />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align='center' variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="app with notifications" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={props.setValue}/>
      </Grid>
    </Grid>
  )
}

export default MobileApps