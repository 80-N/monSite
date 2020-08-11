
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Card = ({ image, title, description }) => (
  <div className="card">
    <img
      className="card__image"
      src={image}
      alt={title}
    />
    <div className="card__content">
      <div className="card__title">
        {title}
      </div>
      <div className="card__desc">
        {description}
      </div>
      <a className="card__link">Agrandir l'image</a>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
