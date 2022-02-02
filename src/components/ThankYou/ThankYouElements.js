import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: conic-gradient(from -26.29deg at 64.69% 113.89%, #86C0F6 -31.88deg, #A259FF 11.25deg, #E086F6 166.87deg, #86C0F6 328.12deg, #A259FF 371.25deg);
`;

export const ThankYouWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;


export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const ThankYouH1 = styled.h1`
  margin-bottom: 1rem;
  color: #fff;
  font-size: 3.052rem;
  font-weight: 400;
  text-align: center;
`;


export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 2rem;
`;