import * as React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import './Header.scss';
import classNames from 'classnames';
import { categories } from '../InstrumentsData';

const Header = ({ currCategory, score }) => {
  const currId = currCategory - 1;

  return (
      <div className="header-container d-flex flex-wrap justify-content-between mt-3">
        <h3>Instrument<span className="text-success">Sound</span></h3>
  <div className="score my-auto">Score: {score}</div>
        <div className="w-100">
          <ul className="category-list d-flex flex-wrap p-0 mb-4">
            {
              categories.map((category, id) => {
                const itemClass = classNames({
                  'category-item': true,
                  current: currId === id,
                });
                return (
                  <li className={itemClass} key={category.toString()}>{category}</li>
                );
              })
            }
          </ul>
        </div>
      </div>
  );
};

Header.propTypes = {
  currCategory: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default hot(module)(Header);
