import React from 'react';
import styled from 'styled-components';
import { Button, ButtonImg } from './UI/index';
import extlink from './../assets/img/icons/external-link.svg';
import github from './../assets/img/icons/github_btn.svg';

interface IProjectProps {
  title: string,
  description: string,
  stack: string[],
  image: string,
  repo: string,
  demo?: string,
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
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Img = styled.img`
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  & :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: normal;
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
          {demo &&
            <Button type={'primary'} href={demo} target="_blank" rel="noopener noreferrer">
              <span> Demo </span>
              <ButtonImg left={0.5} src={extlink} alt="external link icon" />
            </Button>
          }
          {repo &&
            <Button type={'secondary'} href={repo} target="_blank" rel="noopener noreferrer">
              <ButtonImg right={0.5} src={github} alt="github logo" />
              <span> Source </span>
            </Button>
          }
        </ButtonWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

export default Project;