import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import Typing from 'react-typing-animation';
import { particlesCfg } from '../config/index';

const HeroContainer = styled.section`
  background-color: #747FE0;
  position: relative;
  margin-top: 100px;
  box-sizing: border-box;
  height: calc(100vh - 20rem);
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 200px;
  left: 500px;
  margin: auto;
  color: white;
`;

const Hero = () => (
  <HeroContainer>
    <Particles height='100%' params={particlesCfg} />
    <HeroOverlay>
      <Typing>
        <span>Hi, I'm <strong>Diogo</strong>.</span>
        <br />
        <span>I'm a <strong>full-stack JavaScript web developer</strong>. Based in Porto, Portugal.</span>
        <br />
        <span>Currently in the final-year of a master's degree in Electrical and Computers Engineering at FEUP.</span>
      </Typing>
    </HeroOverlay>
  </HeroContainer>
);

export default Hero;