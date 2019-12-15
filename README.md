# react-removable-list
> A removable list for react.

## installation
```shell
npm install -S @feizheng/react-removable-list
```
## properties
| property  | type | description |
| --------- | ---- | ----------- |
| className | -    | -           |
| items     | -    | -           |
| onChange  | -    | -           |
| templte   | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-removable-list/dist/style.scss";

  // customize your styles:
  $react-removable-list-options: ()
  ```
2. import js
  ```js
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
            items={this.state.items}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-removable-list/
