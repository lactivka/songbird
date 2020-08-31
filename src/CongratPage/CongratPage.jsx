import * as React from 'react';
import { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import winnerImg from '../assets/InstrumentSoundData/images/winner.png';
import playAgainImg from '../assets/InstrumentSoundData/images/playAgain.png';
import endOfGameAudio from '../assets/InstrumentSoundData/audio/endOfGame.mp3';
import winnerAudio from '../assets/InstrumentSoundData/audio/winner.mp3';
import './CongratPage.scss';

const CongratPage = ({ score, clickHandler }) => {
  const maxScore = 35;
  const audioEndOfGame = new Audio(endOfGameAudio);
  const audioWinner = new Audio(winnerAudio);

  useEffect(() => {
    if (score === maxScore) audioWinner.play();
    else audioEndOfGame.play();
  });

  return (
    <div className="jumbotron congrat-container text-center py-4">
    {score === maxScore && <>
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
    </>}
    <h1 className="congrat-header">Поздравляем!</h1>
    <span className="congrat-text">Вы прошли викторину и набрали {score} из 35 возможных баллов</span>
    {score === maxScore && <img className="winner-img d-block m-auto" src={winnerImg} alt="You winner"/>}
    {score < maxScore
      && <img className="again-img d-block m-auto" src={playAgainImg} alt="Try again"/>
    }
    <button
      className="try-again-btn btn w-100 mt-2"
      onClick={clickHandler}
    >Попробовать еще раз</button>
  </div>
  );
};

CongratPage.propTypes = {
  score: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default hot(module)(CongratPage);
