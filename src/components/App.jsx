import { Component } from 'react';
import { PhoneBook } from './PhoneBook';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import PropTypes, { arrayOf } from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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

  onFilterName = event => {
    this.setState({ filter: event.target.value });
  };

  onDeleteContact = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
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
        }}
      >
        <PhoneBook
          onFilterName={this.onFilterName}
          filter={this.state.filter}
          handleAddContact={this.handleAddContact}
        />
        <h2> Contacts</h2>
        <Filter
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

App.propTypes = {
  contacts: arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
