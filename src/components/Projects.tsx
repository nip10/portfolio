import React from 'react';
import styled from 'styled-components';
import { projects } from './../projects/index';
import Project from './Project';

const Wrapper = styled.section`
  width: 65%;
  margin: 0 auto;
  margin-top: 12rem;
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #A66FED;
`;

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -5rem;
  visibility: hidden;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const Projects = () => {
  return (
    <Wrapper>
      <Anchor id="projects" />
      <TitleWrapper>
        <Title> Projects </Title>
      </TitleWrapper>
      {projects.map((project, i) => <Project key={i} {...project} />)}
    </Wrapper>
  );
};

export default Projects;