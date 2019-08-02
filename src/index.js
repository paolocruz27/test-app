import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
