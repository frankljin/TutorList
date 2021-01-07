import React from 'react';
import DailyIframe from '@daily-co/daily-js';
import "./styles/App.css"

class VideoCallFrame extends React.Component {

  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
  }

  componentDidMount() {
    if (!this.props.url) {
      console.error('there is an error');
      return;
    }
    this.daily = DailyIframe.wrap(this.iframeRef.current);
    this.daily.join({ url: this.props.url });
  }

  render() {
    return <iframe className="Video-Frame"
             title="video call iframe"
             ref={this.iframeRef}
             allow="camera; microphone; fullscreen"
           ></iframe>
  }
}

export default VideoCallFrame;