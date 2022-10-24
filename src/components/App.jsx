import { Component } from 'react';
import { PhoneBook } from './PhoneBook';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  handleAddContact = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts `);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  onChangeName = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFilterName = event => {
    this.setState({ filter: event.target.value });
  };

  onDeleteContact = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flexStart',
          alignItems: 'center',
          fontSize: 15,
          color: '#010101',
          gap: 10,
          border: '2 px solid red',
          padding: '50px',
        }}
      >
        <PhoneBook
          onFilterName={this.onFilterName}
          filter={this.state.filter}
          handleAddContact={this.handleAddContact}
        />
        <h2> Contacts</h2>
        <Filter filter={this.state.filter} onFilterName={this.onFilterName} />

        <ContactList
          filteredContacts={this.filteredContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
