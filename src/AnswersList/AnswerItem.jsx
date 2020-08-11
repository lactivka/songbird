import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import './AnswersList.scss';

const classNames = require('classnames');

const AnswerItem = ({ name, clickHandler, correctItem }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const itemClass = classNames({
    'item-mark': true,
    'correct-item': isCorrect,
    'wrong-item': isWrong,
  });

  const itemClickHandler = (event) => {
    if (event.target.id === correctItem) setIsCorrect(true);
    else setIsWrong(true);
    clickHandler(event);
  };

  return (
    <li
    className="answer-item p-3"
    id={name}
    onClick={itemClickHandler}>
      <span className={itemClass}></span>
      {name}
    </li>
  );
};

AnswerItem.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  correctItem: PropTypes.string.isRequired,
};

export default hot(module)(AnswerItem);
