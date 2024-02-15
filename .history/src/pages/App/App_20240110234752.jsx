import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/PhonebookPage/ContactForm/ContactForm';
import { ContactList } from 'components/PhonebookPage/ContactList/ContactList';
import { Filter } from 'components/PhonebookPage/Filter/Filter';
import { Wrapper, Title, ContactTitle } from './App.styled';
import { Loader } from 'utils/Loader/Loader';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectIsLoading } from 'redux/contacts/selectors';
import { selectContacts } from 'redux/contacts/selectors';

export default function PhoneBookPage() {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Title>Phonebook</Title>
      <ContactForm></ContactForm>
      {contacts.length === 0 ? (
        <Title>There are no contacts</Title>
      ) : (
        <>
          <ContactTitle>Contacts</ContactTitle>
          <Filter />
          <ContactList />
        </>
      )}
    </Wrapper>
  );
}
