import React, {useState} from 'react';
import Video from '../../videos/galaxy.mp4'

import { Img, HeroAccent, ImgWrap, HeroWrapper, HeroRow, HeroColumn1, HeroColumn2, HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <HeroContainer id="home">

          <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
        <HeroWrapper>
          <HeroRow imgStart={true}>
            <HeroColumn1>
              <ImgWrap>
                <Img src={require('../../images/StillFrame.svg').default}></Img>
              </ImgWrap>
            </HeroColumn1>
            <HeroColumn2>
              {/* <HeroContent> */}
                <HeroH1>We'll find the answers so you don't have to.</HeroH1>
                <HeroP>
                Stop wasting your time waiting for answers, and answering repetitive questions on Slack. With Gravity, you can provide your employees with the answers they need, when they need them, without disrupting the rhythm of your workflow.
                </HeroP>
                <HeroBtnWrapper>
                  <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Experience Gravity {hover? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </HeroBtnWrapper> 
              {/* </HeroContent>  */}
            </HeroColumn2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
      <HeroAccent>Hello</HeroAccent>
    </>
  );
};

export default HeroSection;
