// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// Composants
import Header from './Header';

// Style
// eslint-disable-next-line import/no-unresolved
import './styles.css';

// == Composant
function Drawing({ drawing }) {
  return (
    <div className="drawing">
      <Header
        name={drawing.title}
        img={drawing.img}
        description={drawing.description}
      />
    </div>
  );
}

Drawing.propTypes = {
  drawing: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

// == Export
export default Drawing;
