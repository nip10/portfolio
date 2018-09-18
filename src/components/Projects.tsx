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
  text-align: center;
`;

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -5rem;
  visibility: hidden;
`;

const Projects = () => {
  return (
    <Wrapper>
      <Anchor id="projects" />
      <Title> Projects </Title>
      {projects.map((project, i) => <Project key={i} {...project} />)}
    </Wrapper>
  );
};

export default Projects;