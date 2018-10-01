import React from 'react';
import styled from 'styled-components';
import extlink from './../assets/img/external-link.svg';
import github from './../assets/img/github.svg';

interface IProjectProps {
  title: string,
  description: string,
  stack: string[],
  image: string,
  repo: string,
  demo: string,
};

const Wrapper = styled.div`
  box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
  margin: 3em 0;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas: "img txt";
  min-height: 400px;
  @media (max-width: 1024px) {
    margin: 1em 0;
    grid-template-columns: 100%;
    grid-template-areas: "txt";
    min-height: 330px;
  }
`;

const ImgWrapper = styled.div`
  grid-area: img;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Img = styled.img`
  display: block;
  max-height: 100%;
  max-width: 100%;
`;

const TextWrapper = styled.div`
  padding: 3rem;
  grid-area: txt;
  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const Description = styled.p`
  text-align: justify;
  margin-top: 0;
  margin-bottom: 3rem;
`;

const TagsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 4rem;
`;

const TagsItem = styled.li`
  display: inline-block;
  border: 1px solid #74A4F7;
  padding: 0.5em 1em;
  margin: 0.5em 1em 0 0;
  font-size: 0.85em;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
`;

const DemoButton = styled.a`
  background-color: #8A74F7;
  padding: 0.8em 1em;
  color: white;
  border: none;
  font-weight: 700;
  box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
  margin-right: 1em;
  text-decoration: none;
  font-size: 0.9rem;
`;

const SourceButton = styled.a`
  background-color: white;
  padding: 0.8em 1em;
  color: #8A74F7;
  border: none;
  font-weight: 700;
  box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
  text-decoration: none;
  font-size: 0.9rem;
`;

const DemoBtnImg = styled.img`
  max-width: 1.5rem;
  vertical-align: middle;
  padding-left: 0.5rem;
`;

const SourceBtnImg = styled.img`
  max-width: 1.5rem;
  vertical-align: middle;
  padding-right: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Project: React.SFC<IProjectProps> = ({ title, description, stack, image, repo, demo }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={image} alt='todo: project name image' />
      </ImgWrapper>
      <TextWrapper>
        <Title> {title} </Title>
        <Description> {description} </Description>
        <TagsList>
          {stack.map((el, i) => <TagsItem key={i}> {el} </TagsItem>)}
        </TagsList>
        <ButtonWrapper>
          <DemoButton href={demo} target="_blank" rel="noopener noreferrer">
            <span> Demo </span>
            <DemoBtnImg src={extlink} alt="" />
          </DemoButton>
          <SourceButton href={repo} target="_blank" rel="noopener noreferrer">
            <SourceBtnImg src={github} alt="" />
            <span> Source </span>
          </SourceButton>
        </ButtonWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

export default Project;