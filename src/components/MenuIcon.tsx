import React from 'react';
import styled from 'styled-components';

const Stripe = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`;

interface IMenuIconProps {
  toggleNavList: () => void,
}

const MenuIcon: React.SFC<IMenuIconProps> = ({ toggleNavList }) => {
  return (
    <div onClick={toggleNavList}>
      <Stripe />
      <Stripe />
      <Stripe />
    </div>
  );
};

export default MenuIcon;
