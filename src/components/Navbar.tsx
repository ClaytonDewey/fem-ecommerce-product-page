import { Icon } from '../svg';
import { Button, Dropdown } from '.';

type NavbarProps = {
  isOpen?: boolean;
  toggleClose?: () => void;
};

const Navbar = ({ isOpen, toggleClose }: NavbarProps) => {
  return (
    <nav className='navbar'>
      <ul className={`navbar-primary ${isOpen ? 'open' : ''}`}>
        <li className='navbar-toggle'>
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
      <div className='navbar-secondary'>
        <div className='cart'>
          <Dropdown
            buttonText={
              <>
                <Icon name='cart' />
                {/* <span className='cart-count'>3</span> */}
              </>
            }
            content={
              <>
                <div className='dropdown__cart'>
                  <div className='cart__header'>
                    <h2>Cart</h2>
                  </div>
                  <div className='cart__body'>
                    <p className='cart__empty'>Your cart is empty.</p>
                  </div>
                  {/* <div className='cart__footer'>
                    <Button type='button' className='btn btn-primary'>
                      Checkout
                    </Button>
                  </div> */}
                </div>
              </>
            }
          />
        </div>
        <div>
          <a href='/'>
            <img
              src='./images/image-avatar.png'
              alt='User Avatar'
              className='avatar'
            />
            <div className='sr-only'>User Name</div>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
