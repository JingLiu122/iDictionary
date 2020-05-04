import React, { Component } from 'react';
import './App.css';

import InputField from './components/InputField';
import DisplayField from './components/DisplayField';
import {SearchField} from './components/SearchField';
import ResultField from './components/ResultField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: [],
      search: ''
    }
  }

  // retrieve values from the localStorage to the local state per user session
  componentDidMount() {
    const value = JSON.parse(localStorage.getItem('dictionary'));
    if(value) {
      this.setState({
        dictionary: value
      });
    }
    // add event listener to save state to localStorage when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.insertToLocalStorage.bind(this)
    );
  }


  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.insertToLocalStorage.bind(this)
    );

    this.insertToLocalStorage();
  }

  handleInputItem = (dict) => {
    let index = this.state.dictionary.findIndex(item => item.vocabulary === dict.vocabulary);
    const word = {vocabulary: dict.vocabulary, type: dict.type, definition: dict.definition};
    if(index > -1) {
      const list = [...this.state.dictionary];
      list[index] = word
      this.setState({
        dictionary: list
      });
    } else {
      this.setState({
        dictionary: [...this.state.dictionary, word]
      });
    }
  }

  handleDeleteItem = (value) => {
    const filteredDictionary = this.state.dictionary.filter((item) => item.vocabulary !== value);

    this.setState({
      dictionary: filteredDictionary
    });
  }

  handleSearchItem = (word) => {
    this.setState({
      search: word
    });
  }

  insertToLocalStorage = () => {
    // obj.toString() => [object Object]
    localStorage.setItem("dictionary", JSON.stringify(this.state.dictionary));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dictionary App</h1>
          <p>Author: Jing</p>

          <InputField onInputItem={this.handleInputItem} />
          <DisplayField dictionary={this.state.dictionary} onDeleteItem={this.handleDeleteItem}/>

          <SearchField onSearchItem={this.handleSearchItem} />
          <ResultField dictionary={this.state.dictionary} search={this.state.search} />
        </header>
      </div>
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