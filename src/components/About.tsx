import React from 'react';
import styled from 'styled-components';
import { Section, TitleWrapper, Title, InvisibleAnchor } from './UI';
import Techstack from './Techstack';

const Text = styled.p`
  text-indent: 1em;
  text-align: justify;
  margin: 3em 0;
  padding: 0;
`;

const About = () => {
  return (
    <Section>
      <InvisibleAnchor id="about" />
      <TitleWrapper>
        <Title> {'< About />'} </Title>
      </TitleWrapper>
      <Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente libero quod facilis mollitia saepe odit nisi dolore repellat iure. Aliquam ex tenetur molestiae delectus id molestias veritatis impedit laudantium consequatur? </Text>
      <Techstack />
    </Section>
  )
}

export default About;
