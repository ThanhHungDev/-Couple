import 'core-js';

import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.js";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducer';

import './scss/index.scss'

const store = createStore(Reducer);
store.subscribe(() => {
    console.log('có thay đổi trong Redux!!')
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));