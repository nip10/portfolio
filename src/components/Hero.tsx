import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import Typing from 'react-typing-animation';
import MediaQuery from 'react-responsive';
import { particlesCfgMobile, particlesCfgDesktop, particlesStyle } from '../config';

const HeroContainer = styled.section`
  background-color: #747FE0;
  position: relative;
  margin-top: 100px;
  box-sizing: border-box;
  height: calc(100vh - 20rem);
  @media (max-width: 1024px) {
    margin-top: 70px;
    height: calc(100vh - 70px);
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 260px;
  left: 360px;
  margin: auto;
  color: white;
  @media (max-width: 1024px) {
    top: 60%;
    left: 5%;
    right: 5%;
  }
`;

const Hero = () => (
  <HeroContainer>
    <MediaQuery minWidth={1024}>
      {matches => {
        return matches
          ? <Particles style={particlesStyle} params={particlesCfgDesktop} />
          : <Particles style={particlesStyle} params={particlesCfgMobile} />
      }}
    </MediaQuery>
    <HeroOverlay>
      <MediaQuery minWidth={1024}>
        {matches => {
          return matches
            ? <Typing>
              <span>Hi, I'm <strong>Diogo</strong>.</span>
              <br />
              <span>I'm a <strong>full-stack JavaScript web developer</strong>. Based in Porto, Portugal.</span>
              <br />
              <span>Currently in the final-year of a master's degree in Electrical and Computer Engineering at FEUP.</span>
            </Typing>
            : <Typing>
              <span>Hi, I'm <strong>Diogo</strong>.</span>
              <br />
              <span>I'm a <strong>full-stack JavaScript web developer</strong>. Based in Porto, Portugal.</span>
            </Typing>
        }}
      </MediaQuery>
    </HeroOverlay>
  </HeroContainer>
);

export default Hero;