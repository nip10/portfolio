import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import cplusplus from "./../assets/img/cplusplus.svg";
import css3 from "./../assets/img/css3.svg";
import github from "./../assets/img/github.svg";
import gulp from "./../assets/img/gulp.svg";
import html5 from "./../assets/img/html5.svg";
import iojs from "./../assets/img/iojs.svg";
import javascript from "./../assets/img/javascript.svg";
import jest from "./../assets/img/jest.svg";
import matlab from "./../assets/img/matlab.png";
import mongodb from "./../assets/img/mongodb.svg";
import node from "./../assets/img/node.svg";
import npm from "./../assets/img/npm.svg";
import postgres from "./../assets/img/postgres.svg";
import r from "./../assets/img/react.svg";
import redis from "./../assets/img/redis.svg";
import redux from "./../assets/img/redux.svg";
import sass from "./../assets/img/sass.svg";
import ts from "./../assets/img/typescript.svg";
import webpack from "./../assets/img/webpack.svg";
import yarn from "./../assets/img/yarn.svg";

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

const TechStackDesktop = () => {
  return (
    <StackWrapper>
      <h3> Technical Skills </h3>
      <StackList> <BulletEnt>&bull;</BulletEnt> Languages </StackList>
      <StackListItem> JavaScript </StackListItem>
      <StackListItem> TypeScript </StackListItem>
      <StackListItem> C++ </StackListItem>
      <StackListItem> MATLAB </StackListItem>
      <StackList> <BulletEnt>&bull;</BulletEnt> Front-end </StackList>
      <StackListItem> HTML5 </StackListItem>
      <StackListItem> CSS3 </StackListItem>
      <StackListItem> Sass </StackListItem>
      <StackListItem> React </StackListItem>
      <StackListItem> Redux </StackListItem>
      <StackListItem> SocketIO </StackListItem>
      <StackList> <BulletEnt>&bull;</BulletEnt> Back-end </StackList>
      <StackListItem> Node </StackListItem>
      <StackListItem> MongoDB </StackListItem>
      <StackListItem> PostgreSQL </StackListItem>
      <StackListItem> redis </StackListItem>
      <StackList> <BulletEnt>&bull;</BulletEnt> Tools </StackList>
      <StackListItem> Github </StackListItem>
      <StackListItem> NPM </StackListItem>
      <StackListItem> yarn </StackListItem>
      <StackListItem> Gulp </StackListItem>
      <StackListItem> Webpack </StackListItem>
      <StackListItem> Jest </StackListItem>
    </StackWrapper>
  );
};

const TechStackMobile = () => {
  return (
    <StackWrapper>
      <h3> Technical Skills </h3>
      <h4> <BulletEnt>&bull;</BulletEnt> Languages </h4>
      <StackRow>
        <ImgContainer>
          <Img src={javascript} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> JavaScript </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={ts} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> TypeScript </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={cplusplus} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> C++ </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={matlab} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> MATLAB </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
      </StackRow>
      <h4> <BulletEnt>&bull;</BulletEnt> Front-end </h4>
      <StackRow>
        <ImgContainer>
          <Img src={html5} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> HTML5 </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={css3} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> CSS3 </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={sass} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> Sass </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={r} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> React </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={redux} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> Redux </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={iojs} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> SocketIO </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
      </StackRow>
      <h4> <BulletEnt>&bull;</BulletEnt> Back-end </h4>
      <StackRow>
        <ImgContainer>
          <Img src={node} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> Node.js </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={mongodb} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> MongoDB </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={postgres} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> PostgreSQL </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={redis} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> redis </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
      </StackRow>
      <h4> <BulletEnt>&bull;</BulletEnt> Tools </h4>
      <StackRow>
        <ImgContainer>
          <Img src={github} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> Github </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={npm} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> NPM </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={yarn} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> yarn </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={gulp} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> Gulp </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={webpack} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> Webpack </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
        <ImgContainer>
          <Img src={jest} alt="TODO: some tech logo" />
          <ImgOverlay>
            <ImgOverlayText> Jest </ImgOverlayText>
          </ImgOverlay>
        </ImgContainer>
      </StackRow>
    </StackWrapper>
  );
};

const Techstack = () => {
  return (
    <MediaQuery minWidth={1024}>
      {matches => {
        return matches
          ? TechStackMobile()
          : TechStackDesktop()
      }}
    </MediaQuery>
  );
};

export default Techstack;