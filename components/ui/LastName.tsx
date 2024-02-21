import React from "react";

interface LastNameProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const LastName = ({ name, type, placeholder, value }: LastNameProps) => {
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

export default LastName;
