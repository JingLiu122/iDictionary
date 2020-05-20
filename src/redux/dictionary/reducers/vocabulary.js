import { ADD_WORD, DELETE_WORD, SEARCH_WORD } from '../actionTypes';

const initialState = {
  dictionary: [],
  search: ''
}

// reducer
export const vocabulary = (state = initialState, action) => {
  switch(action.type) {
    case ADD_WORD: {
      const { content } = action.payload;
      return {
        ...state,
        dictionary: [...state.dictionary, content]
      };
    }
    case DELETE_WORD: {
      const { word } = action.payload;
      return {
        ...state,
        dictionary: state.dictionary.filter(item => item.vocabulary !== word)
      }
    }
    case SEARCH_WORD: {
      const { word } = action.payload;
      return {
        ...state,
        search: word
      }
    }
    default: {
      return state;
    }
  }
}