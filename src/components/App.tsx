import React, { Component, Fragment } from 'react';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${styledNormalize}
  body {
    background-color: #F6F9FC;
    font-family: 'Roboto', sans-serif;
    font-family: 'Montserrat', sans-serif;
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
      </Fragment>
    );
  }
}

export default App;
