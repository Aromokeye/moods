import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
// import Proivder from react-redux and CreateStore from redux
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux' 
import {createLogger} from 'redux-logger'
//import the reducer too
import {searchPeople} from './reducer.js'
//import redux-thunk too
import thunkMiddleWare from 'redux-thunk' 
import './index.css'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const logger=createLogger();
const store=createStore(searchPeople, applyMiddleware(thunkMiddleWare, logger));


ReactDOM.render(<Provider store={store}>
                    <App /> 
                </Provider>,
            document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
    }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
