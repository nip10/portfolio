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
`;

const ImgWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const Img = styled.img`
  display: block;
`;

const TextWrapper = styled.div`
  display: inline-block;
  width: calc(100% - 250px);
  height: 300px;
  box-sizing: border-box;
  padding: 1em;
  position: relative;
`;

const Description = styled.p`
  text-align: justify;
`;

const TagsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 85px;
`;

const TagsItem = styled.li`
  display: inline-block;
  border: 1px solid #74A4F7;
  padding: 0.5em 1em;
  margin: 0.5em 1em 0 0;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 30px;
`;

const DemoButton = styled.a`
  background-color: #8A74F7;
  padding: 1em 2em;
  color: white;
  border: none;
  font-weight: 700;
  box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
  margin-right: 1em;
  text-decoration: none;
`;

const SourceButton = styled.a`
  background-color: white;
  padding: 1em 2em;
  color: #8A74F7;
  border: none;
  font-weight: 700;
  box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
  text-decoration: none;
`;

const ButtonImg = styled.img`
  max-width: 2rem;
  vertical-align: middle;
  padding-right: 0.5rem;
`;

const Project: React.SFC<IProjectProps> = ({ title, description, stack, image, repo, demo }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={image} alt='todo: project name image' />
      </ImgWrapper>
      <TextWrapper>
        <h3> {title} </h3>
        <Description> {description} </Description>
        <TagsList>
          {stack.map((el, i) => <TagsItem key={i}> {el} </TagsItem>)}
        </TagsList>
        <ButtonWrapper>
          <DemoButton href={demo} target="_blank" rel="noopener noreferrer">
            <ButtonImg src={extlink} alt="" />
            <span> Demo </span>
          </DemoButton>
          <SourceButton href={repo} target="_blank" rel="noopener noreferrer">
            <ButtonImg src={github} alt="" />
            <span> Source </span>
          </SourceButton>
        </ButtonWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

export default Project;