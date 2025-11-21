import { motion } from 'framer-motion';
import { Icon } from '../svg';
import data from '../links';
import Button from './Button';

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const Sidebar = ({ onClose, isOpen }: SidebarProps) => {
  return (
    <motion.nav
      className={`sidebar ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <motion.div
        className='sidebar__body'
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
        <Button
          type='button'
          className='btn btn-close'
          aria-label='Close Menu'
          onClick={onClose}>
          <Icon name='close' />
        </Button>
        <ul className='sidebar__primary'>
          {data.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};
export default Sidebar;
