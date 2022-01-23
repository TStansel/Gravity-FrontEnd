import React, {useState} from 'react';
import Video from '../../videos/waves.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
        <HeroBg>
          {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
          
        </HeroBg>
        <HeroContent>
          <HeroH1>We'll find the answers so you don't have to.</HeroH1>
          <HeroP>
          Stop wasting your time waiting for answers, and answering repetitive questions on Slack. With Osmosi, you can provide your employees with the answers they need, when they need them, without disrupting the rhythm of your workflow.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              Get Osmosi {hover? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
