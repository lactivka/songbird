import * as React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './Player.scss';

const Player = ({ source }) => (
  <AudioPlayer
    autoPlay={false}
    showJumpControls={false}
    customVolumeControls={[]}
    customAdditionalControls={[]}
    autoPlayAfterSrcChange={false}
    customProgressBarSection={[
      RHAP_UI.MAIN_CONTROLS,
      RHAP_UI.PROGRESS_BAR,
    ]}
    customControlsSection={[
      RHAP_UI.CURRENT_TIME,
      RHAP_UI.DURATION,
    ]}
    src={source}
  />
);

Player.propTypes = {
  source: PropTypes.string.isRequired,
};

export default hot(module)(Player);
