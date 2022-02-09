import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, SocialMediaLink, WebsiteRights, LinkedInIcon, FacebookIcon, InstagramIcon } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll/modules';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Get Started</FooterLinkTitle>
                <FooterLink to="/signin">Contact Sales</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Mission</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Resources</FooterLinkTitle>
                <FooterLink to="/signin">Blog</FooterLink>
                <FooterLink to="/signin">Documentation</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <SocialMediaLink target="_blank" href="https://www.facebook.com/dallana.wijesundera">Facebook</SocialMediaLink>
                <SocialMediaLink target="_blank" href="https://www.instagram.com/dellwijesundera/">Instagram</SocialMediaLink>
                <SocialMediaLink target="_blank" href="https://www.linkedin.com/company/create-oasis/about/">LinkedIn</SocialMediaLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            gravity
            </SocialLogo>
            <WebsiteRights> ©{new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/dallana.wijesundera" target="_blank" aria-label="Facebook" className='i-facebook'>
                <FacebookIcon/>
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/dellwijesundera/" target="_blank" aria-label="Instagram" className='i-facebook'>
                <InstagramIcon/>
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/company/create-oasis/about/" target="_blank" aria-label="LinkedIn">
               <LinkedInIcon/> 
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
          
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
