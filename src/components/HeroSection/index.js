import React, {useState} from 'react';
import Video from '../../videos/galaxy.mp4'

import { Img, HeroAccent, ImgWrap, HeroWrapper, HeroRow, HeroColumn1, HeroColumn2, HeroContainer, HeroBg, NavBtn, VideoBg, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, NavBtnLink } from './HeroElements';
import { Button } from '../shared/ButtonLink';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <HeroContainer id="home">

          <HeroBg>
            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
          </HeroBg>
        <HeroWrapper>
          <HeroRow imgStart={true}>
            <HeroColumn1>
              <ImgWrap>
                <Img src={require('../../images/StillFrame.svg').default}></Img>
              </ImgWrap>
            </HeroColumn1>
            <HeroColumn2>
                <HeroH1>We'll find the answers so you don't have to.</HeroH1>
                <HeroP>
                Stop wasting your time waiting for answers, and answering repetitive questions on Slack. With Gravity, you can provide your employees with the answers they need, when they need them, without disrupting the rhythm of your workflow.
                </HeroP>
                <HeroBtnWrapper>
                  <NavBtn>
                    <NavBtnLink to="/getdemo" onMouseEnter={onHover} onMouseLeave={onHover}>Experience Gravity {hover? <ArrowForward /> : <ArrowRight />}</NavBtnLink>
                  </NavBtn>
                </HeroBtnWrapper> 
            </HeroColumn2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
      <HeroAccent></HeroAccent>
    </>
  );
};

export default HeroSection;
