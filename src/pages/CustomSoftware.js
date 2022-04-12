import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { Box, useTheme } from '@mui/material'
import { Typography, Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { IconButton } from '@mui/material'
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'


const CustomSoftware = (props) => {
  

  return (
    <Grid 
      container 
      direction="column"
      sx={{
        paddingLeft: "5em",
        paddingRight: "5em",
        paddingTop: "2em",
        paddingBottom: "10em",
      }}
    >
      <Grid item container direction="row">
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
        <Grid 
          item 
          container 
          direction="column"
          sx={{
            maxWidth: "40em"
          }}
        >
          <Grid item>
            <Typography variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography variant="body1" paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Typography variant="body1" paragraph>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Grid>
        </Grid>
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
      </Grid>
    </Grid>
  )
}

export default CustomSoftware