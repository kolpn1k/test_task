import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

// edit rootReducers to add more reducers
import rootReducers from './modules';

const confugireStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore(
  combineReducers({
    ...rootReducers,
    ...reducers
  }), 
  preloadedState,
  compose(
    applyMiddleware(
      ...middlewares,
      thunk,
      reduxLogger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default confugireStore;