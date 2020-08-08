import * as React from 'react';
import { hot } from 'react-hot-loader';
import './Header.scss';

const Header = () => (
    <div className="header-container d-flex flex-wrap justify-content-between mt-3">
      <h3>SongBird</h3>
      <div className="score my-auto">Score: 0</div>
      <div className="w-100">
        <ul className="category-list d-flex flex-wrap p-0 mb-4">
          <li className="category-item">Category1</li>
          <li className="category-item">Category2</li>
          <li className="category-item">Category3</li>
          <li className="category-item">Category4</li>
          <li className="category-item">Category5</li>
          <li className="category-item">Category6</li>
        </ul>
      </div>
    </div>
);

export default hot(module)(Header);
