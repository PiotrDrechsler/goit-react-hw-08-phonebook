import { useSelector, useDispatch } from 'react-redux';
import { Flex, Box, Text, IconButton, CloseButton } from '@chakra-ui/react';
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

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt="5"
        >
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ id, name, phone }) => (
              <Box
                key={id}
                w={{ base: '80vw', sm: '50vw', md: '30vw', lg: '20vw' }}
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
                  <Text>{phone}</Text>
                </Box>
              </Box>
            ))
          ) : (
            <Text>No contacts found</Text>
          )}
        </Flex>
      )}
    </>
  );
};

export default ContactList;
