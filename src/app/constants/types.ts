export type User = {
  name: string;
  email: string;
  image: string;
  id: string;
};


export type ImageData = {
  author: {
    email: string;
    emailVerified: boolean;
    id: string;
    image: string;
    name: string;
  };
  authorId: string;
  caption: string;
  createdAt: Date;
  id: Date;
  imageUrl: string;
  likes: [];
  updatedAt: Date;
};