import React from "react";

export default function Buttons({buttonType, children, ...props}:{buttonType?: string, children: React.ReactNode, props?: any}) {
   switch (buttonType) {
     case "primary":
       return <PrimaryButton {...props}>{children}</PrimaryButton>;

     case "secondary":
       return <SecondaryButton {...props}>{children}</SecondaryButton>;

     case "accent":
       return <AccentButton {...props}>{children}</AccentButton>;

     default:
       return <PrimaryButton {...props}>{children}</PrimaryButton>;
   }
}

function PrimaryButton({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: any;
}) {
  return (
    <button
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
}: {
  children: React.ReactNode;
  props?: any;
}) {
  return (
    <button
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
}: {
  children: React.ReactNode;
  props?: any;
}) {
  return (
    <button
      className="hover:bg-grey-600 w-full rounded-md bg-accent py-3 text-center font-semibold text-white transition duration-300"
      {...props}
    >
      {children}
    </button>
  );
}
