function Helper({children}: {children?: React.ReactNode}){
    return <p className="text-sm text-light truncate">{children}</p>
}

function Label({ children }: {children?: React.ReactNode}) {
  return (
    <h3 className="truncate text-lg font-semibold text-light">{children}</h3>
  );
}

function Primary({ children }: { children?: React.ReactNode }) {
  return <p className="truncate text-base text-light">{children}</p>;
}

function Large({ children }: { children?: React.ReactNode }) {
  return <p className="truncate text-2xl font-bold">{children}</p>;
}

export function Secondary({ children }: { children?: React.ReactNode; }) {
  return <p className="truncate text-sm text-gray-400">{children}</p>;
}

export default function Typography({ type, children, ...props }: { type: string; children: React.ReactNode; }) {
  switch (type) {
    case "helper":
      return <Helper {...props}>{children}</Helper>;

    case "label":
      return <Label {...props}>{children}</Label>;

    case "primary":
      return <Primary {...props}>{children}</Primary>;

    case "secondary":
      return <Secondary {...props}>{children}</Secondary>;

    case 'large':
      return <Large {...props}>{children}</Large>;

    case "default":
      return <Primary {...props}>{children}</Primary>;
  }
}