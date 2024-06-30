"use client";
// import type { ChangeEvent } from "react";
import React, { useState } from "react";
import CustomButton from "@/app/_components/atoms/buttons";
import Modal from "@/app/_components/organisims/modal";
import { InputField, TextArea } from "@/app/_components/atoms/input";
import { ComponentTitle } from "@/app/_components/molecules/component-title";
import { UploadDropzone } from "@/app/utils/uploadthing";
import usePosts from "@/app/lib/hooks/usePosts";
import useModal from "@/app/lib/hooks/useModal";

const PageTemplate = () => {
  const { isModalOpen, closeModal, openModal } = useModal();

  const [imageData, setImageData] = useState({
    imageTitle: '',
    imageDescription: '',
  });
  const {create: createPost } = usePosts();
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
                  title: imageData.imageTitle ,
                  description: imageData.imageDescription,
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
              onChange={(title) => setImageData({ ...imageData, imageTitle: title as string })}
            />
          </div>
          <div>
            <TextArea
              labelText="Description"
              helperText="Describe your picture here"
              placeholder="Picture of an amazing view, Blue Sky, Polar Mountains..."
              value={imageData.imageDescription}
              onChange={(description) => setImageData({ ...imageData, imageDescription: description as string })}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PageTemplate;
