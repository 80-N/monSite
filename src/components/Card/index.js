import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Card = ({ img, title, description }) => (
  <div className="card">
    <img
      className="card__image"
      src={img}
      alt={title}
    />
    <div className="card__content">
      <div className="card__title">
        {title}
      </div>
      <div className="card__desc">
        {description}
      </div>
      <Link
        to="/drawing"
        className="card__link"
      >
        Agrandir l'image
      </Link>
    </div>
  </div>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
