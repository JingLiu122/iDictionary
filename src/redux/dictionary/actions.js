import { ADD_WORD, SEARCH_WORD, DELETE_WORD } from './actionTypes';

// action creators
// vocab => object
export const addWord = (content) => {
  return {
    type: ADD_WORD,
    payload: { content }
  };
}

// word => string
export const searchWord = (word) => {
  return {
    type: SEARCH_WORD,
    payload: word 
  };
}

// word => string
export const deleteWord = (word) => {
  return {
    type: DELETE_WORD,
    payload: word
  };
}