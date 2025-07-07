'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, className = '', onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const dialog = modalRef.current;
    if (dialog && !dialog.open) {
      try {
        dialog.showModal();
      } catch (e) {
        console.warn('Modal already open or failed to show:', e);
      }
    }

    // Optional cleanup: Close modal when component unmounts
    return () => {
      if (dialog?.open) {
        dialog.close();
      }
    };
  }, []);

  function handleClose(event) {
    if (onClose) {
      onClose(event);
    }
  }

  const modalRoot = document.getElementById('modal-root-content');
  if (!modalRoot) return null;

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={handleClose}
      onCancel={handleClose}
      className=" shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {children}
    </dialog>,
    modalRoot,
  );
}
