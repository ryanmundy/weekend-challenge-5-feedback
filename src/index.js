import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const stepOneReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            console.log(action.payload);
            return action.payload;
            
        default:
            return state;
    }
}

const stepTwoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }
}

const stepThreeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_SUPPORT':
            return action.payload;
        default:
            return state;
    }
}

const stepFourReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        stepOneReducer,
        stepTwoReducer,
        stepThreeReducer,
        stepFourReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
