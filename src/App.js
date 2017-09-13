import React, { Component } from 'react';
import { asyncComponent } from './asyncComponent';
import 'App.css';

console.log('‹HELLO!›');

const AsyncTriangle = asyncComponent(() => import('./Triangle'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAsync: false,
    };
  }

  render() {
    return (
      <div>
        <div className="sans-serif measure mt5 pa4 center hero mb5">
          <div>
            <h2>Welcome to React</h2>
          </div>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <button
              className="pa3 f6 ttu tracked bg-light-green bn pointer fw6 grow"
              onClick={() => {
                this.setState(() => ({ showAsync: true }));
              }}
            >
              Load Async Component
            </button>
          </p>
        </div>
        {this.state.showAsync ? <AsyncTriangle /> : null}
      </div>
    );
  }
}

export default App;
