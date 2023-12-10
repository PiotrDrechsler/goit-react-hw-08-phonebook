import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();

    const form = e.target;
    const name = e.target.name.value;
    const number = e.target.number.value;
    const nameOnTheList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const newContact = {
      name: name,
      number: number,
    };

    if (!nameOnTheList) {
      dispatch(addContact(newContact));
      form.reset();
    } else {
      alert(`${name} is in use. Try another name.`);
    }
  };

  return (
    <Box as="form" onSubmit={handleAddContact} my="10">
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          type="text"
          name="name"
          maxlength="30"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="e.g. John Doe"
          required
          mb="4"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="number">Number</FormLabel>
        <Input
          type="tel"
          name="number"
          maxlength="30"
          pattern="(-)?\d{1,}|(-)?\d{1,}(\.)\d{1,}|(-)?\d{1,}(\s)(-)?\d{1,}|(-)?\d{1,}(\s)(-)?\d{1,}(\s)(-)?\d{1,}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="e.g. 123-456-789"
          required
          mb="4"
        />
        <Button type="submit">Add contact</Button>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
