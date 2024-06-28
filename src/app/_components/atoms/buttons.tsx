import React from "react";

type ButtonProps = {
  buttonType?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  buttonType = "primary",
  children,
  onClick,
  ...props
}) => {
  switch (buttonType) {
    case "secondary":
      return (
        <SecondaryButton onClick={onClick} {...props}>
          {children}
        </SecondaryButton>
      );
    case "accent":
      return (
        <AccentButton onClick={onClick} {...props}>
          {children}
        </AccentButton>
      );
    case "primary":
    default:
      return (
        <PrimaryButton onClick={onClick} {...props}>
          {children}
        </PrimaryButton>
      );
  }
};

const PrimaryButton: React.FC<Omit<ButtonProps, "buttonType">> = ({
  children,
  onClick,
  ...props
}) => (
  <button
    onClick={onClick}
    className="w-full rounded-md bg-transparent px-4 py-3 text-center font-semibold text-white transition duration-300 hover:bg-gray-700"
    {...props}
  >
    {children}
  </button>
);

const SecondaryButton: React.FC<Omit<ButtonProps, "buttonType">> = ({
  children,
  onClick,
  ...props
}) => (
  <button
    onClick={onClick}
    className="w-full rounded-md bg-secondary px-4 py-3 text-center font-semibold text-white"
    {...props}
  >
    {children}
  </button>
);

const AccentButton: React.FC<Omit<ButtonProps, "buttonType">> = ({
  children,
  onClick,
  ...props
}) => (
  <button
    onClick={onClick}
    className="hover:bg-grey-600 w-full rounded-md bg-accent py-3 text-center font-semibold text-white transition duration-300"
    {...props}
  >
    {children}
  </button>
);

export default Button;
