import * as React from 'react';
import { hot } from 'react-hot-loader';
import './QuestionBlock.scss';

const QuestionBlock = () => (
  <div className="question-block rounded d-flex p-3 mb-4">
    <div className="image-block"></div>
    <div className="content-block d-flex flex-column justify-content-around">
      <h3>******</h3>
      <audio src="" controls className="w-auto"></audio>
    </div>
  </div>
);

export default hot(module)(QuestionBlock);
