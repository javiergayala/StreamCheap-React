import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container-sm">
        <h1 class="display-6">Stream Cheap</h1>
        <div class="row justify-content-center">
          <div class="col border bg-primary">
          <button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={['fas', 'video']} size="3x" />
          </button>
          <div class="d-block text-white">Zoom</div>
          </div>
          <div class="col border bg-primary">
          <button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={['fas', 'users']} size="3x" />
          </button>
          <div class="d-block text-white">Teams</div>
          </div>
          <div class="col border bg-primary">
          <button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={['fas', 'comment-dots']} size="3x" />
          </button>
          <div class="d-block text-white">iMessage</div>
          </div>
          <div class="col border bg-primary">
          <button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={['fas', 'terminal']} size="3x" />
          </button>
          <div class="d-block text-white">iTerm</div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col border bg-primary">
          <button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={['fab', 'firefox-browser']} size="3x" />
          </button>
          <div class="d-block text-white">Firefox</div>
          </div>
          <div class="col border bg-primary">
          <button type="button" class="btn btn-primary">
          <FontAwesomeIcon icon={['fab', 'safari']} size="3x" />
          </button>
          <div class="d-block text-white">Safari</div>
          </div>
          <div class="col border bg-danger">
          <button type="button" class="btn btn-danger">
          <FontAwesomeIcon icon={['fas', 'lock']} size="3x" />
          </button>
          <div class="d-block text-white">Screensaver</div>
          </div>
          <div class="col border bg-warning">
          <button type="button" class="btn btn-warning">
          <FontAwesomeIcon icon={['fas', 'jedi']} size="3x" />
          </button>
          <div class="d-block text-secondary">Alt</div>
          </div>
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

    </div>
  );
}

function ActivateZoom() {

}

export default App;
