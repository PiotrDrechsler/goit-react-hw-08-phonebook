import { useSelector, useDispatch } from 'react-redux';

import {
  selectStatusFilter,
  selectContacts,
  selectIsLoading,
} from 'redux/selectors';

import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const filteredContacts = contacts
    .filter(contact => {
      const nameMatch = contact.name
        ? contact.name.toLowerCase().includes(filter.toLowerCase())
        : false;
      const phoneMatch = contact.phone
        ? contact.phone.toLowerCase().includes(filter.toLowerCase())
        : false;
      return nameMatch || phoneMatch;
    })
    .sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });

  const handleDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return isLoading ? (
    <p>List is Loading! Please wait.</p>
  ) : filteredContacts.length > 0 ? (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              {name}: {phone}
              <button type="submit" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <p>No contacts.</p>
  );
};

export default ContactList;
