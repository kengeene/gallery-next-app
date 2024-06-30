import React from "react";
import Loading from "./loading";

type ButtonProps = {
  buttonType?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
  isLoading?: boolean
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  buttonType = "primary",
  children,
  isLoading = true,
  onClick,
  ...props
}) => {
  switch (buttonType) {
    case "secondary":
      return (
        <SecondaryButton onClick={onClick} isLoading={isLoading} {...props}>
          {children}
        </SecondaryButton>
      );
    case "accent":
      return (
        <AccentButton onClick={onClick} isLoading={isLoading} {...props}>
          {children}
        </AccentButton>
      );
    case "primary":
    default:
      return (
        <PrimaryButton onClick={onClick} isLoading={isLoading} {...props}>
          {children}
        </PrimaryButton>
      );
  }
};

const PrimaryButton: React.FC<Omit<ButtonProps, "buttonType">> = ({
  children,
  onClick,
  isLoading = false,
  ...props
}) => (
  <button
    onClick={onClick}
    className="w-full rounded-md bg-transparent px-4 py-3 text-center font-semibold text-white transition duration-300 hover:bg-gray-700"
    {...props}
    disabled={isLoading}
  >
     {isLoading || <Loading variant={'secondary'} />} {children}
  </button>
);

const SecondaryButton: React.FC<Omit<ButtonProps, "buttonType">> = ({
  children,
  onClick,
  isLoading = false,
  ...props
}) => (
  <button
    onClick={onClick}
    className="w-full rounded-md bg-secondary px-4 py-3 text-center font-semibold text-white"
    {...props}
    disabled={isLoading}
  >
     {isLoading || <Loading variant={'primary'}  />} {children}
  </button>
);

const AccentButton: React.FC<Omit<ButtonProps, "buttonType">> = ({
  children,
  onClick,
  isLoading = false,
  ...props
}) => (
  <button
    onClick={onClick}
    className="hover:bg-grey-600 w-full rounded-md bg-accent py-3 text-center font-semibold text-white transition duration-300"
    {...props}
    disabled={isLoading}
  >
     {isLoading || <Loading variant={'secondary'} />} {children}
  </button>
);

export default Button;
