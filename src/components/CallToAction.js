import { Typography, Grid, Button, Box } from '@mui/material'
import ButtonArrow from './ButtonArrow'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import React from 'react'
import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'

const CallToAction = (props) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid 
      container 
      alignItems="center"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
          backgroundImage: `url(${mobileBackground})`,
          backgroundAttachment: "inherit"
        }
      }}
      justifyContent={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
        <Grid item sx={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit"}}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software. <br/> Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" sx={{fontSize: "1.5rem"}}>
                Take Advantage of the 21st Century
              </Typography>
              <Grid container justifyContent={matchesSM ? "center" : undefined} item>
                  <Button 
                      onClick={() => props.setValue(4)}
                      component={Link}
                      to="/demo"
                      variant="outlined"
                      sx={(theme) => ({
                        ...theme.typography.learnButton,
                        height: 45,
                        fontSize: "0.9rem",
                        width: 145,
                        marginRight: matchesSM ? 0 : "5em",
                        marginLeft: matchesSM ? 0 : "2em"
                      })}
                    >
                      <span style={{marginRight: 5}}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button 
            onClick={() => props.setValue(5)}
            variant="contained"
            sx={{
              ...theme.typography.estimate,
              borderRadius: 50,
              height: 80,
              width: 205,
              backgroundColor: theme.palette.common.orange,
              fontSize: "1.5rem",
              marginRight: "5em",
              marginLeft: "2em",
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
              },
              [theme.breakpoints.down("md")]: {
                marginLeft: 0,
                marginTop: "5em",
                marginRight: 0,
              }
            }}
          >
            Free Estimate
          </Button>
        </Grid>
    </Grid>
  )
}

export default CallToAction