export default function Buttons({buttonType, ...props}:{buttonType?: string}) {
   switch (buttonType) {
     case "secondary":
       return <SecondaryButton {...props} />;

     case "accent":
       return <AccentButton {...props} />;

    default:
       return <SecondaryButton {...props} />;
   }
}

function SecondaryButton(props) {
  return (
    <button
      className="w-full rounded-full bg-secondary px-4 py-2 text-light"
      {...props}
    >
      Button
    </button>
  );
}

function AccentButton(props) {
  return (
    <button
      className="w-full rounded-full bg-accent px-4 py-2 text-light"
      {...props}
    >
      Button
    </button>
  );
}
