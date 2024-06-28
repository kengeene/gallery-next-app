// components/molecules/ModalContent.js
import React from "react";

const ModalContent = ({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) => {
  return (
    <div className="transform overflow-hidden rounded-lg shadow-xl transition-all sm:w-full sm:max-w-lg">
      {children}
    </div>
  );
};

export default ModalContent;
