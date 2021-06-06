import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './Provider/StateProvider';
import reducer, { initialState } from './Provider/Reducer';
import './index.css';
import App from './App/App';

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>,
    document.getElementById('root')
);
