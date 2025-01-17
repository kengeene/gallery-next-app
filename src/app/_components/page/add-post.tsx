"use client";
import React, { useState } from "react";
import CustomButton from "@/app/_components/atoms/buttons";
import Modal from "@/app/_components/organisims/modal";
import { InputField, TextArea } from "@/app/_components/atoms/input";
import { ComponentTitle } from "@/app/_components/molecules/component-title";
import { UploadDropzone } from "@/app/utils/uploadthing";
import usePosts from "@/app/lib/hooks/usePosts";
import useModal from "@/app/lib/hooks/useModal";
import { useRouter } from "next/navigation";
import type { UserSession } from "@/app/constants/types";

/**
 * AddPost component is a button that opens a modal for adding a post.
 * @returns {JSX.Element} The rendered component with the button and modal.
 */
const AddPost = ({session}: {session: UserSession}) => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const { create: createPost } = usePosts();
  const router = useRouter();

  const [postData, setPostData] = useState({
    postTitle: "",
    postDescription: "",
  });

  const handleClick =()=> {
    session ? openModal() : router.push("/auth/signin");
  }


  return (
    <div>
      <CustomButton buttonType="secondary" onClick={handleClick}>
        Add Picture
      </CustomButton>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Title">
        <div className="rounded-lg border bg-background p-6">
          <ComponentTitle
            title="Add Post"
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
                    title: postData.postTitle,
                    description: postData.postDescription,
                  });
                });
                closeModal();
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
              value={postData.postTitle}
              onChange={(title) =>
                setPostData({ ...postData, postTitle: title as string })
              }
            />
          </div>
          <div>
            <TextArea
              labelText="Description"
              helperText="Describe your picture here"
              placeholder="Picture of an amazing view, Blue Sky, Polar Mountains..."
              value={postData.postDescription}
              onChange={(description) =>
                setPostData({
                  ...postData,
                  postDescription: description as string,
                })
              }
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddPost;
