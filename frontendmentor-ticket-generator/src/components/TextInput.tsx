import React from "react";

interface ITextInputProps {
  label: string;
  placeholder: string
}

const TextInput: React.FC<ITextInputProps> = ({ label, placeholder }) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <input
        className="mt-1 p-2 w-full bg-opacity-[8%] bg-white rounded-xl border-[1px] border-white/60
        focus:border-3 
        focus:border-white
        hover:border-3
        hover:shadow-[0_0_5px_white]
        hover:border-white/80
        transition
        duration-300"
        type="text"
        placeholder={placeholder}
      />
    </fieldset>
  );
};

export default TextInput;