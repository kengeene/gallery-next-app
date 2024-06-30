import type {InputFieldProps} from "@/app/constants/types";
export const InputField = ({
  placeholder,
  onChange,
  value,
  labelText,
  helperText,
}: InputFieldProps) => {
  return (
    <>
      <label className="text-sm font-bold text-white">{labelText}</label>
      <input
        type="text"
        className="w-full rounded-md border border-accent bg-background p-2 text-light"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
      <span className="text-xs font-normal text-accent">{helperText}</span>
    </>
  );
};

export const TextArea = ({
  placeholder,
  onChange,
  value,
  labelText,
  helperText,
}: {
  placeholder: string;
  labelText: string;
  helperText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  value: string;
}) => {
  return (
    <>
      <label className="text-sm font-bold text-white">{labelText}</label>
      <textarea
        id="description"
        className="w-full rounded-md border border-accent bg-background p-2 text-light"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <span className="text-xs font-normal text-accent">{helperText}</span>
    </>
  );
};

