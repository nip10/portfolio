import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 65%;
  margin: 0 auto;
  margin-top: 10rem;
`;

const Title = styled.h2`
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HalfWrapper = styled.div`
  width: 40%;
  display: inline-block;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
`;

const ListItems = styled.li`
  width: 100%;
  /* justify-content: space-between; */
  /* justify-content: space-around; */
`;

const FormLabels = styled.label`
  display: block;
  text-align: left;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const FormInputs = styled.input`
  display: block;
  width: 100%;
  border: none;
  box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
  height: 2rem;
  margin-bottom: 1em;
`;

const FormTextarea = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
`;

const FormSubmitButton = styled.button`
  background-color: #8A74F7;
  padding: 1em 2em;
  color: white;
  float: right;
  border: none;
  font-weight: 700;
  box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
  cursor: pointer;
  margin-top: 1em;
`;

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -5rem;
  visibility: hidden;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Anchor id="contact" />
      <Title> Contact </Title>
      <ContentWrapper>
        <HalfWrapper>
          <List>
            <ListItems> Github </ListItems>
            <ListItems> Github </ListItems>
            <ListItems> Github </ListItems>
            <ListItems> Github </ListItems>
          </List>
        </HalfWrapper>
        <HalfWrapper>
          <form action="">
            <FormLabels htmlFor="name"> Name: </FormLabels>
            <FormInputs type="text" id="name" />
            <FormLabels htmlFor="email"> Email: </FormLabels>
            <FormInputs type="email" id="email" />
            <FormLabels htmlFor="message"> Message: </FormLabels>
            <FormTextarea id="message" rows={4} defaultValue="Enter your message here..." />
            <FormSubmitButton type="submit"> Submit </FormSubmitButton>
          </form>
        </HalfWrapper>
      </ContentWrapper>
    </Wrapper >
  );
};

export default Contact;