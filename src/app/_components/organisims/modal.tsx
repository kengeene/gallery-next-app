// components/organisms/Modal.js
import React from "react";
import ModalContent from "@/app/_components/molecules/modal-content";

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <ModalContent title={title} onClose={onClose}>
        {children}
      </ModalContent>
    </div>
  );
};

export default Modal;
