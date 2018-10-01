import React, { Component } from 'react';
import styled from "styled-components";
import Navbar from './Navbar';

interface IWrapperProps {
  scrolled: boolean
}

const Wrapper = styled.nav<IWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: #F6F9FC;
  box-sizing: border-box;
  box-shadow: ${p => (p.scrolled ? '0 2px 2px rgba(0,0,0,0.24), 0 0 2px rgba(0,0,0,0.12)' : 'none')};
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const Title = styled.a`
  display: inline-block;
  font-size: 1.25rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
`;

class Header extends Component<{}, IWrapperProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  private handleScrollEvent = () => {
    if (window.scrollY < 5) {
      this.setState({ scrolled: false });
    } else {
      this.setState({ scrolled: true });
    }
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
        <Title> > Diogo Cardoso </Title>
        <Navbar />
      </Wrapper>
    );
  }
}

export default Header;