import React from "react";
import styled from "styled-components";
import { Section, TitleWrapper, Title, InvisibleAnchor } from "./UI";
import github from "./../assets/img/stack/git.svg";
import linkedin from "./../assets/img/icons/linkedin.svg";
import email from "./../assets/img/icons/mail.svg";

const SocialList = styled.ul`
  list-style: none;
  margin: 3rem 0 0 0;
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;
  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const SocialListItems = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  :hover {
    border-bottom: 2px solid #a66fed;
  }
`;

const SocialImg = styled.img`
  max-width: 50px;
  width: 100%;
`;

const Contact = () => {
  return (
    <Section>
      <InvisibleAnchor id="contact" />
      <TitleWrapper>
        <Title> {"< Contact />"} </Title>
      </TitleWrapper>
      <SocialList>
        <SocialListItems>
          <SocialImg src={github} alt="github logo" />
          <SocialLink
            href="https://github.com/nip10"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Github{" "}
          </SocialLink>
        </SocialListItems>
        <SocialListItems>
          <SocialImg src={linkedin} alt="linkedin logo" />
          <SocialLink
            href="https://www.linkedin.com/in/diogo-cardoso-30a065159/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Linkedin{" "}
          </SocialLink>
        </SocialListItems>
        <SocialListItems>
          <SocialImg src={email} alt="email icon" />
          <SocialLink
            href="mailto:diogocardoso92@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Email{" "}
          </SocialLink>
        </SocialListItems>
      </SocialList>
    </Section>
  );
};

export default Contact;
