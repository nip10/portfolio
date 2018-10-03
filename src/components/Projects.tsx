import React from 'react';
import { Section, TitleWrapper, Title, InvisibleAnchor } from './UI';
import { projects } from './../projects/index';
import Project from './Project';

const Projects = () => {
  return (
    <Section>
      <InvisibleAnchor id="projects" />
      <TitleWrapper>
        <Title> {'< Projects />'} </Title>
      </TitleWrapper>
      {projects.map((project, i) => <Project key={i} {...project} />)}
    </Section>
  );
};

export default Projects;