import * as React from 'react';
import { hot } from 'react-hot-loader';
import './ItemDescription.scss';

const ItemDescription = () => (
  <div className="col-md-6">
    <div className="description-block rounded card ">
      <div className="description-data d-flex w-100">
        <div className="image-block"></div>
        <div className="content-block d-flex flex-column justify-content-around">
          <h3 className="pb-2">Bird name</h3>
          <h4 className="pb-2">Latin name</h4>
          <audio src="" controls className="w-auto"></audio>
        </div>
      </div>
      <span className="description-text flex-auto w-100 mt-3">fjdlkf jedlfjel elkfejlisxj lsfjsi ls fiej lxl ijelfj sli eflsjl j ilejfusil l fjsldijc le jflsij lfjsdljfi lsxj filej lisj lkj idle j fjdlkf jedlfjel elkfejlisxj lsfjsi ls fiej lxl ijelfj sli eflsjl j ilejfusil l fjsldijc le jflsij lfjsdljfi lsxj filej lisj lkj idle j</span>
    </div>
  </div>
);

export default hot(module)(ItemDescription);
