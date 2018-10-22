import React, { Component } from 'react';
import styled from "styled-components";
import Navbar from './Navbar';

interface IWrapperState {
  scrolled: boolean
}

const Wrapper = styled.nav<IWrapperState>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #F6F9FC;
  box-sizing: border-box;
  box-shadow: ${p => (p.scrolled ? '0 2px 2px rgba(0,0,0,0.24), 0 0 2px rgba(0,0,0,0.12)' : 'none')};
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    padding: 1rem;
    height: auto;
  }
`;

const Title = styled.a`
  display: inline-block;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
`;

class Header extends Component<{}, IWrapperState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  private handleScrollEvent = () => {
    const scrolled = window.scrollY > 5;
    this.setState({ scrolled });
  }

  public componentDidMount = () => {
    document.addEventListener('scroll', this.handleScrollEvent);
  }

  public componentWillUnmount = () => {
    document.removeEventListener('scroll', this.handleScrollEvent);
  }

  public render() {
    return (
      <Wrapper scrolled={this.state.scrolled}>
        <Title href='#top'> > Diogo Cardoso </Title>
        <Navbar />
      </Wrapper>
    );
  }
}

export default Header;