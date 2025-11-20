import { motion } from 'framer-motion';
import { Button } from '.';
import { Icon } from '../svg';

type ModalProps = {
  onClose: () => void;
  imgSrc?: string;
};

const Modal = ({ onClose, imgSrc }: ModalProps) => {
  // https://www.youtube.com/watch?v=jizR55PCbvI
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
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
        <div className='modal__content'>
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
              <img src={imgSrc} alt='Product 1' />
            </div>
          </div>
          <Button type='button' className='btn btn-next'>
            <Icon name='next' />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
