import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();

    const form = e.target;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const nameOnTheList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const newContact = {
      name: name,
      phone: phone,
    };

    if (!nameOnTheList) {
      dispatch(addContact(newContact));
      form.reset();
    } else {
      alert(`${name} is in use. Try another name.`);
    }
  };

  return (
    <form onSubmit={handleAddContact}>
      <label htmlFor="name">
        Name
        <input
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="e.g. John Doe"
          required
        />
      </label>
      <label htmlFor="phone">
        Number
        <input
          autoComplete="off"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="e.g. 123-456-789"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;
