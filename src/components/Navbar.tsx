import { Icon } from '../svg';
import Button from './Button';

type NavbarProps = {
  isOpen?: boolean;
  toggleClose?: () => void;
};

const Navbar = ({ isOpen, toggleClose }: NavbarProps) => {
  return (
    <nav className='navbar'>
      <ul className={`navbar-primary ${isOpen ? 'open' : ''}`}>
        <li>
          <Button
            type='button'
            className='btn btn-close'
            aria-label='Close Menu'
            onClick={toggleClose}>
            <Icon name='close' />
          </Button>
        </li>
        <li>
          <a href='/'>Collections</a>
        </li>
        <li>
          <a href='/'>Men</a>
        </li>
        <li>
          <a href='/'>Women</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/'>Contact</a>
        </li>
      </ul>
      <ul className='navbar-secondary'>
        <li className='cart'>
          <a href='/'>
            <Icon name='cart' />
            <span className='cart-count'>3</span>
          </a>
        </li>
        <li>
          <a href='/'>
            <img
              src='./images/image-avatar.png'
              alt='User Avatar'
              className='avatar'
            />
            <div className='sr-only'>User Name</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
