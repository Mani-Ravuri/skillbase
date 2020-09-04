import React from 'react';
import { hydrate, render } from "react-dom";
import store from "./store";
import './index.css';
import "./GlobalStyle.scss";
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");


const APP = (
    <Provider store={store}>
        <App />
    </Provider>
)

if (rootElement.hasChildNodes()) {
    hydrate(APP, rootElement);
} else {
    render(APP , rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
