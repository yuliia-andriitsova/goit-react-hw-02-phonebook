import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

export class ContactList extends Component {
  render() {
    const { filteredContacts, onDeleteContact } = this.props;
    return (
      <>
        <ul>
          {filteredContacts.map(contact => (
            <ContactItem
              name={contact.name}
              number={contact.number}
              key={contact.id}
              DeleteContact={onDeleteContact}
              id={contact.id}
            />
          ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      key: PropTypes.string,
      id: PropTypes.string,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
