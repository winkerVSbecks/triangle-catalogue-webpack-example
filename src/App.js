import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { dec, inc, handleKeyDown } from './handlers';
import triangles from './triangles';

export class App extends Component {
  state = {
    index: 4,
  };

  componentDidMount() {
    this.keydownHandler = document.body.addEventListener('keydown', e =>
      this.setState(handleKeyDown(e)),
    );
  }

  render() {
    const { index } = this.state;
    const Content = index === -1 ? Intro : triangles[index];

    return (
      <div className="black-pearl vh-100 sans-serif mw8 center ph3 ph0-l flex flex-column">
        <Navbar
          onLeft={() => this.setState(dec)}
          onRight={() => this.setState(inc)}
        />

        <main className="flex-auto flex items-center">
          <Content />
        </main>
      </div>
    );
  }
}
