import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
  background: conic-gradient(from -26.29deg at 64.69% 113.89%, #86C0F6 -31.88deg, #A259FF 11.25deg, #E086F6 166.87deg, #86C0F6 328.12deg, #A259FF 371.25deg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1

  :before {
    content: '';
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;



export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`


export const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`)};
  }
`

export const HeroColumn1 = styled.div`
  margin-top: 45px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const HeroColumn2 = styled.div`
  margin-top: 45px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

export const HeroAccent = styled.div`
  position: relative;
  height: 123px;
  left: 0px;
  right: 0px;
  background: #3E103F;
  display: flex;
`