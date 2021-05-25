import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  return button;
});

// const buttons = buttonsWithName.map(item =>
//   <div class={item.colClass}>
//       <button type="button" key={item.name} class={item.class}>
//           <FontAwesomeIcon icon={[item.iconCat, item.iconName]} size={item.iconSize} />
//       </button>
//       <div class={item.txtClass}>{item.buttonName}</div>
//   </div>
// );



class CherryBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked ' + this.props.item.name);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render (props) {
    return (
        <div class={this.props.item.colClass} key={this.props.item.name}>
        <button type="button" class={this.props.item.class} onClick={this.handleClick}>
            <FontAwesomeIcon icon={[this.props.item.iconCat, this.props.item.iconName]} size={this.props.item.iconSize} />
        </button>
        <div class={this.props.item.txtClass} key={'btnTxt-' + this.props.item.name}>{this.props.item.buttonName}</div>
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
    }
  };
  renderCherryBtnRow(i) {
    // Takes the row number as it's argument, then returns 4 buttons.
    const start = i * 4;
    const end = start + 4;
    return buttons.slice(start, end);
  }

  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          {this.renderCherryBtnRow(0)}
        </div>
        <div class="row justify-content-center">
          {this.renderCherryBtnRow(1)}
        </div>
        <div class="row align-items-center">
        <div class="col"><input type="range" class="form-range" id="volumeSlider"></input></div>
        </div>
        <div class="row align-items-center display-6">
        <div class="col bg-light">
        <button type="button" class="btn btn-primary disabled">
        <FontAwesomeIcon icon={['fas', 'angle-left']} size="3x" />
        </button>
        </div>
        <div class="col bg-light">
        <button type="button" class="btn btn-outline-danger">
        <FontAwesomeIcon icon={['fas', 'volume-mute']} size="2x" />
        </button>
        <button type="button" class="btn btn-outline-success disabled">
        <FontAwesomeIcon icon={['fas', 'volume-up']} size="2x" />
        </button>
        </div>
        <div class="col bg-light">
        <button type="button" class="btn btn-primary">
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
        <div class="container-sm">
          <h1 class="display-6">Stream Cheap</h1>
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
