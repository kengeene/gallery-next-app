import React from "react";

export default function Buttons({buttonType, children, onClick, ...props}:{buttonType?: string, children: React.ReactNode, props?: any, onClick?: () => void}) {
   switch (buttonType) {
     case "primary":
       return (
         <PrimaryButton {...props} onClick={onClick}>
           {children}
         </PrimaryButton>
       );

     case "secondary":
       return (
         <SecondaryButton {...props} onClick={onClick}>
           {children}
         </SecondaryButton>
       );

     case "accent":
       return (
         <AccentButton {...props} onClick={onClick}>
           {children}
         </AccentButton>
       );

     default:
       return (
         <PrimaryButton {...props} onClick={onClick}>
           {children}
         </PrimaryButton>
       );
   }
}

function PrimaryButton({
  children,
  props,
  onClick
}: {
  children: React.ReactNode;
  props?: any;
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-md bg-transparent px-4 py-3 text-center font-semibold text-white transition duration-300 hover:bg-gray-700"
      {...props}
    >
      {children}
    </button>
  );
}


function SecondaryButton({
  children,
  props,
  onClick,
}: {
  children: React.ReactNode;
  props?: any;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-md bg-secondary px-4 py-3 text-center font-semibold text-white"
      {...props}
    >
      {children}
    </button>
  );
}

function AccentButton({
  children,
  props,
  onClick,
}: {
  children: React.ReactNode;
  props?: any;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="hover:bg-grey-600 w-full rounded-md bg-accent py-3 text-center font-semibold text-white transition duration-300"
      {...props}
    >
      {children}
    </button>
  );
}
