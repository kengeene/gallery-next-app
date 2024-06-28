'use client'
import React, { useState } from "react";
import CustomButton from "@/app/_components/atoms/buttons";
import Modal from '@/app/_components/organisims/modal'

const PageTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <CustomButton buttonType="secondary" onClick={openModal}>
        Add Picture
      </CustomButton>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Title">
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold">My Store</h1>
    <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
      Add Picture
    </button>
  </div>

  <div className="text-sm text-gray-400 mb-4">My recent uploads</div>

  <div className="border border-purple-500 rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-2">Add Picture</h2>
    <p className="text-gray-400 text-sm mb-6">Share your moment with the community</p>

    <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 mb-6 flex flex-col items-center justify-center">
      <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
      <p className="text-gray-400 text-sm">Drag and drop your picture here</p>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
      <input type="text" id="title" className="w-full bg-gray-800 rounded px-3 py-2 text-white" placeholder="Enter the picture title" value="Fancy Amazing Picture"/>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
      <textarea id="description" className="w-full bg-gray-800 rounded px-3 py-2 text-white" placeholder="Describe your picture here">Picture of an amazing view, Blue Sky, Polar Mountains...</textarea>
    </div>
  </div>
</div>
      </Modal>
    </div>
  );
};

export default PageTemplate;
