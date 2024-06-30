// components/organisms/Modal.js
import React, { useCallback, useEffect } from "react";
import ModalContent from "@/app/_components/molecules/modal-content";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === "modal-overlay") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75"
    >
      <ModalContent>
        {children}
      </ModalContent>
    </div>
  );
};

export default Modal;
