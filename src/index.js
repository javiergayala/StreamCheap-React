import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VolumeButton from './VolumeButton.js'
import './index.css';
import './StreamCheap.css';
import ClientConfig from "./ClientConfig.json";
import ClientDefaults from "./ClientDefaults.json";
// import App from './App';
import reportWebVitals from './reportWebVitals';

library.add(fab, fas)

const buttonsWithName = Object.keys(ClientConfig.buttons).map(function(key) {
  const button = ClientConfig.buttons[key];
  button.name = key;
  if (typeof(button.iconSize) == 'undefined') {
    button.iconSize = "3x";
  };
  if (typeof(button.backgroundTheme) == 'undefined') {
    button.backgroundTheme = ClientDefaults.buttons.backgroundTheme;
  };
  if (typeof(button.textTheme) == 'undefined') {
    button.textTheme = ClientDefaults.buttons.textTheme;
  };
  button.class = 'btn btn-' + button.backgroundTheme;
  button.colClass = 'col border bg-' + button.backgroundTheme;
  button.txtClass = 'd-block text-' + button.textTheme;
  button.reqUri = [
    window.location.protocol,
    '//',
    window.location.hostname,
    ':',
    ClientDefaults.backendPort,
    ClientDefaults.backendUri,
    button.triggerId
  ].join('');

  return button;
});

class CherryBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.item.reqUri);
    axios.get(this.props.item.reqUri);
    console.log('clicked ' + this.props.item.name);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render (props) {
    return (
        <div className={this.props.item.colClass} key={this.props.item.name}>
        <button type="button" className={this.props.item.class} onClick={this.handleClick}>
            <FontAwesomeIcon icon={[this.props.item.iconCat, this.props.item.iconName]} size={this.props.item.iconSize} />
        </button>
        <div className={this.props.item.txtClass} key={'btnTxt-' + this.props.item.name}>{this.props.item.buttonName}</div>
    </div>
    );
  }
}

const buttons = buttonsWithName.map(button =>
  <CherryBtn item={button} key={button.name} />
);

class ScreenPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          iconCat: 'fas',
          iconName: 'video',
          iconSize: '3x',
          buttonName: 'UNKNOWN',
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  };
  renderCherryBtnRow(i) {
    // Takes the row number as it's argument, then returns 4 buttons.
    const start = i * 4;
    const end = start + 4;
    return buttons.slice(start, end);
  }

  handleClick(c) {
    const reqUri = [
      window.location.protocol,
      '//',
      window.location.hostname,
      ':',
      ClientDefaults.backendPort,
      ClientDefaults.backendUri,
      c
    ].join('');
    alert(reqUri);
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.renderCherryBtnRow(0)}
        </div>
        <div className="row justify-content-center">
          {this.renderCherryBtnRow(1)}
        </div>
        <div className="row align-items-center">
        <div className="col"><input type="range" className="form-range" id="volumeSlider"></input></div>
        </div>
        <div className="row align-items-center display-6">
        <div className="col">
        <button type="button" className="btn btn-primary disabled">
        <FontAwesomeIcon icon={['fas', 'angle-left']} size="3x" />
        </button>
        </div>
        <div className="col">
          <VolumeButton btn={ClientConfig.globalButtons.mute} key={ClientConfig.globalButtons.mute.buttonName} />
          <VolumeButton btn={ClientConfig.globalButtons.unmute} key={ClientConfig.globalButtons.unmute.buttonName} />
        </div>
        <div className="col">
        <button type="button" className="btn btn-primary disabled">
        <FontAwesomeIcon icon={['fas', 'angle-right']} size="3x" />
        </button>
        </div>
        </div>
      </div>
    );
  }
}

class StreamCheap extends React.Component {
  render() {
    return (
      <div className="StreamCheap">
        <div className="container-sm">
          <h1 className="display-6">Stream Cheap</h1>
          <ScreenPage />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <StreamCheap />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
