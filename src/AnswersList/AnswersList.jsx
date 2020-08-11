import * as React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import './AnswersList.scss';
import AnswerItem from './AnswerItem.jsx';

const AnswersList = ({ currData, clickHandler, correctItem }) => {

  return (
    <div className="col-md-6">
      <ul className="answers-list p-0">
        {
          currData.map((instrument) => <AnswerItem name={instrument.name}
          clickHandler={clickHandler}
          correctItem={correctItem}
          key={instrument.name.toString()} />)
        }
      </ul>
    </div>);
};

AnswersList.propTypes = {
  currData: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired,
  correctItem: PropTypes.string.isRequired,
};

export default hot(module)(AnswersList);
