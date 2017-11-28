import React from 'react';
import { render } from 'react-dom';
import Index from './containers/index';
import registerServiceWorker from './utils/registerServiceWorker';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Index />, rootElement);
}

registerServiceWorker();