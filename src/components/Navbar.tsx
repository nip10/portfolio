import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import MenuIcon from './MenuIcon';

const NavList = styled.ul`
  float: right;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0;
  padding: 0;
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

const NavListMobile = styled.ul`
  list-style: none;
  display: ${(props: INavListMobileProps) => props.toggle ? 'block' : 'none'};
  margin: 0;
  padding: 0;
  padding-top: 1rem;
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
`;

const NavItemMobile = styled.li`
  margin: 0;
  padding: 0.5rem 0;
  text-align: center;
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

  private toggleNavList = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }))
  }

  private navMobile = () => {
    return (
      <Fragment>
        <MenuIcon toggleNavList={this.toggleNavList} />
        <NavListMobile toggle={this.state.toggle}>
          <NavItemMobile>
            <NavLink href='#projects' onClick={this.toggleNavList}> Projects </NavLink>
          </NavItemMobile>
          <NavItemMobile>
            <NavLink href='#about' onClick={this.toggleNavList}> About </NavLink>
          </NavItemMobile>
          <NavItemMobile>
            <NavLink href='#contact' onClick={this.toggleNavList}> Contact </NavLink>
          </NavItemMobile>
        </NavListMobile>
      </Fragment>
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
      <MediaQuery minWidth={1024}>
        {matches => {
          return matches
            ? this.navDesktop()
            : this.navMobile()
        }}
      </MediaQuery>
    );
  }
}

export default Navbar;
