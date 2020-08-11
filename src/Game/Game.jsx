import * as React from 'react';
import { hot } from 'react-hot-loader';
import { useState } from 'react';
import Header from '../Header/Header.jsx';
import QuestionBlock from '../QuestionBlock/QuestionBlock.jsx';
import AnswersList from '../AnswersList/AnswersList.jsx';
import ItemDescription from '../ItemDescription/ItemDescription.jsx';
import MainButton from '../MainButton/MainButton.jsx';
import { data } from '../InstrumentsData';

const Game = () => {
  const [currCategory, setCurrCategory] = useState(1);
  const [correctId, setCorrectId] = useState(Math.floor(Math.random() * 6));
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isSelectedAnswer, setIsSelectedAnswer] = useState(false);

  const categoryLength = 6;
  const firstInd = currCategory - 1;
  const lastInd = currCategory - 1 + categoryLength;
  const currData = data.slice(firstInd, lastInd);
  const correctData = currData[correctId];
  const correctName = correctData.name;

  const [selectedItem, setSelectedItem] = useState(currData[0]);
  console.log(selectedItem);

  const AnswerItemClickHandler = (event) => {
    setIsSelectedAnswer(true);
    if (event.target.id === correctName) setIsCorrectAnswer(true);
    const selected = currData.filter((instrument) => instrument.name === event.target.id);
    setSelectedItem(selected[0]);
    // console.log(selectedItem);
  };

  return (
    <>
    <Header currCategory={currCategory} />
    <QuestionBlock
      correctData={correctData}
      isCorrectAnswer={isCorrectAnswer} />
    <div className="row">
      <AnswersList
        currCategory={currCategory}
        currData={currData}
        clickHandler={AnswerItemClickHandler}
        correctItem={correctName}
      />
      <ItemDescription
        isSelectedAnswer={isSelectedAnswer}
        selectedData={selectedItem}
        />
    </div>
    <MainButton isCorrectAnswer={isCorrectAnswer} />
    </>
  );
};

export default hot(module)(Game);
