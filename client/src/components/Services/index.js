import React from 'react';
import Icon1 from '../../images/Lightning.svg'
import Icon2 from '../../images/Slack.svg'
import Icon3 from '../../images/ThumbsUp.svg'


import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';



const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>

      <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Auto populates answers using ML and NLP</ServicesH2>
          <ServicesP>When you ask a question, our Osmosi bot will search through past Slack threads and suggest similar questions.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Lives completely in Slack</ServicesH2>
          <ServicesP>You don't have to leave your product community to use our software; everything can be done in Slack.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Surfaces accurate information on install</ServicesH2>
          <ServicesP>All past questions are uploaded into our system.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
        
    </ServicesContainer>
  );
};

export default Services;
