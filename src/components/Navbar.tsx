import { Icon } from '../svg';
import { Button, Dropdown } from '.';

import { useCartStore } from '../store/useCartStore';

type NavbarProps = {
  isOpen?: boolean;
  toggleClose?: () => void;
};

const Navbar = ({ isOpen, toggleClose }: NavbarProps) => {
  const { items, removeItem, getTotalItemCount } = useCartStore();

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
                {items.length > 0 && (
                  <span className='cart-count'>{getTotalItemCount()}</span>
                )}
              </>
            }
            content={
              <>
                <div className='dropdown__cart'>
                  <div className='cart__header'>
                    <h2>Cart</h2>
                  </div>
                  <div className='cart__body'>
                    {items.length === 0 ? (
                      <p className='cart__empty'>Your cart is empty.</p>
                    ) : (
                      items.map((item) => (
                        <div className='cart__item' key={item.id}>
                          <img
                            src={`./images/image-product-1-thumbnail.jpg`}
                            alt={item.name}
                            className='cart__item-image'
                          />
                          <div className='cart__item-details'>
                            <p className='cart__item-name'>{item.name}</p>
                            <p className='cart__item-price'>
                              ${item.price.toFixed(2)} x {item.quantity}{' '}
                              <span className='cart__item-total'>
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </p>
                          </div>
                          <Button
                            type='button'
                            className='btn btn-delete'
                            aria-label={`Remove ${item.name} from cart`}
                            onClick={() => removeItem(item.id)}>
                            <Icon name='delete' />
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                  {items.length > 0 && (
                    <div className='cart__footer'>
                      <Button type='button' className='btn btn-primary'>
                        Checkout
                      </Button>
                    </div>
                  )}
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
