import React from 'react'
import { useTheme } from '@mui/material'
import { Typography, Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useEffect } from 'react'

import vision from '../assets/vision.svg'
import CallToAction from '../components/CallToAction'

import scanningAnimation from '../animations/scanningdocuments.json'
import dominoEffect from '../animations/dominoeffect.json'
import modeling from '../animations/machinelearning.json'
import Lottie from 'react-lottie'

const Revolution = (props) => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scanningAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const mlOptions = {
    loop: true,
    autoplay: true,
    animationData: modeling,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const dominoOptions = {
    loop: true,
    autoplay: true,
    animationData: dominoEffect,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grid container direction="column">
      <Grid
        item
        sx={{
          paddingTop: "3em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }}
      >
        <Typography 
          variant="h2"
          align={matchesMD ? "center" : undefined}
          style={{fontFamily: "pacifico"}}
        >
          How It Works
        </Typography>
      </Grid>
      <Grid 
        item 
        container 
        direction={matchesMD ? "column": "row"}
        sx={{
          marginTop: "5em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }} 
        alignItems="center"
      >
        <Grid item lg>
          <img src={vision} alt="mountain through binoculars" 
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Gravity has never been more necessary for successful companies as it is now. First of all, as work moves to a remote format, men and women that are used to asking questions in person and receiving immediate answers are still demanding quick responses in the form of Slack messages. As someone with the answers, this means you are going to spend hours every day just monitoring Slack. Second, there have been major advancements in deep learning over the past few years that allow machine learning models to understand English better than ever before. The result of this is that our question and answer pairing technology is extremely accurate. While your employees may not trust current answering bots because they are constantly providing poor answers, that is not the case with Gravity.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Our vision is to be your company’s backbone, providing much needed support day and night without you even thinking twice. We will do this by building more and more integrations that will feed data into our platform. By doing so, you will have access to all of your documentation, best practices, common systems, in one place. Not only that, but you will be able to make edits to this data and it will edit it across your company.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              As the world moves faster and faster, businesses need to cut out decelerators to keep up. The more time you waste answering questions you have already answered countless times, the more time your competitors have to surpass you. Instead, let us take care of onboarding, daily enablement, and more so that you can get back to doing what you love!
            </Typography>
          </Grid>
        </Grid>
      </Grid>


      {/* Inverted Grid row */}
      {/* <Grid 
        item 
        container 
        direction={matchesMD ? "column": "row"}
        sx={{
          marginTop: "3em",
          marginBottom: "10em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }} 
        alignItems="center"
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.

            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={matchesMD ? "center" : "flex-end"} item lg>
          <Lottie
            options={defaultOptions}
            style= {{maxWidth: "40em", margin: 0}}
          />
        </Grid>
      </Grid> */}

      
      <Grid
        item
        container
        direction="row"
        sx={{
          paddingTop: "2em",
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          }
        }} 
        justifyContent="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>

      {/* Index area */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '.5em',
            paddingRight: '.5em',
          },
          backgroundColor: "#39B54A",
          height: matchesMD ? "75em" : "45em"
        }} 
        justifyContent={matchesMD ? "flex-start" : "center"}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} md>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{
                color: "#000",
                marginTop: "5em"
              }}
            >
              Indexing
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              Cutting-edge advancements in machine learning like natural language processing
              have made 
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              We give you an interactive demonstration of the mockups,
              thoroughly explaining the thought process that went into each
              screen and every anticipated feature.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              Once you're completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine-details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{alignSelf: "center"}}>
          <Lottie 
            options={defaultOptions}
            height={matchesSM? 300 : 400}
            width={matchesSM? 300 : 400}
          >
          </Lottie>
        </Grid>
      </Grid>


       {/* Model area */}
       <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '.5em',
            paddingRight: '.5em',
          },
          backgroundColor: "#8E45CE",
          height: matchesMD ? "75em" : "45em"
        }} 
        justifyContent={matchesMD ? "flex-start" : "center"}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} md>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{
                color: "#000",
                marginTop: "5em"
              }}
            >
              Modeling
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              Cutting-edge advancements in machine learning like natural language processing
              have made 
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              We give you an interactive demonstration of the mockups,
              thoroughly explaining the thought process that went into each
              screen and every anticipated feature.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              Once you're completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine-details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{alignSelf: "center"}}>
          <Lottie 
            options={mlOptions}
            height={matchesSM? 300 : 400}
            width={matchesSM? 300 : 400}
          >
          </Lottie>
        </Grid>
      </Grid>

     
      

      {/* Iterate area */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '.5em',
            paddingRight: '.5em',
          },
          backgroundColor: "#86C0F6",
          height: matchesMD ? "75em" : "50em"
        }} 
        justifyContent={matchesMD ? "flex-start" : "center"}
      >
        <Grid 
          item 
          container 
          direction="column" 
          alignItems={matchesMD ? "center" : undefined} 
          md
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{
                color: "#000",
                marginTop: "5em"
              }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              As more and more questions are asked,
              Gravity's model becomes more and more robust,
              and you can expect the answers to become more accurate
              as the model continues to be fine-tuned to your organizations
              needs. 
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              Gravity will automatically remind you when questions are falling out of date
              or need to be reexamined for accuracy so that your knowledge base can stay 
              up to date at all times.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{alignSelf: "center"}}>
          <Lottie 
              options={dominoOptions}
              height={matchesSM? 300 : 400}
              width={matchesSM? 300 : 400}
            >
            </Lottie>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}

export default Revolution