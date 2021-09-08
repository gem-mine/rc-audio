// eslint-disable-next-line no-unused-vars
import * as React from 'react'

export interface AudioProps {
  src?: string | (() => string);
  prefixCls?: string;
  placement?: 'left' | 'right';
  currentTime?: number;
  volume?: number;
  muted?: boolean;
  showProgressBarInfo?: boolean;
  cuePoints?: Array<{
    time: number;
    title: string;
  }>;
  showBufferProgress?: boolean;
  onEnded?: (e: Event) => void;
  onTimeUpdate?: (e: Event) => void;
  onDurationChange?: (e: Event) => void;
  onCuePoints?: (cuePoint: {
    time: number;
    title: string;
    index: number;
  }) => void;
  renderCustom?: () => React.ReactElement;
}

declare class RcAudio extends React.Component<AudioProps, any> {
  onTimeUpdate: any;
  onPlay: any;
  onPause: any;
  onSeeked: any;
  onEnded: any;
  onDurationChange: any;
  saveAudioRef: any;
  onVolumeMouseDown: any;
  toggleMuted: any;
  onProgressMouseDown: any;
  togglePlay: any;
  setCurrentTime: any;
  audio: any;
  setVolume: any;
  setMuted: any;
}

export default RcAudio
