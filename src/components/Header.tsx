import { useState } from 'react';
import { Button, Navbar } from '.';
import { Icon } from '../svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className='header'>
      <Button
        type='button'
        className='btn btn-toggle'
        aria-label='Toggle Menu'
        onClick={toggleMenu}>
        <Icon name='menu' />
      </Button>
      <div className='header__logo'>
        <span className='sr-only'>Sneakers</span>
        <Icon name='logo' />
      </div>
      <Navbar isOpen={isOpen} toggleClose={toggleClose} />
    </header>
  );
};
export default Header;
