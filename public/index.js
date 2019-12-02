import ReactRemovableList from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: [
      { value: 'k1', label: 'label111' },
      { value: 'k2', label: 'label222' },
      { value: 'k3', label: 'label333' },
      { value: 'k4', label: 'label444' }
    ]
  };

  onChange1 = (inEvent) => {
    console.log('change event:', inEvent.target.value);
  };

  render() {
    return (
      <div className="app-container">
        <ReactRemovableList
          onChange={this.onChange1}
          value={this.state.items}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
