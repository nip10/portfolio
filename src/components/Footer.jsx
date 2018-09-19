import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 0 15%;
  height: 50px;
  margin: 6rem auto 0 auto;
  text-align: center;
  background-color: #F6F9FC;
  box-sizing: border-box;
`;

const Text = styled.h3`
  margin: 0;
  padding: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <Text> Diogo Cardoso &copy; {currentYear} </Text>
    </Wrapper>
  );
};

export default Footer;