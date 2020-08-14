import * as React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import winnerImg from '../assets/InstrumentSoundData/images/winner.png';
import playAgainImg from '../assets/InstrumentSoundData/images/playAgain.png';
import './CongratPage.scss';

const CongratPage = ({ score, clickHandler }) => {
  const maxScore = 35;
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
      && <>
        <img className="again-img d-block m-auto" src={playAgainImg} alt="Try again"/>
        <button
        className="btn btn-success w-100 mt-2"
        onClick={clickHandler}
        >Попробовать еще раз</button>
      </>
    }
  </div>
  );
};

CongratPage.propTypes = {
  score: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default hot(module)(CongratPage);
