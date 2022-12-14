import { Button, TextField } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h2 style={{ color: '#2a363b' }}>Log In</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
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
          startIcon={<LoginOutlinedIcon />}
          variant="outlined"
          color="error"
        >
          Log In
        </Button>
      </Form>
    </>
  );
};
