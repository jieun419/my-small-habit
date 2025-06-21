interface BaseInputProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput = ({ label, placeholder, value, onChange }: BaseInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="baseInput" className="text-gray-900">
        {label}
      </label>
      <input
        id="baseInput"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-base"
      />
    </div>
  );
};

export default BaseInput;
