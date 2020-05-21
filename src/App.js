import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

// import { HomePage } from './pages/Home/HomePage';
import HomePage from './pages/Home/HomePage';
import { store } from './redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;



// { vocabulary: "futz", type: "verb", definition: "waste time; idle or busy oneself aimlessly" }

// this.setState({
//   dictionary: this.state.dictionary.map((item, index) => index === foundIndex ? {...item, type: dict.type, definition: dict.definition} : item )
// });

// addItem() {
//   // create a new item
//   const newItem = {
//     id: 1 + Math.random(),
//     value: this.state.newItem.slice()
//   };

//   // copy current list of items
//   const list = [...this.state.list];

//   // add the new item to the list
//   list.push(newItem);

//   // update state with new list, reset the new item input
//   this.setState({
//     list,
//     newItem: ""
//   });
// }

// deleteItem(id) {
//   // copy current list of items
//   const list = [...this.state.list];
//   // filter out the item being deleted
//   const updatedList = list.filter(item => item.id !== id);

//   this.setState({ list: updatedList });
// }


// componentDidMount() {
//   // for all items in state
//   for (let key in this.state) {
//     // if the key exists in localStorage
//     if (localStorage.hasOwnProperty(key)) {
//       // get the key's value from localStorage
//       let value = localStorage.getItem(key);

//       // parse the localStorage string and setState
//       try {
//         value = JSON.parse(value);
//         this.setState({ [key]: value });
//       } catch (e) {
//         // handle empty string
//         this.setState({ [key]: value });
//       }
//     }
//   }
// }