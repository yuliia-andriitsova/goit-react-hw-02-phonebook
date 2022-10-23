import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactItem extends Component {
  render() {
    const { id, name, number, DeleteContact } = this.props;
    return (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => DeleteContact(id)}>
          Delete
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  DeleteContact: PropTypes.func,
};
