import React from 'react';
// eslint-disable-next-line import/no-unresolved
import LoginForm from 'src/containers/LoginForm';

import './styles.scss';

const Title = () => (
  <div className="title">
    <h1>Mon portfolio</h1>
    <LoginForm />
  </div>
);

export default Title;
