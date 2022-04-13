import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { Typography, IconButton, Grid, Box } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Hidden } from '@mui/material'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'
import CallToAction from '../components/CallToAction'

const Websites = (props) => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

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
              to="/mobileapps"
              onClick={() => props.setSelectedIndex(1)}
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
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Having a website is a necessity in today's business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you're the best at it.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
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
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
              sx={{
                backgroundColor: "transparent"
              }}
            >
              <Box
                component="img"
                alt="Forward to our services page"
                src={forwardArrow}
              >
              </Box> 
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      {/* Analytics row */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          },
          marginTop: "15em"
        }}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img src={analytics} alt="Analytics data" style={{marginLeft: "-2.75em"}}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{maxWidth: "30em"}}>
          <Typography 
            align={matchesSM ? "center" : undefined}
            variant="body1"
          >
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>

      {/* ECommerce row */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        sx={{
          marginBottom: "15em",
          marginTop: "15em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align='center' variant="h4" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="world outline made of dollar signs"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid 
          item
          sx={{
            marginLeft: matchesSM ? 0 : "1em",
            maxWidth: "30em"
          }}
        >
          <Typography 
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            It's no secret that people like to shop online.
          </Typography>
          <Typography 
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it's time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>

      {/* Outreach section */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{marginLeft: matchesSM ? 0 : "1em", maxWidth: "30em"}}>
          <Typography 
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>

      {/* seo */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        sx={{
          marginBottom: "15em",
          marginTop: "15em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align='center' variant="h4" gutterBottom>
                Search Engine <br/> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="website standing on winner's podium"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid 
          item
          sx={{
            marginLeft: matchesSM ? 0 : "1em",
            maxWidth: "30em"
          }}
        >
          <Typography 
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography 
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            If you're like us, probably never.
          </Typography>
          <Typography 
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            Customers don't go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue}/>
      </Grid>
    </Grid>
  )
}

export default Websites