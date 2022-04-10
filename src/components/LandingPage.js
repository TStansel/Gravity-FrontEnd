import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/landinganimation/data'
import { Grid, Button, Typography, Box, Card, CardActions, CardContent } from '@mui/material'
import { useTheme } from '@mui/material'
import ButtonArrow from './ButtonArrow'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import { useMediaQuery } from '@mui/material'
import websitesIcon from '../assets/websiteIcon.svg'

const LandingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
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
        }
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
                >Demo</Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="outlined"
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
              marginLeft: "10%",
              [theme.breakpoints.down("sm")]: {
                maxWidth: 30,
              }
            }}
          >
           <Lottie
              options={defaultOptions} 
              height={"100%"}
              width={"100%"}
           ></Lottie> 
          </Grid>
        </Grid>
      </Grid>
      {/* End of Hero Block */}
      {/* Custom Software Block */}
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
              Custom Software Development
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
              Complete digital solutions, from investigation to{" "} <span style={{fontFamily: "Pacifico",
                  color: theme.palette.common.orange,}}>celebration</span>
            </Typography>
            <Button 
              variant="outlined"
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
              sx={{
                marginLeft: "2em",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: 0
                }
              }}
              component="img"
              alt="Company Logos"
              src={customSoftwareIcon}
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
              iOS/Android App Development
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
              Integrate your web experience or create a standalone app{matchesSM ? null : <br />} with either mobile platform
            </Typography>
            <Button 
              variant="outlined"
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
                marginLeft: "2em",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: 0
                }
              }}
              component="img"
              alt="Mobile Apps Icon"
              src={mobileAppsIcon}
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
              Website Development
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
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button 
              variant="outlined"
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
                marginLeft: "2em",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: 0
                }
              }}
              component="img"
              alt="website icon"
              src={websitesIcon}
            >
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
  )
}

export default LandingPage