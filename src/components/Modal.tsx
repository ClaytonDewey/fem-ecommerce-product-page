import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '.';
import { Icon } from '../svg';

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  return (
    <motion.div
      className='modal__overlay'
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <motion.div
        className='modal__body'
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}>
        <div className='lightbox__container'>
          <div className='lightbox__carousel'>
            <Button
              type='button'
              className='btn btn-close-lightbox'
              onClick={onClose}>
              <Icon name='close' />
            </Button>
            <Button type='button' className='btn btn-prev'>
              <Icon name='previous' />
            </Button>
            <div className='lightbox__viewport'>
              <div className='lightbox__slide'>
                <img src='./images/image-product-1.jpg' alt='Product 1' />
              </div>
            </div>
            <Button type='button' className='btn btn-next'>
              <Icon name='next' />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='modal__wrapper'>
      <Button
        type='button'
        className='btn btn-open-modal'
        onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <AnimatePresence>
        {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default ModalWrapper;
