import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Components/store/reducers/rootReducer';

export default function configureStore(initialState={}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))
  return store
}
