import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import notesApp from '../reducers';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(notesApp /* preloadedState, */, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */

export default store;
