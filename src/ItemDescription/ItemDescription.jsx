import * as React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import './ItemDescription.scss';
import Player from '../Player/Player.jsx';

const ItemDescription = ({
  isSelectedAnswer, isCorrectAnswer, selectedData, canUseEffect, useEffectOff,
}) => (
    <div className="col-md-6">
      <div className="description-block rounded card ">
        { isSelectedAnswer
          && <>
            <div className="description-data d-flex w-100">
              <img className="image-block" src={selectedData.image} alt={selectedData.translate} />
              <div className="content-block d-flex flex-column justify-content-around">
                <h3 className="description-title pb-2">{selectedData.name}</h3>
                <h4 className="description-translate pb-2">{selectedData.translate}</h4>
                <Player
                source={selectedData.audio}
                isCorrectAnswer={isCorrectAnswer}
                canUseEffect={canUseEffect}
                useEffectOff={useEffectOff}
                 />
              </div>
            </div>
            <span className="description-text flex-auto w-100 mt-1">{selectedData.text}</span>
          </>
        }
        {
          !isSelectedAnswer
          && <div className="text-center m-auto">Послушайте плеер выше и выберите название
            прозвучавшего музыкального инструмента из списка</div>
        }
      </div>
    </div>
);

ItemDescription.propTypes = {
  isSelectedAnswer: PropTypes.bool.isRequired,
  selectedData: PropTypes.object.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
  canUseEffect: PropTypes.bool.isRequired,
  useEffectOff: PropTypes.func.isRequired,
};

export default hot(module)(ItemDescription);
