/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Home from 'src/containers/Home';
// eslint-disable-next-line import/no-unresolved
import Drawing from 'src/containers/Drawing';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Route exact path="/">
      <Page>
        <Home />
      </Page>
    </Route>
    <Route exact path="/drawing">
    <Page>
      <Drawing />
    </Page>
    </Route>
  </div>
);

// == Export
export default App;
