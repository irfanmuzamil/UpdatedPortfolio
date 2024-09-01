import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import irfan from "../../images/irfanImg.jfif";
import HeroBgAnimation from "../../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import resume from "../../data/Irfan's resume (2).pdf";
import { headContainerAnimation, headTextAnimation } from "../../utils/motion";

const HeroContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 80px 30px;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    gap: 6px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 9px;
  }
`;
const TextLoop = styled.div`
font-weight:600;
font-size: 32px;
gap: 12px
color: ${({ theme }) => theme.text_primary};
line-height: 68px;
display: flex
@media (max-width: 960px){
text-align: center;
}
@media (max-width: 640){
font-size:40px;
line-height: 48px;
margin-bottom: 9px;
}
`;
const Span = styled.div`
  cursor: poiter;
  color: ${({ theme }) => theme.primary};
`;
const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95} @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640) {
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 16px;
  }
`;
const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  position: relative; 
  z-index: 1;         
  font-weight: 700;
  font-size: 18px
&:hover {
  transform: scale(1.05);
  transition: all 0.6s ease-in-out; /* Added 's' for seconds */
  box-shadow: 20px 20px 60px #1f2634;
  filter: brightness(1);
}

@media (max-width: 640px) {
  padding: 12px 0;
  font-size: 16px;
}
`;
const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 1px solid ${({ theme }) => theme.text_primary};
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-width: 1360;
  justify-content: end;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;
const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi I'm <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I'm a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>
              <motion.div {...headContainerAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton href={resume} download>
                Download Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContainerAnimation}>
                <Tilt>
                  <Img src={irfan} alt="irfan" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
