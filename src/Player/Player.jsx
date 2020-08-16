import * as React from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './Player.scss';

const Player = ({
  source, isCorrectAnswer, canUseEffect, useEffectOff,
}) => {
  const audioEl = useRef();

  useEffect(() => {
    if (isCorrectAnswer && canUseEffect) {
      useEffectOff();
      audioEl.current.audio.current.pause();
      audioEl.current.audio.current.currentTime = 0;
    }
  });

  return (
  <AudioPlayer
    autoPlay={false}
    showJumpControls={false}
    customAdditionalControls={[]}
    autoPlayAfterSrcChange={false}
    customProgressBarSection={[
      RHAP_UI.VOLUME_CONTROLS,
      RHAP_UI.MAIN_CONTROLS,
      RHAP_UI.PROGRESS_BAR,

    ]}
    customControlsSection={[
      RHAP_UI.CURRENT_TIME,
      RHAP_UI.DURATION,

    ]}
    src={source}
    ref={audioEl}
  />
  );
};

Player.propTypes = {
  source: PropTypes.string.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
  canUseEffect: PropTypes.bool.isRequired,
  useEffectOff: PropTypes.func.isRequired,
};

export default hot(module)(Player);
