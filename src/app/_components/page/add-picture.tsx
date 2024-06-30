"use client";
import React, { useState } from "react";
import CustomButton from "@/app/_components/atoms/buttons";
import Modal from "@/app/_components/organisims/modal";
import { InputField, TextArea } from "@/app/_components/atoms/input";
import { ComponentTitle } from "@/app/_components/molecules/component-title";
import { UploadDropzone } from "@/app/utils/uploadthing";
import { api } from "@/app/utils/api";

const PageTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [imageData, setImageData] = useState({
    imageTitle: '',
    imageDescription: '',
  });

  const createPost = api.post.create.useMutation();

  return (
    <div>
      <CustomButton buttonType="secondary" onClick={openModal}>
        Add Picture
      </CustomButton>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Title">
        <div className="rounded-lg border bg-background p-6">
          <ComponentTitle
            title="Add Picture"
            subTitle="Share your moment with the community"
          />
          <div className="mb-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-600 p-12">
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                res.forEach((file) => {
                  createPost.mutate({
                  imageUrl: file.url,
                  caption: "test",
                });
                });
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
          <div className="mb-4">
            <InputField
              labelText="Title"
              helperText="Enter the picture title"
              placeholder="Fancy Amazing Picture"
              value={imageData.imageTitle}
              onChange={(title) => setImageData({ ...imageData, imageTitle: title })}
            />
          </div>
          <div>
            <TextArea
              labelText="Description"
              helperText="Describe your picture here"
              placeholder="Picture of an amazing view, Blue Sky, Polar Mountains..."
              value={imageData.imageDescription}
              onChange={(description) => setImageData({ ...imageData, imageDescription: description })}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PageTemplate;
