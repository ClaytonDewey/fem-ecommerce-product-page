import { Navbar } from '.';
import { Icon } from '../svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <span className='sr-only'>Sneakers</span>
        <Icon name='logo' />
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
