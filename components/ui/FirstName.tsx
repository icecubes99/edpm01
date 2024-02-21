import React from "react";

interface FirstNameProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const FirstName = ({ name, type, placeholder, value }: FirstNameProps) => {
  return (
    <>
      <input
        className="w-full p-2 border border-gray-200 "
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};
export default FirstName;
