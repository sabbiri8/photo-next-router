import Modal from '@/app/components/Modal';
import PhotoDetails from '@/app/components/PhotoDetails';
import React from 'react';

export default function page({ params: { id, lang } }) {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
}
