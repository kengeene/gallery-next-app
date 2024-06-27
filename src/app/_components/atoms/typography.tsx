function Helper({children}: {children?: React.ReactNode}){
    return <p className="text-sm text-light">{children}</p>
}

function Label({ children }: {children?: React.ReactNode}) {
  return <h3 className="text-lg font-semibold text-light">{children}</h3>;
}

function Primary({ children }: { children?: React.ReactNode }) {
  return <p className="text-base text-light">{children}</p>;
}

export function Secondary({ children }: { children?: React.ReactNode; }) {
  return <p className="text-sm text-gray-400">{children}</p>;
}

export default function Typography({ type, children, ...props }: { type: string; children: React.ReactNode }) {
  switch (type) {
    case "helper":
      return <Helper {...props}>{children}</Helper>;

    case "label":
      return <Label {...props}>{children}</Label>;

    case "primary":
      return <Primary {...props}>{children}</Primary>;

    case "secondary":
      return <Secondary {...props}>{children}</Secondary>;

    case "default":
      return <Primary {...props}>{children}</Primary>;
  }
}