interface BaseInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  type?: "text" | "email" | "password";
  value?: string;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const BaseInput = ({
  id,
  label,
  placeholder,
  name,
  type = "text",
  value,
  isRequired,
  minLength,
  maxLength,
  onChange,
  onKeyDown,
  onBlur,
}: BaseInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id ? id : "baseInput"} className="text-gray-900">
          {label}
          {isRequired && <span className="text-primary">*</span>}
        </label>
      )}
      <input
        id={id ? id : "baseInput"}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        required={isRequired}
        className="input-base"
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};

export default BaseInput;
