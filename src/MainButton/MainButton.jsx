import * as React from 'react';
import { hot } from 'react-hot-loader';
import './MainButton.scss';

const MainButton = () => (
  <button className="btn main-btn w-100 my-3">Next level</button>
);

export default hot(module)(MainButton);
