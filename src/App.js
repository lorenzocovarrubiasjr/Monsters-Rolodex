import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({ contacts: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { contacts, searchField } = this.state;
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1>Lorenzo's Prayer List</h1>
        <SearchBox 
          placeholder="search contacts"
          handleChange={this.handleChange}

          />
        <CardList contacts={filteredContacts}></CardList>
      </div>
    );
  }
}

export default App;