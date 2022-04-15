import React from 'react'
import { Typography, Grid, Button, Box } from '@mui/material'
import centralizedIcon from '../assets/gravityGradientCentralizedIcon.svg'
import heuristicsIcon from '../assets/gravityGradientHeuristicsIcon.svg'
import integrationsIcon from '../assets/gravityGradientIntegrationsIcon.svg'
import ButtonArrow from '../components/ButtonArrow'
import { useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

const Services = (props) => {

  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
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


      {/* Custom Software Block */}
      <Grid item>
        <Grid 
          container 
          direction="row"
          justifyContent={matchesSM ? "center": undefined}
          sx={{
            marginTop: "5em",
            [theme.breakpoints.down("sm")]: {
              padding: 10,
            }
          }}
        >
          <Grid item sx={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined
          }}>
            <Typography variant="h4">
              Custom Integrations
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{
                marginBottom: "1em"
              }}
            >
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, built from the ground{" "} <span style={{fontFamily: "Pacifico",
                  color: theme.palette.common.orange,}}>up</span>
            </Typography>
            <Button 
              variant="outlined"
              component={Link}
              to="/customsoftware"
              onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
              sx={{
                ...theme.typography.learnButton,
                fontSize: "0.7rem",
                height: 35,
                [theme.breakpoints.down("md")]: {
                  marginBottom: "2em",
                }
              }}
            >
              <span 
                style={{
                  marginRight: 10,
                }}
              >Learn More</span> 
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
            </Button>
          </Grid>
          <Grid item>
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

      {/* IOS/Android App Development */}
      <Grid item>
        <Grid 
          container 
          direction="row"
          justifyContent={matchesSM ? "center": "flex-end"}
          sx={{
            marginTop: "12em",
            [theme.breakpoints.down("sm")]: {
              padding: 10,
            }
          }}
        >
          <Grid item sx={{
            textAlign: matchesSM ? "center" : undefined
          }}>
            <Typography variant="h4">
              Data Centralization
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{
                marginBottom: "1em"
              }}
            >
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your data
            </Typography>
            <Button 
              component={Link}
              to="/mobileapps"
              variant="outlined"
              onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
              sx={{
                ...theme.typography.learnButton,
                fontSize: "0.7rem",
                height: 35,
                [theme.breakpoints.down("md")]: {
                  marginBottom: "2em",
                }
              }}
            >
              <span 
                style={{
                  marginRight: 10,
                }}
              >Learn More</span> 
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
            </Button>
          </Grid>
          <Grid item sx={{marginRight: matchesSM ? 0 : "5em"}}>
            <Box
              sx={{
                width: "13em",
                marginLeft: "2em",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: 0
                }
              }}
              component="img"
              alt="Mobile Apps Icon"
              src={centralizedIcon}
            >
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Websites Block */}
      <Grid item>
        <Grid 
          container 
          direction="row"
          justifyContent={matchesSM ? "center": undefined}
          sx={{
            marginTop: "12em",
            [theme.breakpoints.down("sm")]: {
              padding: 10,
            }
          }}
        >
          <Grid item sx={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined
          }}>
            <Typography variant="h4">
              Data Analysis
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{
                marginBottom: "1em"
              }}
            >
              Watch More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Use your data to discover trends
            </Typography>
            <Button 
              component={Link}
              to="/websites"
              variant="outlined"
              onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}
              sx={{
                ...theme.typography.learnButton,
                fontSize: "0.7rem",
                height: 35,
                [theme.breakpoints.down("md")]: {
                  marginBottom: "2em",
                }
              }}
            >
              <span 
                style={{
                  marginRight: 10,
                }}
              >Learn More</span> 
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
            </Button>
          </Grid>
          <Grid item sx={{marginRight: matchesSM ? 0 : "5em"}}>
            <Box
              sx={{
                width: "13em",
                marginLeft: "2em",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: 0
                }
              }}
              component="img"
              alt="website icon"
              src={heuristicsIcon}
            >
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services