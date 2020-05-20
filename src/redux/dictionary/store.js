import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { vocabulary } from './reducers';

export const store = createStore(vocabulary, composeWithDevTools(applyMiddleware()));

