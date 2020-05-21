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
      let index = state.dictionary.findIndex(item => item.vocabulary === content.vocabulary);
      let list;
      if(index > -1) {
        list = [...state.dictionary];
        list[index] = content
      } else {
        list = [...state.dictionary, content];  
      }

      return {
        ...state,
        dictionary: list
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

// state.dictionary.map((item) => {
//   if(item.vocabulary !== content.vocabulary) {
//     return item;
//   }
//   return {
//     ...item,
//     ...content
//   };
// })