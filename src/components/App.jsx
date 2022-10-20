import { nanoid } from 'nanoid';
import { Component } from 'react';
import { PhoneBook } from './PhoneBook';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onChangeName = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: nanoid() },
        ],
      };
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
          fontSize: 25,
          color: '#010101',
          gap: 10,
        }}
      >
        <PhoneBook
          handleAddContact={this.handleSubmit}
          onChangeName={this.onChangeName}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
