export function HelperText({children}){
    return <p className="text-sm text-light">{children}</p>
}

export function Label({ children }) {
  return <h3 className="text-lg font-semibold text-light">{children}</h3>;
}

export function TypographyLight({children}) {
  return <p className="text-base text-light">{children}</p>
}

export function NameSecondary({ children }) {
  return <p className="text-sm text-gray-400">{children}</p>;
}