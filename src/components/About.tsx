import React from 'react';
import styled from 'styled-components';
import Techstack from './Techstack';

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 0 1em;
  @media (max-width: 1024px) {
    margin-top: 5rem;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #A66FED;
`;

const Text = styled.p`
  text-indent: 1em;
  text-align: justify;
  margin: 3em 0;
  padding: 0;
`;

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -5rem;
  visibility: hidden;
`;

const About = () => {
  return (
    <Wrapper>
      <Anchor id="about" />
      <TitleWrapper>
        <Title> {'< About />'} </Title>
      </TitleWrapper>
      <Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente libero quod facilis mollitia saepe odit nisi dolore repellat iure. Aliquam ex tenetur molestiae delectus id molestias veritatis impedit laudantium consequatur? </Text>
      <Techstack />
    </Wrapper>
  )
}

export default About;
