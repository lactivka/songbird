import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import './AnswersList.scss';

const classNames = require('classnames');

const AnswerItem = ({ idx }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const itemClass = classNames({
    'item-mark': true,
    'correct-item': isCorrect,
    'wrong-item': isWrong,
  });

  const itemClickHandler = () => setIsWrong(true);

  return (
    <li
    className="answer-item p-3"
    onClick={itemClickHandler}>
      <span className={itemClass}></span>
      Answer {idx}
    </li>
  );
};

AnswerItem.propTypes = {
  idx: PropTypes.string.isRequired,
};

export default hot(module)(AnswerItem);
