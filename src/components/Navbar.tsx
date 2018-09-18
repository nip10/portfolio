import React from 'react';
import styled from 'styled-components';

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
`;

const Navbar = () => {
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

export default Navbar;