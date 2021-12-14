import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import Div100vh from 'react-div-100vh';
import { use100vh } from 'react-div-100vh';

const Modal = ({ onClose }) => {
  const height100 = use100vh();
  useEffect(() => {
    if (height100) document.body.style.height = `${height100}px`;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'initial';
    };
  }, [height100]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1200,
      }}
    >
      <div className={styles.mainContainer}>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
