import React from 'react';
import { render } from 'react-dom';
import Index from './pages/index';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Index />, rootElement);
}

registerServiceWorker();