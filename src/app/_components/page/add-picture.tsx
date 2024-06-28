'use client'
import React, { useState } from "react";
import CustomButton from "@/app/_components/atoms/buttons";
import Modal from '@/app/_components/organisims/modal'
import Typography from "@/app/_components/atoms/typography";
import { InputField, TextArea } from "@/app/_components/atoms/input";
import { ComponentTitle } from "@/app/_components/molecules/component-title";

const PageTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [imageTitle, setImageTitle] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  return (
    <div>
      <CustomButton buttonType="secondary" onClick={openModal}>
        Add Picture
      </CustomButton>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Title">
        <div className="rounded-lg border bg-background p-6">
          <ComponentTitle title="Add Picture" subTitle="Share your moment with the community" />
          <div className="mb-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-600 p-12">
            <svg
              className="mb-4 h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <p className="text-sm text-gray-400">
              Drag and drop your picture here
            </p>
          </div>
          <div className="mb-4">
            <InputField
              labelText="Title"
              helperText="Enter the picture title"
              placeholder="Fancy Amazing Picture"
              value={imageTitle}
              onChange={setImageTitle}
            />
          </div>
          <div>
            <TextArea
              labelText="Description"
              helperText="Describe your picture here"
              placeholder="Picture of an amazing view, Blue Sky, Polar Mountains..."
              value={imageDescription}
              onChange={setImageDescription}
            />
          </div>
          <div>
            <CustomButton
              buttonType="secondary"
              onClick={() => console.log("upload")}
            >
              Upload
            </CustomButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PageTemplate;
