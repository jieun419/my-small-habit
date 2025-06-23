interface BaseInputProps {
  label: string;
  placeholder: string;
  name?: string;
  type?: "text" | "email" | "password";
  value?: string;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput = ({
  label,
  placeholder,
  name,
  type = "text",
  value,
  isRequired = false,
  minLength,
  maxLength,
  onChange,
}: BaseInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="baseInput" className="text-gray-900">
        {label}
        {isRequired && <span className="text-primary">*</span>}
      </label>
      <input
        id="baseInput"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
        className="input-base"
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};

export default BaseInput;
