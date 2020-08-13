/* eslint-disable padded-blocks */
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
const App = ({
  getDrawings,
  loading,
  error,
  checkIsLogged,
}) => {

  useEffect(() => {
    getDrawings();
  }, []);

  // Pour vérifier la connexion du user
  useEffect(checkIsLogged, []);

  return (
    <div className="app">
      <Nav />
      <Route exact path="/">
        <Page>
          <Home />
        </Page>
        </Route>
        {!loading && !error && (
      <Route
        exact
        path="/drawing/:slug"
        component={({ match }) => (
          <Page>
            <Drawing slug={match.params.slug} />
          </Page>
        )}
      />
        )}
      {loading && !error && (
          <Page>
            <div>Chargement des illustrations ...</div>
          </Page>
      )}
      {error && (
        <Page>
          <div>Ooops ... Une erreur est survenue. Veuillez réessayer plus tard.</div>
        </Page>
      )}
    </div>
  );
};

App.propTypes = {
  getDrawings: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
};

export default App;
