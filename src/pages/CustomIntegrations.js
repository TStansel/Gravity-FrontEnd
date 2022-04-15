import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { Box, useTheme } from '@mui/material'
import { Typography, Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { IconButton } from '@mui/material'
import backArrow from '../assets/backArrow.svg'
import { Hidden } from '@mui/material'
import forwardArrow from '../assets/forwardArrow.svg'
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import documentsAnimation from '../animations/documentsAnimation/data'
import scaleAnimation from '../animations/scaleAnimation/data'
import automationAnimation from '../animations/automationAnimation/data'
import uxAnimation from '../animations/uxAnimation/data'
import roots from '../assets/root.svg'
import CallToAction from '../components/CallToAction'




const CustomIntegrations = (props) => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  const documentOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  

  return (
    <Grid 
      container 
      direction="column"
    >
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
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
              sx={{
                backgroundColor: "transparent"
              }}
            >
              <Box
                component="img"
                alt="Back to services page"
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
              Custom Integrations 
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Gravity is here to help your business tackle technology.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
              to="/mobileapps"
              onClick={() => props.setSelectedIndex(2)}
              sx={{
                backgroundColor: "transparent"
              }}
            >
              <Box
                component="img"
                alt="Forward to next services page"
                src={forwardArrow}
              >
              </Box> 
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      {/* Middle Icons Part */}
      <Grid 
        item 
        container 
        direction="row" 
        justifyContent="center" 
        sx={{
          marginTop: "15em", 
          marginBottom: "20em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
      >
        <Grid item container direction="column" alignItems="center" md sx={{maxWidth: "40em"}}>
          <Grid item>
            <Typography variant='h4'>
              Save Energy
            </Typography>
          </Grid>
          <Grid item>
            <Box
              component="img"
              alt="Save energy"
              src={lightbulb}
            >
            </Box>  
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md sx={{maxWidth: "40em", marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0}}>
          <Grid item>
            <Typography variant='h4'>
              Save Time
            </Typography>
          </Grid>
          <Grid item>
            <Box
              component="img"
              alt="Energy icon"
              src={stopwatch}
            >
            </Box>  
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md sx={{maxWidth: "40em"}}>
          <Grid item>
            <Typography variant='h4'>
              Save Money
            </Typography>
          </Grid>
          <Grid item>
            <Box
              component="img"
              alt="Cash icon"
              src={cash}
            >
            </Box>  
          </Grid>
        </Grid>
      </Grid>

      {/* Animations */}
      <Grid 
        item 
        container 
        alignItems={matchesMD ? "center" : undefined} 
        direction={matchesMD ? "column" : "row"} 
        justifyContent="space-between"
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
      > 
        <Grid 
          item 
          container
          direction={matchesSM ? "column" : "row"}
          sx={{
            maxWidth: "40em",
            marginBottom: matchesMD ? "15em" : 0
          }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesMD ? "center" : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                Reduce Erors. Reduce Waste. Reduce Costs
              </Typography>
              <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                Billions are spent annually on the purchasing, printing, and distribution of paper.
              </Typography>
              <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                By utilizing digital forms of documents, you can do all this.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid 
          item 
          container
          sx={{
            maxWidth: "40em"
          }}
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesMD ? "center" : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align={matchesMD ? "center" : 'right'} paragraph>
                Whether you're a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Root cause analysis */}
      <Grid 
        item 
        container 
        direction="row"
        sx={{
          marginTop: "20em", 
          marginBottom: "20em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
          }}
        >
        <Grid item container direction="column" alignItems="center">
          <img 
            src={roots}
            alt="tree and roots extending out" 
            height={matchesSM ? "300em" : "450em"}
            width={matchesSM ? "300em" : "450em"}
          />
        </Grid>
        <Grid item sx={{maxWidth: "40em"}}>
          <Typography variant='h4' align="center" gutterBottom>
            Root-Cause Analysis
          </Typography>
          <Typography variant='body1' align="center" gutterBottom>
            Many problems are merely symptoms of larger, underlying issues.
          </Typography>
          <Typography variant='body1' align="center" gutterBottom>
            We can help you thoroughly examine all areas of your business to
            develop a holistic plan for the most effective implementation of
            technology.
          </Typography>
        </Grid>
      </Grid>

      {/* More Animations Section */}
      {/* Animations */}
      <Grid 
        item 
        container 
        alignItems={matchesMD ? "center" : undefined} 
        direction={matchesMD ? "column" : "row"} 
        justifyContent="space-between" 
        sx={{
          marginBottom: "10em",
          marginTop: "15em", 
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
      > 
        <Grid 
          item 
          container
          sx={{
            maxWidth: "40em",
            marginBottom: matchesMD ? "15em" : 0
          }}
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesMD ? "center" : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                Why waste time when you don't have to?
              </Typography>
              <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                We can help you identify processes with time or event based actions which can now easily be automated.
              </Typography>
              <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                Increasing efficiency increases profits, leaving you more time to focus on your business.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
          <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid 
          item 
          container
          sx={{
            maxWidth: "40em"
          }}
          direction={matchesMD ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesMD ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                A good design that isn't usable isn't a good design
              </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                So why are so many pieces of software complicated, confusing, and frustrating?
              </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                A good design that isn't usable isn't a good design
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue}/>
      </Grid>
    </Grid>
  )
}

export default CustomIntegrations