import React from 'react';
import { Li, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleRemove }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Li key={id}>
        <p>
          {name} : {number}
        </p>

        <Button type="buutton" onClick={() => handleRemove(id)}>
          Delete
        </Button>
      </Li>
    ))}
  </ul>
);

ContactList.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default ContactList;
