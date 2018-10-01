import React from 'react';
import styled from 'styled-components';
import github from "./../assets/img/github.svg";
import linkedin from "./../assets/img/linkedin.svg";

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 0 1em;
  @media (max-width: 1024px) {
    margin-top: 5rem;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #A66FED;
`;

const ContentWrapper = styled.div`
  display: grid;
  margin-top: 3em;
  grid-template-columns: 50% 50%;
  grid-template-areas: "social form";
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-template-areas: "form" "social";
  }
`;

const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  grid-area: "social";
  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    justify-content: space-around;
  }
`;

const SocialListItems = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  :hover {
    border-bottom: 2px solid #A66FED;
  }
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
  box-shadow: 0 2px 2px rgba(0, 0, 0, .24), 0 0 2px rgba(0, 0, 0, .12);
  height: 2rem;
  margin-bottom: 1em;
`;

const FormTextarea = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .24), 0 0 2px rgba(0, 0, 0, .12);
`;

const FormSubmitButton = styled.button`
  background-color: #8A74F7;
  padding: 1em 2em;
  color: white;
  float: right;
  border: none;
  font-weight: 700;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .24), 0 0 2px rgba(0, 0, 0, .12);
  cursor: pointer;
  margin-top: 1em;
`;

const Anchor = styled.a`
  display: block;
  position: relative;
  top: -5rem;
  visibility: hidden;
`;

const SocialImg = styled.img`
  max-width: 50px;
  width: 100%;
`;

const Form = styled.form`
  grid-area: "form";
  @media (max-width: 1024px) {
    margin-top: 3rem;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <Anchor id="contact" />
      <TitleWrapper>
        <Title> {'< Contact />'} </Title>
      </TitleWrapper>
      <ContentWrapper>
        <SocialList>
          <SocialListItems>
            <SocialImg src={github} alt="github logo" />
            <SocialLink href="https://github.com/nip10" target="_blank" rel="noopener noreferrer"> Github </SocialLink>
          </SocialListItems>
          <SocialListItems>
            <SocialImg src={linkedin} alt="linkedin logo" />
            <SocialLink href="https://www.linkedin.com/in/diogo-cardoso-30a065159/" target="_blank" rel="noopener noreferrer"> Linkedin </SocialLink>
          </SocialListItems>
        </SocialList>
        <Form action="">
          <FormLabels htmlFor="name"> Name: </FormLabels>
          <FormInputs type="text" id="name" />
          <FormLabels htmlFor="email"> Email: </FormLabels>
          <FormInputs type="email" id="email" required={true} />
          <FormLabels htmlFor="message"> Message: </FormLabels>
          <FormTextarea id="message" rows={5} defaultValue="This feature is not implemented yet. If you want to reach out, contact me via Linkedin." required={true} />
          <FormSubmitButton type="submit" disabled={true}> Submit </FormSubmitButton>
        </Form>
      </ContentWrapper>
    </Wrapper >
  );
};

export default Contact;