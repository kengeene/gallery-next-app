import React from "react";

const ModalContent = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="w-1/2 transform overflow-hidden rounded-lg shadow-xl transition-all">
      {children}
    </div>
  );
};

export default ModalContent;
