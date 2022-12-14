import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactsListItem, ContactsListUl } from './ContactsList.styled';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Button } from '@mui/material';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactsListUl>
      {filteredContacts.map(cont => (
        <ContactsListItem key={cont.id}>
          {cont.name}: {cont.number}
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(cont.id));
            }}
            startIcon={<DeleteForeverOutlinedIcon />}
            variant="outlined"
            color="error"
            sx={{ marginLeft: '10px', height: '30px', width: '95px' }}
          >
            Delete
          </Button>
        </ContactsListItem>
      ))}
    </ContactsListUl>
  );
};
