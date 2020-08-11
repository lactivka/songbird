import * as React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import './QuestionBlock.scss';
import defaultImg from '../assets/InstrumentSoundData/images/defaultImg.png';

const QuestionBlock = ({ correctData, isCorrectAnswer }) => (
  <div className="question-block rounded d-flex p-3 mb-4">
    <img className="image-block" src={(isCorrectAnswer && correctData.image) || defaultImg} alt={correctData.name}></img>
    <div className="content-block d-flex flex-column justify-content-around">
      {(isCorrectAnswer
        && <h3>{correctData.name}</h3>)
        || <h3>******</h3>
        }
      <audio src={correctData.audio} controls className="w-auto"></audio>
    </div>
  </div>
);

QuestionBlock.propTypes = {
  correctData: PropTypes.object.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
};

export default hot(module)(QuestionBlock);
