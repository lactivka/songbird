import * as React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import './QuestionBlock.scss';
import defaultImg from '../assets/InstrumentSoundData/images/defaultImg.png';
import Player from '../Player/Player.jsx';

const QuestionBlock = ({
  correctData, isCorrectAnswer, isSelectedAnswer, canUseEffect, useEffectOff,
}) => (
  <div className="question-block rounded d-flex p-3 mb-4">
    <img className="image-block" src={(isCorrectAnswer && correctData.image) || defaultImg} alt={correctData.name}></img>
    <div className="content-block d-flex flex-column justify-content-around px-3">
      {(isCorrectAnswer
        && <h3 className="pb-2">{correctData.name}</h3>)
        || <h3 className="pb-2">******</h3>
      }
      {(isSelectedAnswer && <Player
        source={correctData.audio}
        isCorrectAnswer={isCorrectAnswer}
        canUseEffect={canUseEffect}
        useEffectOff={useEffectOff}
      />)
      || <Player
      source={correctData.audio}
      isCorrectAnswer={false}
      isSelectedAnswer={false}
      canUseEffect={canUseEffect}
      useEffectOff={useEffectOff}
    />}
    </div>
  </div>);

QuestionBlock.propTypes = {
  correctData: PropTypes.object.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
  isSelectedAnswer: PropTypes.bool.isRequired,
  canUseEffect: PropTypes.bool.isRequired,
  useEffectOff: PropTypes.func.isRequired,
};

export default hot(module)(QuestionBlock);
