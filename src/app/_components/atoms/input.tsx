export default function Input({
  placeholder,
  onChange,
  value,
}: {
  placeholder: string
  onChange: (e: any) => void;
  value: any;
}) {
  return (
    <>
      <input
        type="text"
        className="w-full rounded-md border border-accent bg-background p-2 text-light"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
}
