// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// eslint-disable-next-line import/no-unresolved
import './styles.css';

// == Composant
const Header = ({
  title, img, description,
}) => (
  <header className="presentation">
    <img
      src={img}
      alt="dessins"
      className="presentation-image"
    />
    <div className="presentation-content">
      <h1 className="presentation-title">{title}</h1>
      <p className="presentation-infos">{title} - {description}</p>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


// == Export
export default Header;
