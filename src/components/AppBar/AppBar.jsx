import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { BarHeader } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <BarHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </BarHeader>
  );
};
