import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './reducer.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const storeObj = process.env.NODE_ENV === 'production' ?  
    createStore(store) : 
    createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={storeObj}>
        <App />
    </Provider>, 
    document.getElementById('root')
    );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
