// index.jsx

import { createElement } from 'react';
import { render } from 'react-dom';
import App from './client/core/Home';

// Your application logic goes here
const rootElement = document.getElementById('app');

// Render your main application component
render(<App />, rootElement);
