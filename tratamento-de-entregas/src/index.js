import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './pages/App';
import store from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

