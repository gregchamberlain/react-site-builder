import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import App from './components/App';

const root = document.getElementById("root");
const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>
, root);
