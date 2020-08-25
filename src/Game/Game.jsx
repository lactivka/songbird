import * as React from 'react';
import { hot } from 'react-hot-loader';
import { useState } from 'react';
import Header from '../Header/Header.jsx';
import QuestionBlock from '../QuestionBlock/QuestionBlock.jsx';
import AnswersList from '../AnswersList/AnswersList.jsx';
import ItemDescription from '../ItemDescription/ItemDescription.jsx';
import MainButton from '../MainButton/MainButton.jsx';
import { data } from '../InstrumentsData';
import CongratPage from '../CongratPage/CongratPage.jsx';

const Game = () => {
  const [currCategory, setCurrCategory] = useState(1);
  const [correctId, setCorrectId] = useState(Math.floor(Math.random() * 6));
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isSelectedAnswer, setIsSelectedAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [increaseValue, setIncreaseValue] = useState(5);
  const [isGameOver, setIsGameOver] = useState(false);
  const [canUseEffect, setCanUseEffect] = useState(true);

  const categoryLength = 6;
  const firstInd = categoryLength * (currCategory - 1);
  const lastInd = firstInd + categoryLength;
  const currData = data.slice(firstInd, lastInd);
  const correctData = currData[correctId];
  const correctName = correctData.name;

  const [selectedItem, setSelectedItem] = useState(currData[0]);
  console.log(correctData.name);

  const AnswerItemClickHandler = (event) => {
    setIsSelectedAnswer(true);
    if (event.currentTarget.id === correctName && !isCorrectAnswer) {
      setIsCorrectAnswer(true);
      setScore(score + increaseValue);
    } else {
      setIncreaseValue(increaseValue - 1);
    }
  };

  const makeSelected = (event) => {
    const selected = currData.filter((instrument) => instrument.name === event.currentTarget.id);
    setSelectedItem(selected[0]);
  };

  const nextLevelHandler = () => {
    if (currCategory === 7) {
      setIsGameOver(true);
    } else {
      setIsSelectedAnswer(false);
      setCurrCategory(currCategory + 1);
      setCorrectId(Math.floor(Math.random() * 6));

      setIsCorrectAnswer(false);
      setIncreaseValue(5);
      setCanUseEffect(true);
    }
  };

  const newGameHandler = () => {
    setIsGameOver(false);
    setCurrCategory(1);
    setCorrectId(Math.floor(Math.random() * 6));
    setIsSelectedAnswer(false);
    setIsCorrectAnswer(false);
    setIncreaseValue(5);
    setCanUseEffect(true);
    setScore(0);
  };

  const useEffectOff = () => {
    setCanUseEffect(false);
  };

  return (
    <>
    <Header currCategory={currCategory}
      score={score} />
    {(isGameOver
      && <CongratPage score={score}
      clickHandler={newGameHandler} />)
      || <>
        <QuestionBlock
          correctData={correctData}
          isCorrectAnswer={isCorrectAnswer}
          isSelectedAnswer={isSelectedAnswer}
          canUseEffect={canUseEffect}
          useEffectOff={useEffectOff}
           />
        <MainButton
          isCorrectAnswer={isCorrectAnswer}
          clickHandler={nextLevelHandler}
        />
        <div className="row">
          <AnswersList
            currCategory={currCategory}
            currData={currData}
            clickHandler={AnswerItemClickHandler}
            correctItem={correctName}
            isCorrectAnswer={isCorrectAnswer}
            makeSelected={makeSelected}
          />
          <ItemDescription
            isSelectedAnswer={isSelectedAnswer}
            isCorrectAnswer={isCorrectAnswer}
            selectedData={selectedItem}
            canUseEffect={canUseEffect}
            useEffectOff={useEffectOff}
            />
        </div>
      </>
    }
    </>
  );
};

export default hot(module)(Game);
