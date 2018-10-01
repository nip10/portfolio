import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import MenuIcon from './MenuIcon';

const NavList = styled.ul`
  float: right;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0;
  padding: 0;
  padding-top: 1.5rem;
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
  height: 25px;
  :hover {
    border-bottom: 2px solid #A66FED;
  }
`;

const NavLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
  :before {
    color: #A66FED;
    content: "{"
  }
  :after {
    color: #A66FED;
    content: "}"
  }
`;

const NavListMobile = styled.ul`
  float: right;
  list-style: none;
  display: ${(props: INavListMobileProps) => props.toggle ? 'flex' : 'none'};
  justify-content: space-between;
  width: 300px;
  margin: 0;
  margin-top: 1em;
  padding: 0;
  flex-wrap: wrap;
  background-color: #ccc;
`;

const NavItemMobile = styled.li`
  margin: 0;
  padding: 0;
  height: 25px;
  width: 100%;
  text-align: center;
  :hover {
    border-bottom: 2px solid #A66FED;
  }
`;

const NavLinkMobile = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
  vertical-align: middle;
  :before {
    color: #A66FED;
    content: "{"
  }
  :after {
    color: #A66FED;
    content: "}"
  }
`;

interface INavBarState {
  toggle: boolean,
}

interface INavListMobileProps {
  toggle: boolean,
}

class Navbar extends Component<{}, INavBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      toggle: false,
    }
  }

  private isMobile = () => window.matchMedia('(max-width: 768px)');

  private toggleNavList = () => {
    console.log('clicked');
    this.setState((prevState) => ({ toggle: !prevState.toggle }))
  }

  private navMobile = () => {
    return (
      <NavListMobile toggle={this.state.toggle}>
        <NavItemMobile>
          <NavLinkMobile href='#projects'> Projects </NavLinkMobile>
        </NavItemMobile>
        <NavItemMobile>
          <NavLinkMobile href='#about'> About </NavLinkMobile>
        </NavItemMobile>
        <NavItemMobile>
          <NavLinkMobile href='#contact'> Contact </NavLinkMobile>
        </NavItemMobile>
      </NavListMobile>
    );
  };

  private navDesktop = () => {
    return (
      <NavList>
        <NavItem>
          <NavLink href='#projects'> Projects </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#about'> About </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#contact'> Contact </NavLink>
        </NavItem>
      </NavList>
    );
  }

  public render() {
    return (
      <Fragment>
        <MenuIcon toggleNavList={this.toggleNavList} />
        {this.isMobile ? this.navMobile() : this.navDesktop()}
      </Fragment>
    );
  }
}

export default Navbar;
