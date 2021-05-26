import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ClientDefaults from "./ClientDefaults.json";

class VolumeButton extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
      this.handleClick = this.handleClick.bind(this);
      this.reqUri = [
        window.location.protocol,
        '//',
        window.location.hostname,
        ':',
        ClientDefaults.backendPort,
        ClientDefaults.backendUri,
        this.props.btn.triggerId
      ].join('');
    }

    handleClick() {
      axios.get(this.reqUri);
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.input.current.value);
      event.preventDefault();
    }

    render (props) {
      return (
        <button type="button" className={'btn btn-' + this.props.btn.buttonType} onClick={this.handleClick}>
            <FontAwesomeIcon icon={[this.props.btn.iconCat, this.props.btn.iconName]} size="2x" />
        </button>

      );
    }
  }

  export default VolumeButton;
