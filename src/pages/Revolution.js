import React from 'react'
import { useTheme } from '@mui/material'
import { Typography, Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import Lottie from 'react-lottie'

import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'
import technologyAnimation from '../animations/technologyAnimation/data.json'
import CallToAction from '../components/CallToAction'

const Revolution = (props) => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Grid container direction="column">
      <Grid
        item
        sx={{
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
          The Revolution
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
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>


      {/* Inverted Grid row */}
      <Grid 
        item 
        container 
        direction={matchesMD ? "column": "row"}
        sx={{
          marginTop: "10em",
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
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={matchesMD ? "center" : "flex-end"} item lg>
          <Lottie
            options={defaultOptions}
            style= {{maxWidth: "40em", margin: 0}}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        sx={{
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
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          },
          backgroundColor: "#B3B3B3",
          height: "90em"
        }} 
        justifyContent="center"
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
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
              Consultation
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
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img src={consultation} width="100%" style={{maxWidth: 700}} alt="Handshake"/>
        </Grid>
      </Grid>

      {/* Mockup area */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          },
          backgroundColor: "#FF7373",
          height: "90em"
        }} 
        justifyContent="center"
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
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
              Mockup
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
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              Then it's time for us to start on your minimum viable product.
              That's just a fancy term for a mockup, which doesn't include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
              style={{
                color: "#fff",
                maxWidth: "20em"
              }}
            > 
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img src={mockup} width="100%" style={{maxWidth: 1000}} alt="Basic website design outline"/>
        </Grid>
      </Grid>

      {/* Review area */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          },
          backgroundColor: "#39B54A",
          height: "90em"
        }} 
        justifyContent="center"
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
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
              Review
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
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
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
        <Grid item lg style={{alignSelf: "center"}}>
          <img width="100%" src={review} alt="Magnifying glass"/>
        </Grid>
      </Grid>

      {/* Design area */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          },
          backgroundColor: "#A67C52",
          height: "90em"
        }} 
        justifyContent="center"
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
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
              Design
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
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
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
        <Grid item lg style={{alignSelf: "center"}}>
          <img width="100%" src={design} style={{maxWidth: 1000}} alt="Magnifying glass"/>
        </Grid>
      </Grid>


      {/* Build area */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          },
          backgroundColor: "#FBB03B",
          height: "90em"
        }} 
        justifyContent="center"
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
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
              Build
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
              Here's where we get down to business.
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
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
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
        <Grid item lg style={{alignSelf: "center"}}>
          <img width="100%" src={build} style={{maxWidth: matchesMD ? 700 : 1000}} alt="Building figure"/>
        </Grid>
      </Grid>

      {/* Launch area */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          },
          backgroundColor: "#C1272D",
          height: "90em"
        }} 
        justifyContent="center"
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
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
              Launch
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
              The moment we've all been waiting for.
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
              When construction comes to a close you're the first one to know.
              We'll give our final demonstration to show off your shiny new
              software in the wild so you know exactly how it will look to your
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
              When you say the word, we press the button and launch your project
              out to the public. We're there to ensure everything goes to plan
              so you can start reaping the rewards of your technological
              investment immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img width="100%" src={launch} style={{maxWidth: 200}} alt="Building figure"/>
        </Grid>
      </Grid>

      {/* Launch area */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        sx={{
          paddingLeft: "5em",
          paddingRight: "5em",
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          },
          backgroundColor: "#8E45CE",
          height: "90em"
        }} 
        justifyContent="center"
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
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
              Maintain
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
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
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
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img width="100%" src={maintain} style={{maxWidth: 500}} alt="Building figure"/>
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
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
          },
          backgroundColor: "#29ABE2",
          height: "90em"
        }} 
        justifyContent="center"
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
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
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
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
              By planning for future features and changes we can build and
              evolve your application over time. As new use cases and customer
              needs develop we can respond with continuous integration of new
              content.
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
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement changes instead of waiting
              months for a single update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{alignSelf: "center"}}>
          <img width="100%" src={iterate} alt="Falling Dominoes"/>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}

export default Revolution