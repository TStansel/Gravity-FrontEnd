import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { Typography, IconButton, Grid, Box } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Hidden } from '@mui/material'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'

const Websites = (props) => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

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
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
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
    </Grid>
  )
}

export default Websites