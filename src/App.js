import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';

export const dec = state => ({ index: state.index - 1 });
export const inc = state => ({ index: state.index + 1 });
export const toggleXRay = state => ({ xray: !state.xray });

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAsync: false,
    };
  }

  componentDidMount() {
    const { update } = this.props;
    document.body.addEventListener('keydown', e => {
      if (document.activeElement.tagName !== 'BODY') return;
      switch (e.key) {
        case 'ArrowLeft':
          update(dec);
          break;
        case 'ArrowRight':
          update(inc);
          break;
        default:
          break;
      }
    });
  }

  render() {
    return (
      <div className="black-pearl vh-100 sans-serif mw8 center ph3 ph0-l flex flex-column">
        <Navbar
          onLeft={() => console.log('left')}
          onRight={() => console.log('right')}
        />

        <main className="flex-auto flex">
          <Intro />
        </main>
      </div>
    );
  }
}
