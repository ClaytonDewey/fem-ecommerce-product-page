import { useState, useEffect, useRef } from 'react';
import { DropdownButton, DropdownContent } from '.';

interface DropdownProps {
  buttonText: React.ReactNode;
  content:
    | React.ReactNode
    | ((args: { closeDropdown: () => void }) => React.ReactNode);
}

const Dropdown = ({ buttonText, content }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState<number | null>(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!open) {
      if (buttonRef.current && contentRef.current) {
        const spaceRemaining =
          window.innerHeight - buttonRef.current.getBoundingClientRect().bottom;
        const contentHeight = contentRef.current.clientHeight;

        const topPosition =
          spaceRemaining > contentHeight
            ? null
            : spaceRemaining - contentHeight;

        setDropdownTop(topPosition);
      }
    }
    setOpen((open) => !open);
  };

  const closeDropdown = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }

      if (event.key === 'Tab' && open && contentRef.current) {
        const focusableElements = contentRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements) as HTMLElement[];

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        } else if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div className='dropdown' ref={dropdownRef}>
      <DropdownButton toggle={toggleDropdown} open={open} ref={buttonRef}>
        {buttonText}
      </DropdownButton>
      <DropdownContent top={dropdownTop} open={open} ref={contentRef}>
        {typeof content === 'function' ? content({ closeDropdown }) : content}
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
