import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { particlesCfg } from '../config/index';

const HeroContainer = styled.div`
  background-color: #747FE0;
  position: relative;
  margin-top: 5rem;
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
      <p>Something here</p>
      <p>Another one</p>
      <p>And the last one which is very very very very long</p>
    </HeroOverlay>
  </HeroContainer>
);

export default Hero;