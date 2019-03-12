import React, { Component, Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

// tslint:disable-next-line:no-unused-expression
const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    background-color: #F6F9FC;
    font-family: 'Montserrat', 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`;

class App extends Component {
  public render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
