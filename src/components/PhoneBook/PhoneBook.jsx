import { Component } from 'react';
import PropTypes from 'prop-types';

export class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  onChangeName = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label> Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label> Number</label>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onChangeName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <input
          type="text"
          name="filter"
          onChange={this.props.onFilterName}
          // value={this.state.name}
          value={this.props.filter}
        />
      </>
    );
  }
}

PhoneBook.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
