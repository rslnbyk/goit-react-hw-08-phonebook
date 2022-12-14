import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h2 style={{ color: '#2a363b' }}>Register</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="text"
          name="name"
          label="Username"
          variant="outlined"
          color="error"
          size="small"
          sx={{ marginBottom: '15px', width: '300px' }}
          required
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          color="error"
          size="small"
          sx={{ marginBottom: '15px', width: '300px' }}
          required
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          color="error"
          size="small"
          sx={{ marginBottom: '15px', width: '300px' }}
          required
        />
        <br />
        <Button
          type="submit"
          startIcon={<VpnKeyOutlinedIcon />}
          variant="outlined"
          color="error"
        >
          Register
        </Button>
      </Form>
    </>
  );
};
