import * as React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import './MainButton.scss';

const MainButton = ({ isCorrectAnswer, clickHandler }) => (
  isCorrectAnswer ? <button className="btn main-btn w-100 my-3" onClick={clickHandler}>Next level</button>
    : <button className="btn btn-outline-light w-100 my-3" disabled>Дальше</button>
);

MainButton.propTypes = {
  isCorrectAnswer: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default hot(module)(MainButton);
