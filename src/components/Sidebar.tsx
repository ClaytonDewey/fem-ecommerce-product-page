import { Icon } from '../svg';
import data from '../links';
import Button from './Button';

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const Sidebar = ({ onClose, isOpen }: SidebarProps) => {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className='sidebar__body' onClick={(e) => e.stopPropagation()}>
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
      </div>
    </nav>
  );
};
export default Sidebar;
