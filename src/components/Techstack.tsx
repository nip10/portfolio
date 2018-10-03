import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import * as StackImgs from './../assets/img/stack';
import stack from './../stack';

const Img = styled.img`
  max-width: 100px;
  max-height: 100px;
  width: 100%;
  height: 100%;
`;

const StackWrapper = styled.div`
  margin-top: 2em;
`;

const StackRow = styled.div`
  display: flex;
  align-items: center;
`;

const BulletEnt = styled.span`
  margin-right: 5px;
  color: #A66FED;
`;

const ImgOverlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #008CBA;
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
`;

const ImgContainer = styled.div`
  position: relative;
  margin: 0 1rem;
  display: flex;
  width: 100px;
  height: 100px;
  :hover ${ImgOverlay} {
    bottom: 0;
    height: 100%;
  }
`;

const ImgOverlayText = styled.p`
  color: white;
  font-size: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const StackList = styled.ul`
  margin: 1rem 0 0 1rem;
  padding: 0;
  font-size: 1rem;
  font-weight: 700;
`;

const StackListItem = styled.li`
  list-style: none;
  margin: 0.25rem 0 0 2rem;
  padding: 0;
`;

const TechStackMobile = () => {
  return (
    <StackWrapper>
      <h3> Technical Skills </h3>
      <StackList> <BulletEnt>&bull;</BulletEnt> Languages </StackList>
      {stack.languages.map((el, i) => <StackListItem key={i}> {el.name} </StackListItem>)}
      <StackList> <BulletEnt>&bull;</BulletEnt> Front-end </StackList>
      {stack.frontEnd.map((el, i) => <StackListItem key={i}> {el.name} </StackListItem>)}
      <StackList> <BulletEnt>&bull;</BulletEnt> Back-end </StackList>
      {stack.backEnd.map((el, i) => <StackListItem key={i}> {el.name} </StackListItem>)}
      <StackList> <BulletEnt>&bull;</BulletEnt> Tools </StackList>
      {stack.tools.map((el, i) => <StackListItem key={i}> {el.name} </StackListItem>)}
    </StackWrapper>
  );
};

const TechStackDesktop = () => {
  return (
    <StackWrapper>
      <h3> Technical Skills </h3>
      <h4> <BulletEnt>&bull;</BulletEnt> Languages </h4>
      <StackRow>
        {stack.languages.map((el, i) => (
          <ImgContainer key={i}>
            <Img src={StackImgs[el.alias ? el.alias.toLowerCase() : el.name.toLowerCase()]} alt={`${el.name.toLowerCase()} logo`} />
            <ImgOverlay>
              <ImgOverlayText> {el.name} </ImgOverlayText>
            </ImgOverlay>
          </ImgContainer>
        ))}
      </StackRow>
      <h4> <BulletEnt>&bull;</BulletEnt> Front-end </h4>
      <StackRow>
        {stack.frontEnd.map((el, i) => (
          <ImgContainer key={i}>
            <Img src={StackImgs[el.alias ? el.alias.toLowerCase() : el.name.toLowerCase()]} alt={`${el.name.toLowerCase()} logo`} />
            <ImgOverlay>
              <ImgOverlayText> {el.name} </ImgOverlayText>
            </ImgOverlay>
          </ImgContainer>
        ))}
      </StackRow>
      <h4> <BulletEnt>&bull;</BulletEnt> Back-end </h4>
      <StackRow>
        {stack.backEnd.map((el, i) => (
          <ImgContainer key={i}>
            <Img src={StackImgs[el.name.toLowerCase()]} alt={`${el.name.toLowerCase()} logo`} />
            <ImgOverlay>
              <ImgOverlayText> {el.name} </ImgOverlayText>
            </ImgOverlay>
          </ImgContainer>
        ))}
      </StackRow>
      <h4> <BulletEnt>&bull;</BulletEnt> Tools </h4>
      <StackRow>
        {stack.tools.map((el, i) => (
          <ImgContainer key={i}>
            <Img src={StackImgs[el.name.toLowerCase()]} alt={`${el.name.toLowerCase()} logo`} />
            <ImgOverlay>
              <ImgOverlayText> {el.name} </ImgOverlayText>
            </ImgOverlay>
          </ImgContainer>
        ))}
      </StackRow>
    </StackWrapper>
  );
};

const Techstack = () => {
  return (
    <MediaQuery minWidth={1024}>
      {matches => {
        return matches
          ? TechStackDesktop()
          : TechStackMobile()
      }}
    </MediaQuery>
  );
};

export default Techstack;