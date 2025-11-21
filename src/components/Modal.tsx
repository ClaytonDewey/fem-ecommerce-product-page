import { motion } from 'framer-motion';
import { Button } from '.';
import { Icon } from '../svg';
import React from 'react';

type ModalProps = {
  onClose: () => void;
  handleNext?: () => void;
  handlePrevious?: () => void;
  imgSrc?: string;
  thumbnailContainer?: React.ReactNode;
};

const Modal = ({
  onClose,
  imgSrc,
  thumbnailContainer,
  handleNext,
  handlePrevious,
}: ModalProps) => {
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
          <div className='modal__viewport'>
            <Button
              type='button'
              className='btn btn-prev'
              onClick={handlePrevious}>
              <Icon name='previous' />
            </Button>
            <div className='lightbox__slide'>
              <img src={imgSrc} alt='Product 1' />
            </div>
            <Button type='button' className='btn btn-next' onClick={handleNext}>
              <Icon name='next' />
            </Button>
          </div>
          {thumbnailContainer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
