import * as React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import './MainButton.scss';

const MainButton = ({ isCorrectAnswer }) => (
  isCorrectAnswer ? <button className="btn main-btn w-100 my-3">Next level</button>
    : <button className="btn btn-outline-light w-100 my-3" disabled>Next level</button>
);

MainButton.propTypes = {
  isCorrectAnswer: PropTypes.bool.isRequired,
};

export default hot(module)(MainButton);
