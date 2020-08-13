import * as React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import './ItemDescription.scss';

// import maracasAudio from  `../assets/InstrumentSoundData/audio/${url}`;

const ItemDescription = ({ isSelectedAnswer, selectedData }) => {
// const url = '../assets/InstrumentSoundData/audio/accordion.mp3';
// const audio = new Audio(url);
// const clickHandler = () => audio.play();

  return (
    <div className="col-md-6">
      <div className="description-block rounded card ">
        { isSelectedAnswer
          && <>
            <div className="description-data d-flex w-100">
              <img className="image-block" src={selectedData.image} alt={selectedData.translate} />
              <div className="content-block d-flex flex-column justify-content-around">
                <h3 className="pb-2">{selectedData.name}</h3>
                <h4 className="pb-2">{selectedData.translate}</h4>
                {/* <audio src={accordionAudio} controls className="w-auto"></audio> */}
                <ReactAudioPlayer
                  className="w-auto"
                  src={selectedData.audio}
                  controls
                />
              </div>
            </div>
            <span className="description-text flex-auto w-100 mt-3">{selectedData.text}</span>
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
};

ItemDescription.propTypes = {
  isSelectedAnswer: PropTypes.bool.isRequired,
  selectedData: PropTypes.object.isRequired,
};

export default hot(module)(ItemDescription);
