import { Icon } from '../svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-primary'>
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
        <li>
          <a href='/'>
            <Icon name='cart' />
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
