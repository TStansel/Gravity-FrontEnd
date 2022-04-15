import React, { useState } from 'react'
import { Typography, Grid, Button, TextField, Dialog, DialogContent, CircularProgress } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import axios from 'axios'

import ButtonArrow from '../components/ButtonArrow'

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";



const Contact = (props) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    axios
      .get(
        "https://us-central1-gravity-dee46.cloudfunctions.net/sendMail",
        {
          params: {
            email: email,
            name: name,
            phone: phone,
            message: message
          }
        }
      )
      .then(res => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success("Message sent successfully!")
      })
      .catch(err => {
        setLoading(false);
        toast.error("Something went wrong!")
        console.error(err);
      });
    
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
    </React.Fragment>
  );
  


  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography
                align="center"
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                align="center"
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
              <Typography
                align="center"
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                A member of our support team will be in touch.
              </Typography>
            </Grid>
            <Grid item container justifyContent="center" style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justifyContent="center" style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:zachary@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    cory@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={message}
                sx={{
                  border: `2px solid ${theme.palette.common.blue}`,
                  marginTop: "5em",
                  borderRadius: 5
                }}
                multiline
                fullWidth
                rows={10}
                id="message"
                onChange={event => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justifyContent="center" style={{ marginTop: "2em" }}>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                sx={theme => ({
                  ...theme.typography.estimate,
                  borderRadius: 50,
                  height: 45,
                  width: 245,
                  fontSize: "1rem",
                  backgroundColor: theme.palette.common.orange,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.light
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: 40,
                    width: 225
                  }
                })}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesSM}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "15em"
              : "25em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "15em"
              : "25em"
          }
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                helperText={phoneHelper}
                error={phoneHelper.length !== 0}
                id="phone"
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <TextField
              InputProps={{ disableUnderline: true }}
              value={message}
              sx={{
                border: `2px solid ${theme.palette.common.blue}`,
                marginTop: "5em",
                borderRadius: 5
              }}
              multiline
              fullWidth
              rows={10}
              id="message"
              onChange={event => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                sx={{
                  ...theme.typography.estimate,
                  borderRadius: 50,
                  height: 45,
                  width: 245,
                  fontSize: "1rem",
                  backgroundColor: theme.palette.common.orange,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.light
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: 40,
                    width: 225
                  }
                }}
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "60em",
          paddingBottom: "10em",
          [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`
          }
        }}
        alignItems="center"
        justifyContent={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit"
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Making the Q&A Process Seamless
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
              >
                We'll find the answers so you don't have to
              </Typography>
              <Grid container justifyContent={matchesMD ? "center" : undefined} item>
                <Button
                  component={Link}
                  to="/howitworks"
                  variant="outlined"
                  sx={theme => ({
                    ...theme.typography.learnButton,
                    fontSize: "0.7rem",
                    height: 35,
                    padding: 5,
                    [theme.breakpoints.down("md")]: {
                      marginBottom: "2em"
                    }
                  })}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact