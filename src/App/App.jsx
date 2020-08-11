import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Game from '../Game/Game.jsx';

const App = () => (
  <Game />
);

export default hot(module)(App);
