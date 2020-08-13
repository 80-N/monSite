import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Card';

import './styles.scss';

const Home = ({ drawings, title }) => (
  <div className="home">
    <h2 className="home__title">ILLUSTRATIONS</h2>
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
  title: PropTypes.string.isRequired,
};

export default Home;
