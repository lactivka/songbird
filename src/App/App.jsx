import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Header from '../Header/Header.jsx';
import QuestionBlock from '../QuestionBlock/QuestionBlock.jsx';
import AnswersList from '../AnswersList/AnswersList.jsx';
import ItemDescription from '../ItemDescription/ItemDescription.jsx';
import MainButton from '../MainButton/MainButton.jsx';

const App = () => (
    <>
    <Header />
    <QuestionBlock />
    <div className="row">
      <AnswersList />
      <ItemDescription />
    </div>
    <MainButton />
    </>
);

export default hot(module)(App);
