import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/landinganimation/data'
import { Grid, Button, Typography, Box, Card, CardContent } from '@mui/material'
import CallToAction from '../components/CallToAction'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material'
import ButtonArrow from '../components/ButtonArrow'
import centralizedIcon from '../assets/gravityGradientCentralizedIcon.svg'
import heuristicsIcon from '../assets/gravityGradientHeuristicsIcon.svg'
import { useMediaQuery } from '@mui/material'
import integrationsIcon from '../assets/gravityGradientIntegrationsIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import spaceride from '../animations/spaceride.json'


const LandingPage = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spaceride,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid 
      container 
      direction="column"
      sx={theme => ({
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
          marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
          marginTop: "2em",
        },
      })}
    >
    {/* Beginning of Hero Block */}
      <Grid item>
        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
          <Grid 
            item 
            sm
            sx={(theme) => ({
              minWidth: "21.5em",
              marginLeft: "1em",
              [theme.breakpoints.down("sm")]: {
                marginLeft: 0,
              }
            })}
          >
            <Typography variant="h2" align="center">
              We'll find the answers <br/> so you don't have to. 
            </Typography>
            <Grid container justifyContent="center" sx={{marginTop: "1em"}}>
              <Grid item>
                <Button 
                  variant='contained'
                  component={Link}
                  onClick={() => props.setValue(5)}
                  to="/contact"
                  sx={(theme) => ({
                    ...theme.typography.estimate,
                    backgroundColor: theme.palette.common.orange,
                    height: 45,
                    width: 145,
                    marginRight: 6,
                    borderRadius: 50,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.light,
                    }
                  })}
                >Contact Us</Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="outlined"
                  component={Link}
                  onClick={() => props.setValue(2)}
                  to="/howitworks"
                  sx={(theme) => ({
                    ...theme.typography.learnButton,
                    height: 45,
                    fontSize: "0.9rem",
                    width: 145,
                  })}
                >
                  <span style={{marginRight: 10}}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/></Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid 
            item 
            sm
            sx={{
              maxWidth: "50em",
              minWidth: "21em",
              marginTop: "2em",
              marginRight: "10%",
              marginLeft: "10%",
              [theme.breakpoints.down("sm")]: {
                maxWidth: 30,
              }
            }}
          >
           <Lottie
              options={defaultOptions} 
              height={"75%"}
              width={"75%"}
           ></Lottie> 
          </Grid>
        </Grid>
      </Grid>
      {/* End of Hero Block */}
      {/* Custom Integrations Block */}
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
            maxWidth: "26em",
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
              Answering questions where they're asked, when they're asked 
            </Typography>
            <Typography variant='subtitle1'>
              Gravity integrates with top communication platforms like Slack so we can identify redundant questions and answer them for you
            </Typography>
            <Button 
              variant="outlined"
              component={Link}
              to="/customintegrations"
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
              alt="Integrations Icon"
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

      {/* Data Centralization */}
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
            maxWidth: "26em",
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
              All the information you need, in one place
            </Typography>
            <Typography variant='subtitle1'>
              Instead of jumping between your various knowledge bases, edit and deploy information at scale from one platform. We use APIs from Google Drive, Confluence, and more to bring you the information you need to answer questions.
            </Typography>
            <Button 
              component={Link}
              to="/datacentralization"
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
              alt="Centralized Data Icon"
              src={centralizedIcon}
            >
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Data Analysis Block */}
      <Grid item>
        <Grid 
          container 
          direction="row"
          justifyContent={matchesSM ? "center": undefined}
          sx={{
            marginTop: "10em",
            [theme.breakpoints.down("sm")]: {
              padding: 10,
            }
          }}
        >
          <Grid item sx={{
            maxWidth: "26em",
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
              Combining user feedback with machine learning to make your job easier
            </Typography>
            <Typography variant='subtitle1'>
            Gravity will alert you the moment answers have gone out of date, it will surface the most frequently asked questions, and it will even keep a running list of unanswered questions in one central location.
            </Typography>
            <Button 
              component={Link}
              to="/analysis"
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
      
      {/* Revolution Block */}
      <Grid item>
        <Grid 
          container
          alignItems="center" 
          justifyContent="center"
          sx={{
                height: "100em",
                textAlign: "center",
                marginTop: "10em",
              }}
        >
          <Card
            sx={{
              position: "absolute",
              boxShadow: theme.shadows[10],
              borderRadius: 15,
              padding: "10em",
              [theme.breakpoints.down("sm")]: {
                paddingTop: "8em",
                paddingBottom: "8em",
                paddingLeft: 0,
                paddingRight: 0,
                borderRadius: 0,
                width: "100%",
              }
            }}
          >
            <CardContent>
              <Grid
                container
                direction="column"  
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    How It Works
                  </Typography>
                </Grid>
                <Grid 
                  item
              >
                  <Typography variant="subtitle1">
                    Stop wasting your time on slack all day and get back to doing what you love.
                  </Typography>
                  <Button 
                    onClick={() => props.setValue(2)}
                    variant="outlined"
                    component={Link}
                    to="/howitworks"
                    sx={(theme) => ({
                      ...theme.typography.learnButton,
                      height: 45,
                      fontSize: "0.9rem",
                      width: 145,
                    })}
                  >
                    <span style={{marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/></Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box
            component="img"
            alt="Background Image"
            src={revolutionBackground}
            sx={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>

      {/* Information Block */}
      <Grid item>
        <Grid 
         container
         direction="row"
         sx={{
           height: "80em",
         }}
         alignItems="center"
        >
        <Grid 
          item 
          container
          sx={{
              position: "absolute",
              textAlign: matchesSM ? "center" : "inherit"
            }}
          direction={matchesSM ? "column": "row"}
        >
        <Grid 
            item
            sm
            sx={{
              marginLeft: matchesSM ? 0 : "5em",
            }}
          >
            <Grid container sx={{marginBottom: matchesSM ? "10em": 0}} direction="column">
              <Typography 
                variant="h2"
                sx={{
                  color: "white"
                }}
              >
                About Us
              </Typography>
              <Typography variant="subtitle2">
                Our Story.
              </Typography>
              <Grid item>
                <Button 
                    onClick={() => props.setValue(3)}
                    component={Link}
                    to="/about"
                    variant="outlined"
                    sx={(theme) => ({
                      ...theme.typography.learnButton,
                      height: 45,
                      fontSize: "0.9rem",
                      width: 145,
                      color: "white",
                      borderColor: "white",
                    })}
                  >
                    <span style={{marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill="white"/></Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid 
            item
            sx={{
              marginRight: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center": "right",
            }}
            sm
          >
            <Grid container direction="column">
              <Typography 
                variant="h2"
                sx={{
                  color: "white"
                }}
              >
                Contact Us
              </Typography>
              <Typography variant="subtitle2">
                Say Hello! <span role="img" aria-label='waving hand'>👋🏻</span>
              </Typography>
              <Grid item>
                <Button 
                    onClick={() => props.setValue(4)}
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    sx={(theme) => ({
                      ...theme.typography.learnButton,
                      height: 45,
                      fontSize: "0.9rem",
                      width: 145,
                      color: "white",
                      borderColor: "white",
                    })}
                  >
                    <span style={{marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill="white"/></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          <Box
            sx={{
              background: "linear-gradient(280.26deg, #A259FF -2.08%, #E086F6 46.26%, #86C0F6 96.35%)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          >
          </Box>
        </Grid>
      </Grid>

      {/* Call to Action Block */}
      <Grid item>
        <CallToAction setValue={props.setValue}/>
      </Grid>
    </Grid>
  )
}

export default LandingPage