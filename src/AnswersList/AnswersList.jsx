import * as React from 'react';
import { hot } from 'react-hot-loader';
import './AnswersList.scss';
import AnswerItem from './AnswerItem.jsx';

const AnswersList = () => (
    <div className="col-md-6">
      <ul className="answers-list p-0">
        <AnswerItem idx="1" />
        <AnswerItem idx="2" />
        <AnswerItem idx="3" />
        <AnswerItem idx="4" />
        <AnswerItem idx="5" />
        <AnswerItem idx="6" />
      </ul>
    </div>
);

export default hot(module)(AnswersList);
