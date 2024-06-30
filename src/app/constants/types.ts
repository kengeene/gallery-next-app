export type User = {
  name: string;
  email: string;
  image: string;
  id: string;
};

export type UserSession = {
  user: User;
} | null;

type Author = {
  email?: string | null;
  emailVerified?: Date | null;
  id: string;
  image?: string | null;
  name?: string | null;
};


export type ImageData = {
  author: Author;
  authorId: string;
  title: string;
  description: string;
  createdAt: Date;
  id: string;
  imageUrl: string;
  likes: like[];
  updatedAt: Date;
  likedByUser: boolean;
};


type like = {
  postId: string;
  id: string;
  userId: string;
}

export type ButtonProps = {
  buttonType?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export interface InputFieldProps {
  placeholder: string;
  labelText: string;
  helperText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  value: string;
}