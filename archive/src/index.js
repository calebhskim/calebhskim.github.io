import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './components/Root';

const render = () => {
  if (typeof document !== 'undefined') {
    ReactDOM.render(<AppContainer>
      <Root isBuild={false} />
    </AppContainer>, document.getElementById('root'));
  }
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render();
  });
}
