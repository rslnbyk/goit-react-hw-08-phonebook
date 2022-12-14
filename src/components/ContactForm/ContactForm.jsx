import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Form } from './ContactForm.styled';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    for (const cont of contacts) {
      if (cont.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    dispatch(addContact({ name, number }));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ color: '#2a363b' }}>Add new contact</h2>
      <TextField
        type="text"
        name="name"
        label="Name"
        variant="outlined"
        color="error"
        size="small"
        sx={{ marginBottom: '15px', width: '300px' }}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <TextField
        type="tel"
        name="number"
        label="Number"
        variant="outlined"
        color="error"
        size="small"
        sx={{ marginBottom: '15px', width: '300px' }}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />
      <Button
        type="submit"
        startIcon={<AddCircleOutlineOutlinedIcon />}
        variant="outlined"
        color="error"
      >
        Add contact
      </Button>
    </Form>
  );
};
