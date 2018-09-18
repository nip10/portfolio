import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 65%;
  margin: 0 auto;
  margin-top: 10rem;
`;

const Title = styled.h2`
  text-align: center;
`;

const Img = styled.img`
  margin: 0 1em;
`;

const Text = styled.p`
  text-indent: 1em;
  text-align: justify;
`;

const StackWrapper = styled.div`
  margin-top: 5rem;
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
      <Title> About </Title>
      <Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente libero quod facilis mollitia saepe odit nisi dolore repellat iure. Aliquam ex tenetur molestiae delectus id molestias veritatis impedit laudantium consequatur? </Text>
      <StackWrapper>
        <h3> Tech Stack </h3>
        <div>
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
          <Img src="https://via.placeholder.com/100x100" alt="TODO: some tech logo" />
        </div>
      </StackWrapper>
    </Wrapper>
  )
}

export default About;
