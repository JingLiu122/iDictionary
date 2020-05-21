import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { vocabulary } from './reducers';

const persistedState = localStorage.getItem('dictionary') ? JSON.parse(localStorage.getItem('dictionary')) : 
{
  dictionary: [{vocabulary: "futz", type: "verb", definition: "waste time; idle or busy oneself aimlessly"}]
};

export const store = createStore(vocabulary, persistedState, composeWithDevTools(applyMiddleware()));

