import { useSelector, useDispatch } from 'react-redux';
import {
  Flex,
  Box,
  Text,
  IconButton,
  CloseButton,
  SimpleGrid,
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
              <Box
                key={id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                my="2"
              >
                <Flex alignItems="center" justifyContent="space-between" p="2">
                  <Text>{name}</Text>
                  <IconButton
                    icon={<CloseButton />}
                    onClick={() => handleDeleteContact(id)}
                  />
                </Flex>
                <Box p="2">
                  <Text>{number}</Text>
                </Box>
              </Box>
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
