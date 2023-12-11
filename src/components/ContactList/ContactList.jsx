import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  IconButton,
  CloseButton,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
} from '@chakra-ui/react';
import {
  selectStatusFilter,
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <SimpleGrid columns={5} spacing={10} overflow="hidden">
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ id, name, number }) => (
              <Card key={id}>
                <CardHeader>
                  <IconButton
                    icon={<CloseButton />}
                    onClick={() => handleDeleteContact(id)}
                  />
                </CardHeader>
                <CardBody>
                  <Text>{name}</Text>
                  <Text>{number}</Text>
                </CardBody>
              </Card>
            ))
          ) : (
            <Text>No contacts found</Text>
          )}
        </SimpleGrid>
      )}
    </>
  );
};

export default ContactList;
