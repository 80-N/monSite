// == Import npm
import React from 'react';

// == Import
import Nav from 'src/components/Nav';
import Page from 'src/components/Page';
import Home from 'src/components/Home';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Nav />

    <Page>
      <Home />
    </Page>
    {/* <Page>
      <Drawing />
    </Page> */}
  </div>
);

// == Export
export default App;
