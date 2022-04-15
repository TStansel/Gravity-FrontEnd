import { useTheme, Box, Grid, Hidden, Typography } from "@mui/material"
import footerAdornment from '../assets/gravityicon.svg'
import React from "react"
import { Link } from "react-router-dom"
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
        Gravity
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const Footer = (props) => {
  const theme = useTheme()

  return (
    <footer
      style={{
        background: "linear-gradient(280.26deg, #A259FF -2.08%, #E086F6 46.26%, #86C0F6 96.35%)",
        width: "100%",
        zIndex: 1302,
        position: "relative",
      }}
    >
      <Hidden mdDown>
        <Grid
          container
          sx={{
            position: "absolute",
          }}
          justifyContent="center"
        >
          <Grid item sx={{margin: "3em"}}>
            <Grid container direction="column" spacing={2}>
              <Grid 
                item
                onClick={() => {props.setValue(1); props.setSelectedIndex(0)}}
                component={Link}
                to="/services"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Services
              </Grid>
              <Grid 
                item
                component={Link}
                to="/customintegrations"
                onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Custom Integrations
              </Grid>
              <Grid 
                item
                component={Link}
                to="/datacentralization"
                onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Data Centralization
              </Grid>
              <Grid 
                item
                component={Link}
                to="/analysis"
                onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Data Analysis
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{margin: "3em"}}>
            <Grid container direction="column" spacing={2}>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/howitworks"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                How It Works
              </Grid>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/howitworks"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Technology
              </Grid>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/howitworks"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{margin: "3em"}}>
            <Grid container direction="column" spacing={2}>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                About Us
              </Grid>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                History
              </Grid>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{margin: "3em"}}>
            <Grid container direction="column" spacing={2}>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Box
        component="img"
        sx={{
          paddingTop: "2em",
          width: "12em",
          verticalAlign: "bottom",
          [theme.breakpoints.down("md")]: {
            width: "10em",
          },
          [theme.breakpoints.down("xs")]: {
            width: "8em",
          },
        }}
        alt="Company Logos"
        src={footerAdornment}
      ></Box>
      <Copyright sx={{ mt: 5 }} />
      <Grid 
        container
        justifyContent="flex-end"
        sx={{
          position: "absolute",
          marginTop: "-6em",
          right: "1.5em",
          [theme.breakpoints.down("sm")]: {
            right: "0.6em",
          },
        }}
        spacing={2}
      >
        <Grid 
          item 
          component="a" 
          href="https://www.facebook.com" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          <LinkedInIcon 
            sx={{
              color: "#fff",
              fontSize: "4em"
            }}
          />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer