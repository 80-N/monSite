/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Nav = ({ drawings }) => (
  <nav className="menu">
    <NavLink
    to="/"
    className="menu__link"
    activeClassName="menu__link--active"
    exact
    >
      Accueil
    </NavLink>
    {drawings.map(({ id, title }) => (
      <NavLink
      key={id} 
      className="menu__link"
        to="/drawing"
        activeClassName="menu__link--active"
        exact
      >
          {title}
      </NavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  drawings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Nav;
