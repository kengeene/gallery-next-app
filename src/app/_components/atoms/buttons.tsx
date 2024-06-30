import React from "react";
import Loading from "./loading";
import type { ButtonProps } from "@/app/constants/types";

const Button: React.FC<ButtonProps> = ({
  buttonType = "primary",
  children,
  isLoading = false,
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

const baseButtonStyles =
  "w-full rounded-md px-4 py-3 text-center font-semibold text-white flex flex-row justify-around align-center";

const PrimaryButton = ({
  children,
  onClick,
  isLoading = false,
  ...props
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={baseButtonStyles + "text-white transition duration-300 hover:bg-gray-700"}
    {...props}
    disabled={isLoading}
  >
    {isLoading ?? <Loading variant={"secondary"} />}
    {children}
  </button>
);

const SecondaryButton = ({
  children,
  onClick,
  isLoading = false,
  ...props
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={baseButtonStyles + " bg-secondary text-white"}
    {...props}
    disabled={isLoading}
  >
    {isLoading ?? <Loading variant={"accent"} />}
    {children}
  </button>
);

const AccentButton = ({
  children,
  onClick,
  isLoading = false,
  ...props
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={
      baseButtonStyles +
      "hover:bg-grey-600 bg-accent text-white transition duration-300"
    }
    {...props}
    disabled={isLoading}
  >
    {isLoading ?? <Loading variant={"accent"} />}
    {children}
  </button>
);

export default Button;