export type User = {
  name: string;
  email: string;
  image: string;
  id: string;
};

type Author = {
    email: string;
    emailVerified: boolean;
    id: string;
    image: string;
    name: string;
  }


export type ImageData = {
  author: Author;
  authorId: string;
  title: string;
  description: string;
  createdAt: Date;
  id: Date;
  imageUrl: string;
  likes: [];
  updatedAt: Date;
  likedByUser: boolean;
};

export type ButtonProps = {
  buttonType?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};