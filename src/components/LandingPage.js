import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/landinganimation/data'
import { Grid, Button, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import ButtonArrow from './ButtonArrow'


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
      <Grid item>
        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
          <Grid 
            item 
            sm
            sx={(theme) => ({
              minWidth: "21.5em",
              marginLeft: "1em",
              [theme.breakpoints.down("sm")]: {
                marginLeft: "0",
              }
            })}
          >
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br/> to the Midwest
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
                >Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="outlined"
                  sx={(theme) => ({
                    borderColor: theme.palette.common.blue,
                    borderWidth: 2,
                    textTransform: "none",
                    borderRadius: 50,
                    fontFamily: "Roboto",
                    fontWeight: "bold",
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
    </Grid>
    
  )
}

export default LandingPage