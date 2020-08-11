/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import Nav from 'src/components/Nav';
import Page from 'src/components/Page';
import Home from 'src/components/Home';
import drawings from 'src/data';
// eslint-disable-next-line import/no-unresolved
import Drawing from 'src/components/Drawing';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Nav drawings={drawings} />
    <Route exact path="/">
      <Page>
        <Home drawings={drawings} />
      </Page>
    </Route>
    <Route exact path="/drawing">
    <Page>
      <Drawing drawing={drawings[1]} />
    </Page>
    </Route>
  </div>
);

// == Export
export default App;
