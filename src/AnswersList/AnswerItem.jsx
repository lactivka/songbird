import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import './AnswersList.scss';
import classNames from 'classnames';
import correctAudio from '../assets/InstrumentSoundData/audio/correct.mp3';
import wrongAudio from '../assets/InstrumentSoundData/audio/wrong.mp3';

const AnswerItem = ({
  name, clickHandler, correctItem, isCorrectAnswer, makeSelected,
}) => {
  const audioCorrect = new Audio(correctAudio);
  const audioWrong = new Audio(wrongAudio);

  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const itemClass = classNames({
    'item-mark': true,
    'correct-item': isCorrect,
    'wrong-item': isWrong,
  });

  const itemClickHandler = (event) => {
    if (!isCorrectAnswer && !isCorrect && !isWrong) {
      if (event.currentTarget.id === correctItem) {
        setIsCorrect(true);
        audioCorrect.play();
      } else {
        setIsWrong(true);
        audioWrong.play();
      }
      clickHandler(event);
    }
    makeSelected(event);
  };

  return (
    <li
    className="answer-item"
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
  isCorrectAnswer: PropTypes.bool.isRequired,
  makeSelected: PropTypes.func.isRequired,
};

export default hot(module)(AnswerItem);
