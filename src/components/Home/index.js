import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Card';

import './styles.scss';

const Home = () => (
  <div className="home">
    <h2 className="home__title">Bienvenue sur ma page d'illustrations'</h2>
    <div className="home__content">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

Home.propTypes = {};

export default Home;
