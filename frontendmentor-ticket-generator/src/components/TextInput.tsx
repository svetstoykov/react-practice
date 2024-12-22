import React, { useState, useEffect } from "react";

interface ITextInputProps {
  label: string;
  placeholder: string;
  onChange: (input: string) => void;
  validation?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => string | undefined;
  };
  // Optional error message from parent component
  error?: string;
}

const TextInput: React.FC<ITextInputProps> = ({
  label,
  placeholder,
  onChange,
  validation,
  error: externalError,
}) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string>("");

  const validate = (inputValue: string): string => {
    if (!validation) return "";

    if (validation.required && inputValue.trim() === "") {
      return `${label} is required`;
    }

    if (validation.minLength && inputValue.length < validation.minLength) {
      return `${label} must be at least ${validation.minLength} characters`;
    }

    if (validation.maxLength && inputValue.length > validation.maxLength) {
      return `${label} must be no more than ${validation.maxLength} characters`;
    }

    if (validation.pattern && !validation.pattern.test(inputValue)) {
      return `${label} format is invalid`;
    }

    if (validation.custom) {
      const customError = validation.custom(inputValue);
      if (customError) return customError;
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);

    if (touched) {
      setError(validate(newValue));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  // Use external error if provided
  useEffect(() => {
    if (externalError) {
      setError(externalError);
    }
  }, [externalError]);

  return (
    <fieldset className="flex flex-col">
      <legend>{label}</legend>
      <input
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`
          mt-1 p-2 w-full 
          bg-opacity-[8%] bg-white rounded-xl 
          border-[1px] 
          ${error ? "border-red-500" : "border-white/40"}
          ${
            !error &&
            "hover:border-white/80 focus:border-white hover:shadow-[0_0_5px_white]"
          }
          transition duration-300
          ${error && "focus:border-red-500 hover:shadow-[0_0_5px_#ef4444]"}
        `}
        type="text"
        placeholder={placeholder}
      />

      <p
        className={`overflow-hidden transition-all duration-300 ${
          error && touched ? "h-full" : "h-0"
        } text-sm text-red-500 mt-1.5`}
      >
        {error}
      </p>
    </fieldset>
  );
};

export default TextInput;
