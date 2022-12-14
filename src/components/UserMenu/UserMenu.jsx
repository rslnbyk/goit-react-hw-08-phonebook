import { Button } from '@mui/material';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { MenuDiv, MenuP } from './UserMenu.styled';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <MenuDiv>
      <MenuP>Welcome, {user.email}</MenuP>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        startIcon={<LogoutOutlinedIcon />}
        variant="outlined"
        color="error"
        sx={{ height: '30px' }}
      >
        Logout
      </Button>
    </MenuDiv>
  );
};
