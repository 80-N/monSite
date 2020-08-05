
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Card = () => (
  <div className="card">
    <img
      className="card__image"
      src="https://photos.google.com/album/AF1QipMWdkSApNIXGYMsnKKRSFoDIw1f4bDJQ8AvFN6I/photo/AF1QipNtgPJ0KhV_JQJ5qF0xrHR4nBAa1sOwwxRHZJXF" alt="Calao et papayer"/>
    <div className="card__content">
      <div className="card__title">
        Titre de l'illustration'
      </div>
      <div className="card__desc">
        Lorem ipsum dolor sit.
      </div>
      <a className="card__link">Lien</a>
    </div>
  </div>
);

Card.propTypes = {};

export default Card;
