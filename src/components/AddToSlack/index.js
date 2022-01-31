import React from 'react';
import { Container, Icon, SlackWrap, SlackBtnWrapper, SlackContent, SlackH1 } from './AddToSlackElements';



const SlackIntegration = () => {
  return (
    <>
      <Container>
        <SlackWrap>
          <Icon to="/">osmosi</Icon>
          <SlackContent>
            <SlackH1>Like Osmosi?</SlackH1>
            <SlackBtnWrapper>
              <a href="https://slack.com/oauth/v2/authorize?client_id=2516673192850.2714678861750&scope=channels:history,channels:read,chat:write,commands,groups:read,reactions:write&user_scope="><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a> 
            </SlackBtnWrapper>
          </SlackContent>
        </SlackWrap>
      </Container>
    </>
  );
};

export default SlackIntegration;

