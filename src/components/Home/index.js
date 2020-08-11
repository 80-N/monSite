import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Card';

import './styles.scss';

const Home = ({ drawings }) => (
  <div className="home">
    <h2 className="home__title">Bienvenue sur ma page d'illustrations'</h2>
    <div className="home__content">
      {drawings.map((drawing) => (
        <Card key={drawing.id} {...drawing} />
      ))}
    </div>
  </div>
);

Home.propTypes = {
  drawings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Home;
