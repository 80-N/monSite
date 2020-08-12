/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Home from 'src/containers/Home';
// eslint-disable-next-line import/no-unresolved
import Drawing from 'src/containers/Drawing';
import './styles.css';

// == Composant
const App = ({ getDrawings }) => {
  useEffect(() => {
    getDrawings();
  }, []);

  return (
    <div className="app">
      <Nav />
      <Route exact path="/">
        <Page>
          <Home />
        </Page>
      </Route>
      <Route
        exact
        path="/drawing/:slug"
        component={({ match }) => (
          <Page>
            <Drawing slug={match.params.slug} />
          </Page>
        )}
      />
    </div>
  );
};

App.propTypes = {
  getDrawings: PropTypes.func.isRequired,
};

export default App;
